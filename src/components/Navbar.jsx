import React, { useState } from 'react'
import photo from '../images/photo.jpg'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';


export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const navLi = [
        {
            id: 1,
            text: 'Home'
        },
        {
            id: 2,
            text: 'About'
        },
        {
            id: 3,
            text: 'Skills'
        },
        {
            id: 4,
            text: 'Portfolio'
        },
        {
            id: 5,
            text: 'Contact'
        }
    ]
    return (
        <>
            <div className='max-w-screen-2xl bg-white container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 '>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={photo} alt="image" className='w-12 h-12 rounded-full' />
                        <h1 className='font-bold text-xl cursor-pointer'>
                            <span className='text-regular text-2xl'>N</span>agendra
                            <p className='text-sm'>Web Developer</p>
                        </h1>

                    </div>

                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navLi.map(({ text, id }) => (

                                    <li className='hover:scale-105 duration-200 font-bold cursor-pointer' key={id}>
                                        <Link
                                            to={text}
                                            smooth={true}
                                            duration={1000}
                                            offset={-70}
                                            activeClass='active'
                                        >{text}</Link>
                                    </li>
                                ))
                            }

                        </ul>
                        <div className='md:hidden cursor-pointer' onClick={() => setMenu(!menu)}> {menu === false ? <AiOutlineMenu size={24} /> : <RxCross2 size={24} />} </div>
                    </div>
                </div>
                <div className='bg-white'>
                    {
                        menu && (
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
                                {
                                    navLi.map(({ text, id }) => (

                                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                            <Link
                                                onClick={() => setMenu(!menu)}
                                                to={text}
                                                smooth={true}
                                                duration={1000}
                                                offset={-70}
                                                activeClass='active'
                                            >{text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>

        </>
    )
}
