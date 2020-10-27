import React from 'react';
import { Link } from 'react-router-dom';
import './TemplateR2C3NoCa.css';
import OverComponent from '../OverComponent';

const RenderImage = (img) => {
    if (typeof img == 'object') {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    } else {
        return <img src={img} alt="image" />;
    }
};

export default function TemplateR2C3NoCa(props) {
    const { title, options, isUxManager, showEditComponentModal } = props;
    return (
        <section className="products-area pt-60 pb-30">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <span className="dot"></span> {title}
                    </h2>
                </div>

                <div className="row">
                    {options.map((data, idx) => (
                        <div className="col-lg-4 col-sm-6" key={idx}>
                            {isUxManager && (
                                <OverComponent
                                    {...data}
                                    showEditComponentModal={showEditComponentModal}
                                />
                            )}
                            <div className="single-product-box single-product-two">
                                <div className="product-image">
                                    <Link to="" as={``}>
                                        <a>
                                            {RenderImage(data.image)}
                                            {RenderImage(data.image)}
                                        </a>
                                    </Link>

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
                                                <a data-tip="Add to Wishlist" data-place="left">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li></li>
                                    </ul>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link to="" as={``}>
                                            <a>{data.title}</a>
                                        </Link>
                                    </h3>

                                    <div className="product-price"></div>

                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <Link to={data.titleUrl} target="_blank">
                                        <a className="btn btn-light">Check the Price </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
