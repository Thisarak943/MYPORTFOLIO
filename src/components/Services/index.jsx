import React from 'react';
import './Services.css'
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { MdPhoneAndroid } from 'react-icons/md' // New icon for mobile apps development

const Services = () => {
    return (
        <section id='services'>
            <div className='section_wrapper services_wrapper'>
                <div className='section_header center'>
                    <h2 className='primary_title'>Services</h2>
                    <p className='text_muted description'>
                        I transform your ideas, and consequently your desires, into a
                        distinctive web project that both inspires you and captivates your customers.
                    </p>
                </div>

                <div className='services_group'>
                    <article className='service'>
                        <div className='service_top'>
                            <div className='icon_container'>
                                <FaPaintBrush className='icon'/>
                            </div>
                            <h3 className='title'>UI/UX Design</h3>
                        </div>
                        <div className='service_middle'>
                            <p className='text_muted description'>
                            UI/UX design focuses on creating user-friendly interfaces and improving the user experience. 
                             UI emphasizes aesthetics and ease of navigation, while UX ensures functionality and efficiency.
                              Together, they balance design and usability to help users achieve their goals effortlessly.
                            </p>
                        </div>
                        <div className='service_bottom'>
                            <button className='btn btn_primary'>Read more</button>
                        </div>
                    </article>
                    {/* End UI/UX */}

                    <article className="service" style={{ "--color-primary": "var(--color-success)" }}>
                        <div className='service_top'>
                            <div className='icon_container'>
                                <BsCodeSquare className='icon'/>
                            </div>
                            <h3 className='title'>Web Development</h3>
                        </div>
                        <div className='service_middle'>
                            <p className='text_muted description'>
                            Web design focuses on creating visually appealing and functional websites. It combines layout, color schemes, 
                            typography, and responsive design to ensure a seamless user experience across devices. Good web design enhances 
                            usability, improves navigation, and aligns with a brand’s identity to engage and retain visitors.
                            </p>
                        </div>
                        <div className='service_bottom'>
                            <button className='btn btn_primary'>Read more</button>
                        </div>
                    </article>
                    {/* End Web Development */}

                    <article className='service' style={{ "--color-primary": "blueviolet" }}>
                        <div className='service_top'>
                            <div className='icon_container'>
                                <MdPhoneAndroid className='icon'/> {/* Updated icon */}
                            </div> 
                            <h3 className='title'>Mobile Apps Development</h3>
                        </div>
                        <div className='service_middle'>
                            <p className='text_muted description'>
                            Mobile app development involves creating applications for smartphones and tablets, 
                            focusing on user-friendly interfaces and performance. It combines intuitive design,
                             responsive layouts, and efficient coding to ensure apps run smoothly across devices. 
                            </p>
                        </div>
                        <div className='service_bottom'>
                            <button className='btn btn_primary'>Read more</button>
                        </div>
                    </article>
                    {/* End Mobile Apps Development */}
                </div>
            </div>
        </section>
    )
}

export default Services;
