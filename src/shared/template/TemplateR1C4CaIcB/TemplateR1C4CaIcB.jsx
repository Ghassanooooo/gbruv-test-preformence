import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OverComponent from '../OverComponent';
import './TemplateR1C4CaIcB.css';
import OwlCarousel from 'react-owl-carousel3';
import OwlCarouselOptions from './options';

const RenderImage = (img) => {
    if (typeof img == 'object') {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    } else {
        return <img src={img} alt="image" />;
    }
};
const TemplateR1C4CaIcB = (props) => {
    const { title, options, isUxManager, showEditComponentModal, description } = props;
    return (
        <section className="popular-products-area pb-60">
            <div className="container">
                <div className="tab products-category-tab-style-2">
                    <div className="title">
                        <h2>
                            <span className="dot"></span> {title}
                        </h2>
                    </div>

                    {/* Tabs Nav */}
                    <ul className="tabs">
                        <li className="current">
                            <span>{description}</span>
                        </li>
                    </ul>
                    {/* Tab Content */}
                    <div className="tab_content">
                        <div id="tab1" className="tabs_item_popular">
                            {true ? (
                                <OwlCarousel
                                    className="product-slides owl-carousel owl-theme"
                                    {...OwlCarouselOptions}
                                >
                                    {options.map((data, idx) => (
                                        <div key={idx}>
                                            {isUxManager && (
                                                <OverComponent
                                                    {...data}
                                                    showEditComponentModal={showEditComponentModal}
                                                />
                                            )}
                                            <div className="single-product-item">
                                                <div className="product-image">
                                                    <Link to="" as={``}>
                                                        <a>{RenderImage(data.image)}</a>
                                                    </Link>
                                                </div>

                                                <div className="product-content">
                                                    <h3>
                                                        <Link to="" as={``}>
                                                            <a>{data.title}</a>
                                                        </Link>
                                                    </h3>

                                                    <div className="product-price">
                                                        <span className="new-price"></span>
                                                    </div>

                                                    <div className="row align-items-end">
                                                        <div className="col-lg-7 col-md-6 col-7">
                                                            <Link
                                                                style={{
                                                                    paddingTop: 4,
                                                                    paddingBottom4: 4,
                                                                }}
                                                                to={data.titleUrl}
                                                                target="_blank"
                                                                className="btn btn-light"
                                                            >
                                                                Check price
                                                            </Link>
                                                        </div>

                                                        <div className="col-lg-5 col-md-6 col-5">
                                                            <ul>
                                                                <li>
                                                                    <Link to="#">
                                                                        <a
                                                                            data-tip="Quick View"
                                                                            data-place="left"
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link to="#">
                                                                        <a
                                                                            data-tip="Add to Wishlist"
                                                                            data-place="left"
                                                                        >
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TemplateR1C4CaIcB;
