import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Profile photos
import jamesPhoto from './assets/james.jpg'
import alexPhoto from './assets/alex.jpg'
import liliaPhoto from './assets/liliya.jpg'
import melissaPhoto from './assets/melissa.jpg'

//Social icons
import x from './assets/x.svg'
import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'

function Profiles() {

    const people = [
        {
            name: "James Alexander",
            job: "Full Stack developer",
            src: jamesPhoto,
            alt: "James photo"
        },
        {
            name: "Lilia Williams",
            job: "UX/UI Designer",
            src: alexPhoto,
            alt: "Alex photo"
        },
        {
            name: "Melissa Taylor",
            job: "Data Science",
            src: liliaPhoto,
            alt: "Lilia photo"
        },
        {
            name: "Alexander Smith",
            job: "Product Manager",
            src: melissaPhoto,
            alt: "Melissa photo"
        },
    ];

    const listPeople = people.map(
        (e) => {
            return (
                <article className="team-member">
                    <img
                        className="team-member-avatar"
                        src={e.src}
                        alt={e.alt}
                    />
                    <div className="team-memeber-name">
                        <h3>{e.name}</h3>
                        <p>{e.job}</p>
                    </div>
                    <ul className="social-links">
                        <li>
                            <a href="#">
                                <img
                                    src={linkedin}
                                    alt="Linkedin"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src={instagram}
                                    alt="Instagram"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src={x}
                                    alt="X"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src={github}
                                    alt="Github"
                                />
                            </a>
                        </li>
                    </ul>
                </article>
            );
        }
    );

    return (
        <div className="team-members">
            {listPeople}
        </div>
    );
}

function Hola() {
    return (
        <>
            <h1>Hola mundo</h1>
        </>
    );
}

function App() {

    return (
        <>
            <Profiles />
        </>
    );
}

export default App
