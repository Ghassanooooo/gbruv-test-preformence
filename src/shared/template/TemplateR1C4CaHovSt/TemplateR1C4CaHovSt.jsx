import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import products from '../productsFake';
import OwlCarousel from 'react-owl-carousel3';
import OwlCarouselOptions from './options';
import OverComponent from '../OverComponent';

const RenderImage = (img) => {
    if (typeof img == 'object') {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    } else {
        return <img src={img} alt="image" />;
    }
};

const TemplateR1C4CaHovSt = (props) => {
    const { title, options, showEditComponentModal, isUxManager } = props;

    console.log('TemplateR1C4CaHovSt ==> ', props);
    return (
        <section className="best-sellers-area pb-60">
            <div className="container">
                <div className="section-title without-bg">
                    <h2>
                        <span className="dot"></span> {title}
                    </h2>
                </div>

                <div className="row">
                    {true ? (
                        <OwlCarousel
                            className="best-sellers-products-slides owl-carousel owl-theme"
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
                                    <div className="single-product-box">
                                        <div className="product-image">
                                            <a href={data.imageUrl} target="_blank">
                                                {RenderImage(data.image)}
                                            </a>

                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <a data-tip="Quick View" data-place="left">
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
                                                <li>
                                                    <Link to="#">
                                                        <a
                                                            data-tip="Add to Compare"
                                                            data-place="left"
                                                        >
                                                            <i className="fas fa-sync"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="product-content">
                                            <h3>
                                                <a href={data.titleUrl} target="_blank">
                                                    {data.title}
                                                </a>
                                            </h3>

                                            <div className="product-price">
                                                <span className="new-price"></span>
                                            </div>

                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <a
                                                target="_blank"
                                                href={data.descriptionUrl}
                                                className="btn btn-light"
                                            >
                                                Check the price
                                            </a>
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
        </section>
    );
};

export default TemplateR1C4CaHovSt;
