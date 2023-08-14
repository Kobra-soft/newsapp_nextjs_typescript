"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
    const [input, setInput] = useState("");
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;

        router.push(`/search?term=${input}`);
    };

    return (
    <form 
    onSubmit={handleSearch}
    className="bg-gray-50 max-w-7xl mx-auto flex justify-between items-center px-5">

        <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="w-full h-14
        placeholder-gray-400
        placeholder-opacity-70
        text-gray-400 outline-none
        flex-1 bg-transparent
        dark:text-teal-500"
        />

        <button
        type="submit"
        disabled={!input}
        className="text-teal-400"
        >Search</button>

    </form>

  )

}

export default SearchBox;
