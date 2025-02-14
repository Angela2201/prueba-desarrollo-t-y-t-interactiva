"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

function Header() {

    interface Information {
        id: number;
        logo: string;
    }

    const [logo, setLogo] = useState<Information[]>([])

    useEffect(() => {
        fetch("https://api.test.interactiva.net.co/api/get-companies/")
            .then((response) => response.json())
            .then((logo) => setLogo(logo))
            .catch((error) => console.log("Error when obtaining data:", error));
    }, [])

    return (
        <div className="flex justify-between items-center p-20">
            <div>
                {
                    logo.map((item) => (
                        <Image
                            key={item.id}
                            src={`https://api.test.interactiva.net.co${item.logo}`}
                            alt={`Logo of company ${item.id}`}
                            width={200}
                            height={200}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row gap-10">
                <button>Inicio</button>
                <button>Nosotros</button>
                <button>Viajes</button>
                <button>Blogs</button>
                <button>Contacto</button>
            </div>
        </div>
    );
}

export default Header;
