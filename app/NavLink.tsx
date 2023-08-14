import Link from "next/link";

type Props = {
    category: string;
    isActive: boolean;
}

function NavLink({category, isActive }: Props) {
  return <Link href={`/news/${category}` }
  className={`navLink ${
    isActive && 
    "underline decoration-teal-500 underline-offset-4 font-bold text-lg"
}`}
  >{category}
  </Link>
}

export default NavLink