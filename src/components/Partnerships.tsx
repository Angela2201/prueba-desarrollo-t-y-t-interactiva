"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

function Partnerships() {
    const [partner, setPartner] = useState<{ logo: string | null }[]>([]);

    useEffect(() => {
        fetch("https://api.test.interactiva.net.co/api/get-partners/")
            .then((response) => response.json())
            .then((data) => setPartner(data))
            .catch((error) => console.log("Error when obtaining data:", error));
    }, [])

    return (
        <div className='px-80 mt-20 flex flex-col'>
            <div>
                <h1 className='text-center text-orange-template text-5xl font-extrabold tracking-widest'>A L I A N Z A S  E S T R A T É G I C A S</h1>
            </div>
            <div className='flex flex-row gap-10 justify-center items-center mx-14 py-20'>
                {partner
                    .filter(item => item.logo)
                    .map((item, index) => (
                        <Image
                            key={index}
                            src={`https://api.test.interactiva.net.co${item.logo}`}
                            alt="Partner logo"
                            width={200}
                            height={200}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Partnerships;
