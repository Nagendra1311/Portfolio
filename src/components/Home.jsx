import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import photo from '../images/photo.jpg'
import { ReactTyped } from "react-typed";



export default function Home() {
    return (
        <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 '>
                <div className='flex flex-col md:flex-row   '>
                    <div className='md:w-1/2 space-y-2 order-2 md:order-1 mt-12 md:mt-24'>
                        <span className='text-xl'>Welcome In My Feed
                        </span>
                        <h1 className='text-3xl font-semibold '>Hello, I'm a  <ReactTyped
                            className='text-red-700 text-3xl'
                            strings={["Developer", "Programmer", "Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                        </h1>
                        <br />
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus eveniet, numquam rem quidem at voluptate eaque voluptas id tempora libero placeat labore blanditiis itaque perspiciatis non. Culpa, quas consequuntur.</p>
                        <br />
                        <div className='flex sm:justify-between flex-col sm:flex-row items-center space-y-4 '>
                            <div className='space-y-2'>
                                <h4 className='font-bold'>Available On</h4>
                                <div className='flex space-x-4 '>
                                    <FaFacebookSquare className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 duration-200' />
                                    <SiLinkedin className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 duration-200' />
                                    <FaTelegram className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 duration-200' />
                                    <FaSquareInstagram className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 duration-200' />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h4 className='font-bold'>Currently working on</h4>
                                <div className='flex space-x-4 '>
                                    <SiMongodb className='text-2xl sm:text-3xl  cursor-pointer hover:scale-110 duration-200' />
                                    <FaReact className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 duration-200' />
                                    <SiExpress className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 duration-200' />
                                    <FaNodeJs className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 duration-200' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
                        <img src={photo} alt="photo" className='rounded-full md:w-[450px] md:h-[450px]' />
                    </div>
                </div>
                <br /><br /> <br /> <br />
                <hr />
            </div>
        </>
    )
}