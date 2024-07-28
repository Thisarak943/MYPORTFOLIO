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
                <div className="card__details__bottom">
                    <div className="stack__container">
                        <div className="stack__left">Stack</div>
                        <div className="stack__right">
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
                                        return null;
                                    })
                                }
                            </div>
                            {
                                props.stack.length > 4 ? (
                                    <div className="stack_view_more">
                                        <div className="more_btn" onClick={() => setOpenStackExpandBar(!openStackExpandBar)}></div>
                                        <div className={`stack_expand_box ${openStackExpandBar ? "open_stack_expand_box" : ""}`}>
                                            <h3 className="title">More Stack Used</h3>
                                            <div className="stack_box__container">
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
                                                        return null;
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="button__container">
                        <a href={props.demoLink} target='_blank' rel="noopener noreferrer" className='btn btn__primary'>Demo</a>
                        <div className="btn__share"><AiOutlineShareAlt /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
