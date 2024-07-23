import React, { useState } from 'react';
import "./Card.css";
import { AiOutlineShareAlt } from 'react-icons/ai';

const Card = (props) => {
    const [openStackExpandBar, setOpenStackExpandBar] = useState(false);

    return (
        <div className='card'>
            <div className="picture">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card__details">
                <div className="card__details__top">
                    <h2 className="title">{props.title}</h2>
                </div>
                <div className="card__details__middle">
                    <p className='description'>
                        {props.description}
                    </p>
                </div>
                <div className="card_details_bottom">
                    <div className="stack_container">
                        <div className="stack_left">Stack</div>
                        <div className="stack_right">
                            <div className="stack_box__container">
                                {
                                    props.stack.map((list, index) => {
                                        if (index < 4) {
                                            return (
                                                <div className="stack_box" key={index}>
                                                    <div className="stack_icon_container">
                                                        <span className="stack_icon" style={{ color: list.iconColor }}>
                                                            {list.icon}
                                                        </span>
                                                    </div>
                                                    <span className="stack_name">
                                                        {list.name}
                                                    </span>
                                                </div>
                                            )
                                        }
                                        return null; // Add return null to avoid ESLint warning
                                    })
                                }
                            </div> {/* end stack_box__container */}
                            {
                                props.stack.length > 4 ? (
                                    <div className="stack_view_more">
                                        <div className="more_btn" onClick={() => setOpenStackExpandBar(!openStackExpandBar)}></div>
                                        <div className={`stack__expand__box ${openStackExpandBar ? "open__stack__expand__box" : ""}`}>
                                            <h3 className="title">More Stack Used</h3>
                                            <div className="stack__box__container">
                                                {
                                                    props.stack.map((list, index) => {
                                                        if (index >= 4) {
                                                            return (
                                                                <div className="stack_box" key={index}>
                                                                    <div className="stack_icon_container">
                                                                        <span className="stack_icon" style={{ color: list.iconColor }}>
                                                                            {list.icon}
                                                                        </span>
                                                                    </div>
                                                                    <span className="stack_name">
                                                                        {list.name}
                                                                    </span>
                                                                </div>
                                                            )
                                                        }
                                                        return null; // Add return null to avoid ESLint warning
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ) : ""
                            }
                        </div>
                    </div> {/* end of the stack__container */}
                    <div className="button__container">
                        <a href={props.demoLink} target='_blank' className='btn btn__primary'>Demo</a>
                        <div className="btn__share"><AiOutlineShareAlt /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
