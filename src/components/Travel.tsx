"use client";

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';

export default function Travel() {

    const [groupExperiences, setGroupExperiences] = useState([]);
    const [personalExperiences, setPersonalExperiences] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [groupExperiencesResponse, personalExperiencesResponse] = await Promise.all([
                    fetch("https://api.test.interactiva.net.co/api/get-travels/"),
                    fetch("https://api.test.interactiva.net.co/api/get-customer_experiences/"),
                ]);

                if (!groupExperiencesResponse.ok || !personalExperiencesResponse.ok) {
                    throw new Error("Error al obtener datos");
                }

                const groupExperiencesData = await groupExperiencesResponse.json();
                const personalExperiencesData = await personalExperiencesResponse.json();

                setGroupExperiences(groupExperiencesData);
                setPersonalExperiences(personalExperiencesData);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchData()
    }, [])

    return (
        <div className='mt-16 px-80'>
            <div>
                <h1 className="font-bold text-4xl tracking-widest text-center text-orange-400">EXPERIENCIAS GRUPALES</h1>
            </div>
            <div className='flex flex-row gap-20 items-center mt-20'>
                <Carousel className="rounded-xl flex flex-row">
                    {
                        groupExperiences.map((item, id) => (
                            <div key={item.id} className='flex flex-col justify-center items-center'>
                                <Card
                                    image_cover={item.image_cover}
                                    status={item.status}
                                    title={item.title}
                                    description={item.description}
                                    date_start={item.date_start}
                                    date_end={item.date_end}
                                    cost={item.cost}
                                />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className='mt-32'>
                {
                    personalExperiences.map((item, id) => (
                        <div key={id}>
                            <div>
                                <h1 className="font-bold text-5xl tracking-wide text-center text-orange-template">{item.title}</h1>
                            </div>
                            <div className='mt-10 flex flex-row justify-center gap-12'>
                                <div className='w-1/3'>
                                    <Image
                                        src={`https://api.test.interactiva.net.co${item.image}`}
                                        alt={item.image}
                                        width={400}
                                        height={400}
                                    />
                                </div>
                                <div className='w-2/3 py-5 flex flex-col gap-5 justify-center'>
                                    <div>
                                        <p className='text-3xl font-bold'>{item.description}</p>
                                    </div>
                                    <div>
                                        <p className='text-xl'>{item.diference_description}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <button className='py-5 px-8 border rounded-lg bg-orange-template text-white font-bold'>COTIZAR MI VIAJE</button>
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
