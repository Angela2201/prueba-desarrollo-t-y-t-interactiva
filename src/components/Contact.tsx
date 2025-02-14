"use client";

import React from 'react';

function Contact() {
    return (
        <div className='py-12 px-80 bg-gray-100 felx flex-col gap-10'>
            <div>
                <h1 className='text-center text-orange-template text-5xl font-extrabold tracking-widest'>D I S E Ñ A   T U  V I A J E</h1>
            </div>
            <div className='mt-10'>
                <p className='font-bold'>AQUÍ COMIENZA TU EXPERIENCIA</p>
            </div>
            <div className='mt-10'>
                <p>Una vez llenado este formulario, uno de nuestros planners travelers se pondra en contacto contigo para perfeccionar ese viaje que tanto has soñado. Estamos aquí para brindarte la mejor experiencia.</p>
            </div>
            <form className='flex flex-col gap-5 mt-10'>
                <div className='flex flex-row justify-between gap-5'>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <div>
                            <label>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</label>
                        </div>
                        <select className='border rounded-lg p-3'>
                            <option value="" hidden>Selecciona una opción</option>
                            <option value="SAFARI">SAFARI</option>
                            <option value="JAPÓN">JAPÓN</option>
                            <option value="EGIPTO">EGIPTO</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <div>
                            <label>¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
                        </div>
                        <select className='border rounded-lg p-3'>
                            <option value="" hidden>Selecciona una opción</option>
                            <option value="SAFARI">SAFARI</option>
                            <option value="JAPÓN">JAPÓN</option>
                            <option value="EGIPTO">EGIPTO</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <label>¿QUÉ EXPERIENCIAS QUIERES VIVIR?</label>
                    <div className='grid grid-cols-3 gap-3'>
                        <a className='bg-white py-1 px-5 rounded-md text-gray-500 text-center border cursor-pointer'>SAFARI</a>
                        <a className='bg-white py-1 px-5 rounded-md text-gray-500 text-center border cursor-pointer'>DEPORTE</a>
                        <a className='bg-white py-1 px-5 rounded-md text-gray-500 text-center border cursor-pointer'>ARTE Y CULTURA</a>
                        <a className='bg-white py-1 px-5 rounded-md text-gray-500 text-center border cursor-pointer'>DESCANSO</a>
                        <a className='bg-white py-1 px-5 rounded-md text-gray-500 text-center border cursor-pointer'>ESPIRITUAL</a>
                        <a className='bg-white py-1 px-5 rounded-md text-gray-500 text-center border cursor-pointer'>PLAYA</a>
                        <a className='bg-white py-1 px-5 rounded-md text-gray-500 text-center border cursor-pointer'>NATURALEZA</a>
                    </div>
                </div>
                <div className='flex flex-row gap-5 justify-center items-center'>
                    <div className='flex flex-row gap-3 w-1/3'>
                        <label>¿SABES CUÁNDO VIAJAR?</label>
                        <div className='flex flex-row gap-2'>
                            <input type="radio" value="SI" />
                            <label>SI</label>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <input type="radio" value="NO" />
                            <label>NO</label>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 w-1/3 border rounded-lg p-3 bg-white'>
                        <label>IDA:</label>
                        <input className='w-full' type="date" />
                    </div>
                    <div className='flex flex-row gap-5 w-1/3 border rounded-lg p-3 bg-white'>
                        <label>REGRESO:</label>
                        <input className='w-full' type="date" />
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-2 items-center'>
                        <label>NIÑOS:</label>
                        <select className='border rounded-lg p-3'>
                            <option value="" hidden>Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <label>ADULTOS:</label>
                        <select className='border rounded-lg p-3'>
                            <option value="" hidden>Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <label>TU VIAJE IDEAL...</label>
                    <textarea className='h-32' name="" id=""></textarea>
                </div>
                <div className='flex justify-center'>
                    <button className='py-4 px-10 border rounded-lg bg-orange-template' type="submit">
                        <p className='text-white font-bold'>ENVIAR</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
