
/* import { useEffect, useState } from "react"; */
import AboutUs from "@/components/AboutUs";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Partnerships from "@/components/Partnerships";
import Travel from "@/components/Travel";
import Image from "next/image";

export default async function Home() {

  const [bannersRes, categoriesRes] = await Promise.all([
    fetch("https://api.test.interactiva.net.co/api/get-banners/", { cache: "no-store" }),
    fetch("https://api.test.interactiva.net.co/api/get-categories/", { cache: "no-store" }),
  ]);

  const [bannersData, categoriesData] = await Promise.all([
    bannersRes.json(),
    categoriesRes.json(),
  ]);

  return (
    <>
      <div>
        <div>
          {bannersData.map((item) => (
            <Image
              key={item.id}
              src={`https://api.test.interactiva.net.co${item.image}`}
              alt={`Image of company ${item.id}`}
              width={1920}
              height={1080}
              className="absolute inset-0 bg-cover bg-center -z-10" />
          ))}
        </div>
        <div className="flex flex-col justify-center text-center gap-5 mt-36">
          <div>
            <h1 className="font-bold text-7xl tracking-widest text-white">T H E  T R A V E L</h1>
          </div>
          <div>
            <h2 className="font-bold text-5xl tracking-widest text-orange-template">E X P ER I E N C E</h2>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-center pt-10">
          {categoriesData.map((item) => (
            <div key={item.id}>
              <Image
                src={`https://api.test.interactiva.net.co${item.image_banner}`}
                alt={`Image of category ${item.id}`}
                width={300}
                height={300}
                className="border-8 border-white/35 rounded-lg"
              />
              <div className="flex justify-end -mt-10 pr-5">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <a className="text-white font-semibold cursor-pointer">{item.name}</a>
                  <div className="text-white w-5 p-1s">
                    <a className="border rounded-full px-1  border-white cursor-pointer"> {'>'} </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AboutUs />
      <Travel />
      <Blogs />
      <Contact />
      <Partnerships />
      <div className="bg-blue-950 py-14 px-52">
        <div className="flex flex-col justify-center items-center gap-8">
          <div>
            <p className="text-white font-light">Suscríbete a nuestro newsletter y recibe noticias, descuentos y más</p>
          </div>
          <div className="rounded-lg bg-white p-3 w-1/2">
            <input className="w-full" type="text" placeholder="Correo electrónico" />
          </div>
          <button className='py-3 px-8 rounded-lg bg-orange-template' type="submit">
            <p className='text-white font-bold'>SUSCRIBIRME</p>
          </button>
        </div>
      </div>
    </>
  );
}
