import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import OverComponent from '../OverComponent';
import OwlCarouselOptions from './options';
import VisibilitySensor from 'react-visibility-sensor';
import './TemplateHeaderCarAPD.css';

export default function TemplateHeaderCarAPD(props) {
    const { options, isUxManager, showEditComponentModal } = props;
    return (
        <>
            {true ? (
                <OwlCarousel className="home-slides owl-carousel owl-theme" {...OwlCarouselOptions}>
                    {options.map((data, idx) => (
                        <div
                            key={idx}
                            className="main-banner item-bg2"
                            style={{
                                backgroundImage: `url(${data.image})`,
                            }}
                        >
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <VisibilitySensor>
                                            {({ isVisible }) => (
                                                <div className="main-banner-content">
                                                    <span
                                                        className={
                                                            isVisible
                                                                ? 'animated fadeInUp opacityOne'
                                                                : 'opacityZero'
                                                        }
                                                    >
                                                        New Inspiration 2020
                                                    </span>
                                                    <h1
                                                        className={
                                                            isVisible
                                                                ? 'animated fadeInUp opacityOne'
                                                                : 'opacityZero'
                                                        }
                                                    >
                                                        {data.title}
                                                    </h1>
                                                    <p
                                                        className={
                                                            isVisible
                                                                ? 'animated fadeInUp opacityOne'
                                                                : 'opacityZero'
                                                        }
                                                    >
                                                        {data.description}
                                                    </p>

                                                    <Link
                                                        to={data.titleUrl}
                                                        className={`btn btn-primary ${
                                                            isVisible
                                                                ? 'animated fadeInUp opacityOne'
                                                                : 'opacityZero'
                                                        }`}
                                                    >
                                                        Shop Women's
                                                    </Link>

                                                    <Link
                                                        to={data.descriptionUrl}
                                                        className={`btn btn-light ${
                                                            isVisible
                                                                ? 'animated fadeInUp opacityOne'
                                                                : 'opacityZero'
                                                        }`}
                                                    >
                                                        Shop Men's
                                                    </Link>
                                                </div>
                                            )}
                                        </VisibilitySensor>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            ) : (
                ''
            )}
        </>
    );
}
