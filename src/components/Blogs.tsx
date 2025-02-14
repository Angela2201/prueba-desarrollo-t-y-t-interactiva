"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

function Blogs() {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch("https://api.test.interactiva.net.co/api/get-blogs/")
            .then((response) => response.json())
            .then((blog) => setBlog(blog))
            .catch((error) => console.log("Error when obtaining data:", error));
    }, [])

    const leftItems = blog.filter(item => item.id === 1);
    const rightItems = blog.filter(item => item.id === 2 || item.id === 3);

    return (
        <div className="mt-10 py-24 px-40 bg-orange-template">
            <div className="text-center font-extrabold text-white tracking-widest">
                <h1 className="text-5xl">B L O G S</h1>
            </div>

            <div className="flex flex-row justify-center gap-32 mt-10">
                <div className="flex flex-col w-[30%] gap-5">
                    {leftItems.map(item => (
                        <div key={item.id} className="bg-white p-8 rounded-xl flex flex-col gap-5">
                            <div>
                                <Image
                                    src={`https://api.test.interactiva.net.co${item.image_content}`}
                                    alt={item.title}
                                    width={400}
                                    height={350}
                                />
                            </div>
                            <div className="font-bold text-lg">
                                <p>{item.title}</p>
                            </div>
                            <div className="text-sm">
                                <p>{item.description}</p>
                            </div>
                            <div className="text-right">
                                <a className="cursor-pointer text-orange-template border-orange-template border-b">LEER MÁS</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center gap-10 w-[30%]">
                    {rightItems.map(item => (
                        <div key={item.id} className="bg-white p-8 rounded-xl flex flex-col gap-5 h-1/2">
                            <div>
                                <Image
                                    src={`https://api.test.interactiva.net.co${item.image_content}`}
                                    alt={item.title}
                                    width={400}
                                    height={400}
                                    className="h-52 rounded-lg"
                                />
                            </div>
                            <div className="font-bold text-lg">
                                <p>{item.title}</p>
                            </div>
                            <div className="text-right mt-8">
                                <a className="cursor-pointer text-orange-template border-orange-template border-b">LEER MÁS</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Blogs;
