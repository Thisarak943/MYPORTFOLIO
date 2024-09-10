import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { sumArray } from '../helper';
import { projects } from '../../data';
import Card from './Card';

const tabs = [
    { name: "All" },
    { name: "Web" },
    { name: "UI/UX" },
    { name: "Apps" },
];

const Projects = () => {
    const [displayableProjects, setDisplayableProjects] = useState(projects);
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const itemsEls = useRef([]);

    useEffect(() => {
        const updateIndicator = () => {
            const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
            setOffset(
                sumArray(
                    prevEl.map(item => item.offsetWidth)
                )
            );
            setIndicatorWidth(itemsEls.current[activeIndex]?.offsetWidth || 0);
        };
        
        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        
        return () => {
            window.removeEventListener('resize', updateIndicator);
        };
    }, [activeIndex]);


    const setProjects = (category) => {
        if (category === "All") {
            return setDisplayableProjects(projects);
        }
        const filteredProjects = projects.filter((item) => item.category.toLowerCase() === category.toLowerCase());
        setDisplayableProjects(filteredProjects);
    };

    useEffect(() => {
        setProjects(tabs[activeIndex].name);
    }, [activeIndex]);

    return (
        <section id="projects">
            <div className="section__wrapper projects__container">
                <div className="center">
                    <h2 className="primary__title">Projects</h2>
                </div>
            </div>
            <nav>
                {tabs.map((tab, index) => (
                    <button
                        ref={el => itemsEls.current[index] = el}
                        onClick={() => setActiveIndex(index)}
                        key={index}
                    >
                        {tab.name}
                    </button>
                ))}
                <span
                    className="active__indicator"
                    style={{
                        left: `${offset}px`,
                        width: `${indicatorWidth}px`
                    }}
                />
            </nav>
            <div className='card__container'>
                {displayableProjects.map((project, index) => (
                    <Card
                        title={project.title}
                        image={project.image}
                        description={project.data.description}
                        stack={project.stack}
                        demoLink={project.data.demoLink}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
