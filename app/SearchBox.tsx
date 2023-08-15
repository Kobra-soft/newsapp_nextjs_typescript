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
    className="bg-gray-50 max-w-7xl mx-auto flex justify-between items-center pl-0 border-b">

        <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for keywords..."
        className="w-full h-14 pl-4
        placeholder-gray-400/60
        placeholder-opacity-70
        text-gray-400 outline-none
        flex-1 
        dark:text-teal-500
        font-light"
        />

        <button
        type="submit"
        disabled={!input}
        className="text-gray-400/60 py-4 px-5 bg-gray-100/70 cursor-pointer font-light"
        >Search</button>

    </form>

  )

}

export default SearchBox;
