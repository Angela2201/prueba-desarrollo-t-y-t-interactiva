"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

interface Information {
  id: number;
  logo: string;
}

function Footer() {
  const [logo, setLogo] = useState<Information[]>([])

  useEffect(() => {
    fetch("https://api.test.interactiva.net.co/api/get-companies/")
      .then((response) => response.json())
      .then((data) => setLogo(data))
      .catch((error) => console.log("Error when obtaining data:", error));
  }, [])

  return (
    <div className="flex items-center py-20 px-40">
      <div>
        {
          logo.map((item, id) => (
            <div key={item.id} className="flex gap-20">
              <div>
                <Image
                  src={`https://api.test.interactiva.net.co${item.logo}`}
                  alt={`Logo of company ${item.id}`}
                  width={200}
                  height={200} />
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col items-start">
                  <button>Inicio</button>
                  <button>¿Quiénes somos?</button>
                  <button>Viajes grupales</button>
                  <button>Viajes a la medida</button>
                  <button>Alianzas estratégicas</button>
                  <button>Blogs</button>
                  <button>Términos y condiciones</button>
                  <button>Política de privacidad</button>
                  <button>Registro Nacional de Turismo</button>
                </div>
                <div>
                  <div>
                    <a href="">{item.email}</a>
                  </div>
                  <div>
                    <a href="">{item.phone}</a>
                  </div>
                  <div>
                    <a href="">{item.direction}</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Footer;
