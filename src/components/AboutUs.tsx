"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from "@material-tailwind/react";

/* interface AboutUsProps {
    children: React.ReactNode;
} */

function AboutUs() {

    interface Company {
        id: number;
        description: string;
        feed_instagram: Array<string>;
        instagram_account: string;
    }

    const [data, setData] = useState<Company[]>([])

    useEffect(() => {
        fetch("https://api.test.interactiva.net.co/api/get-companies/")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log("Error when obtaining data:", error));
    }, [])

    return (
        <div className='mt-56 px-80'>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <div>
                            <h2 className="font-bold text-5xl tracking-widest text-center text-orange-template">N O S O T R O S</h2>
                            <p className='mt-10'>{item.description}</p>
                        </div>
                        <div className='mt-10'>
                            <Carousel className="rounded-xl">
                                {item.feed_instagram.map((child, index) => (
                                    <Image
                                        key={index}
                                        src={`https://api.test.interactiva.net.co${child.image}`}
                                        alt={`Instagram feed ${index}`} width={500}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                ))}
                            </Carousel>
                            <div className='mt-5 text-orange-400'>
                                <p>{item.instagram_account}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='w-full h-[1px] bg-orange-400 mt-10' />
        </div>
    );
}

export default AboutUs;
