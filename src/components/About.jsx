import React from "react";

function About() {
    return (
        <div
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 "
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">About</h1>
                <p>
                    Hello, I'm Nagendra Gupta, a passionate Web developer with a keen eye for MERN
                    Stack . With a background in IT, I strive to create impactful and
                    visually stunning Software solutions that leave a lasting impression.
                </p>
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Education & Training
                </h1>
                <span>
                    Diploma in Computer Science & Engineering from Mahamaya IT Polytechnic in 2023
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span>
                    Proficient in [JavaScript Programming Languages]
                    Excellent problem-solving skills Effective communicator and
                    collaborator
                </span>


                <br />
                <br />

                <h1 className="text-green-600 font-semibold text-xl">
                    Mission Statement
                </h1>
                <p>
                    My mission is to leverage my skills and creativity to deliver
                    innovative [Your Field] solutions that exceed client expectations and
                    contribute positively to the digital landscape. I am committed to
                    continuous learning and growth, always seeking new challenges and
                    opportunities to expand my horizons.
                </p>
            </div>
        </div>
    );
}

export default About;