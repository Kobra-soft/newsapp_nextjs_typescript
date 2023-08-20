import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => 
{
    // GraphQL query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
    `;

    // Fetch function with next.js 13 caching...
    const res = await fetch(
      'https://sanbartolome.stepzen.net/api/turbulent-bunny/__graphql', 
    {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        }),
    }
    );

    console.log(
        "LOADING NEW DATA FROM API for category >>> ",
        category,
        keywords
    );

    const newsResponse = await res.json();

    // Sort function by images vs not images present
    const news = sortNewsByImage(newsResponse.data.myQuery);
    /* const news = newsResponse?.data?.myQuery ? sortNewsByImage(newsResponse.data.myQuery) : []; */

    return news;
};

export default fetchNews;

// Live News Data

// http://api.mediastack.com/v1/news?access_key=f6b499e9ef0d7e84bc4b01cd73323fb3

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=f6b499e9ef0d7e84bc4b01cd73323fb3"

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=f6b499e9ef0d7e84bc4b01cd73323fb3&sources=business,sports"

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=f6b499e9ef0d7e84bc4b01cd73323fb3&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"