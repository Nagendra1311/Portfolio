import React from 'react'
import express from '../images/express.png'
import html from '../images/html.png'
import bootstrape from '../images/bootstrape.png'
import tailwind from '../images/tailwind.png'
import javascript from '../images/javascript.png'
import node from '../images/node.png'
import reactjs from '../images/reactjs.png'
import mongodb from '../images/mongodb.jpg'

export default function Skills() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "Html",
        },
        {
            id: 2,
            logo: bootstrape,
            name: "Bootstrape",
        },
        {
            id: 3,
            logo: javascript,
            name: "Javascript",
        },
        {
            id: 4,
            logo: reactjs,
            name: "Reactjs",
        },
        {
            id: 5,
            logo: node,
            name: "Node.js",
        },
        {
            id: 6,
            logo: mongodb,
            name: "Mongodb",
        },
        {
            id: 7,
            logo: express,
            name: "Express js",
        },
        {
            id: 8,
            logo: tailwind,
            name: "Tailwind ",
        },
    ];
    return (
        <div
            name="Skills"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">Skills</h1>
                <p className="  ">
                    I've more than 2 years of experiance in below technologies.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3 ">
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                            key={id}
                        >
                            <img src={logo} className="w-[150px] rounded-full" alt="skills-img" />
                            <div>
                                <div className="">{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}