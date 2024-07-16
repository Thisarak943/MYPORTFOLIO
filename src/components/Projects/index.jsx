import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { sumArray } from '../helper';

const tabs = [
    { name: "All" },
    { name: "Web" },
    { name: "UI/UX" },
    { name: "Apps" },
];

const Projects = () => {
    const [displayableProjects,SetDisplayableProjects]=useState()
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

    return (
        <section id="projects">
            <div className="section__wrapper projects__container">
                <div className="section__header center">
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
        </section>
    );
};

export default Projects;
