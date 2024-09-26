import React, { useState, useEffect } from 'react';
import './Facts.css';
import Odometer from 'react-odometerjs';

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(5);
      setProjects(50);
      setClients(5)
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='fact_container'>
      <div className='fact_item'>
        <div className='count_container'>
          <Odometer value={experience} />
          <span className='indicator'>+</span>
        </div>
        <p className='name'>Years Of Experience</p>
      </div>

      <div className='fact_item'>
        <div className='count_container'>
          <Odometer value={projects} />
          <span className='indicator'>+</span>
        </div>
        <p className='name'>Completed Projects</p>
      </div>

      <div className='fact_item'>
        <div className='count_container'>
          <Odometer value={clients} />
          <span className='indicator'>K</span>
        </div>
        <p className='name'>Satisfied Clients</p>
      </div>

    </div>
  );
};

export default Facts;
