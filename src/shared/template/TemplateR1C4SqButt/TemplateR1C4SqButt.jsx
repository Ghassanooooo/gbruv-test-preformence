import React from 'react';
import './TemplateR1C4SqButt.css';
import { Link } from 'react-router-dom';
import OverComponent from '../OverComponent';

const RenderImage = (img) => {
    if (typeof img == 'object') {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    } else {
        return <img src={img} alt="image" />;
    }
};
const TemplateR1C4SqButt = (props) => {
    const { title, options, isUxManager, showEditComponentModal } = props;

    return (
        <section className="category-boxes-area pt-60">
            <div className="container-fluid">
                <div className="row">
                    {options.map((data, idx) => (
                        <div className="col-lg-3 col-sm-6 col-md-6" key={idx}>
                            {isUxManager && (
                                <OverComponent
                                    {...data}
                                    showEditComponentModal={showEditComponentModal}
                                />
                            )}
                            <div className="single-category-boxes">
                                {RenderImage(data.image)}

                                <h3>{data.title}</h3>

                                <Link to={data.titleUrl} target="_blank">
                                    <a className="shop-now-btn">check it</a>
                                </Link>
                                <Link to="/category-without-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TemplateR1C4SqButt;
