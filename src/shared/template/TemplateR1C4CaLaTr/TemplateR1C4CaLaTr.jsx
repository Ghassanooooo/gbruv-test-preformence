import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import './TemplateR1C4CaLaTr.css';
import OverComponent from '../OverComponent';
import OwlCarouselOptions from './options';

const RenderImage = (img) => {
    if (typeof img == 'object') {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    } else {
        return <img src={img} alt="image" />;
    }
};
const TemplateR1C4CaLaTr = (props) => {
    const { title, options, isUxManager, showEditComponentModal } = props;
    return (
        <section className="offer-area ptb-60">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <span className="dot"></span> {title}
                    </h2>
                </div>

                <div className="row">
                    {true ? (
                        <OwlCarousel
                            className="offer-slides owl-carousel owl-theme"
                            {...OwlCarouselOptions}
                        >
                            {options.map((data, idx) => (
                                <div className="col-lg-12 col-md-12" key={idx}>
                                    {isUxManager && (
                                        <OverComponent
                                            {...data}
                                            showEditComponentModal={showEditComponentModal}
                                        />
                                    )}
                                    <div className="single-offer-box">
                                        {RenderImage(data.image)}

                                        <div className="offer-content">
                                            <h3>{data.title}</h3>
                                            <span>{data.description}</span>
                                        </div>

                                        <Link href="#">
                                            <a></a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </section>
    );
};

export default TemplateR1C4CaLaTr;
