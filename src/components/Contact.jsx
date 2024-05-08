
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaMapSigns } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";



function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fpx5csg', 'template_g2v24er', form.current, {
                publicKey: 'F7mhI9IYIZz94pyOS',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Form send Successfully')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <>
            <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
                <h1 className="text-3xl font-bold mb-4">Contact me</h1>
                <span>Please fill out the form below to contact me</span>
                <div className=" flex gap-20 flex-col md:flex-row items-center justify-evenly mt-5">
                    <div className='space-y-3'>
                        <div className='space-y-3'>
                            <div className=' bg-black w-[100px] h-[100px] border-[2px] rounded-full flex justify-center items-center  '> <FaMapSigns className='text-4xl text-white' /></div>
                            <h3 className=' font-semibold'>ADDRESS
                                <p>Partawal Bazar , Maharajganj,UP</p>
                            </h3>

                        </div>
                        <div className='space-y-3'>
                            <div className=' bg-black w-[100px] h-[100px] border-[2px] rounded-full flex justify-center items-center '> <IoIosCall className='text-4xl text-white' /></div>
                            <h3 className=' font-semibold'>CONTACT NUMBER

                                <p>+91-9628960163, 8005403961</p>
                            </h3>

                        </div>
                        <div className='space-y-3'>
                            <div className=' bg-black w-[100px] h-[100px] border-[2px] rounded-full flex justify-center items-center '> <SiMinutemailer className='text-4xl text-white' /></div>
                            <h3 className=' font-semibold'>EMAIL ADDRESS

                                <p>nagendragupta3248@gmail.com</p>
                            </h3>

                        </div>
                    </div>
                    <form
                        ref={form} onSubmit={sendEmail}
                        className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
                    >
                        <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">FullName</label>
                            <input
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your fullname"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">Email Address</label>
                            <input

                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Enter your Query"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
