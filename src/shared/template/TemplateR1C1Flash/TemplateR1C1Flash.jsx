import React from 'react';
import { Link } from 'react-router-dom';
import OverComponent from '../OverComponent';
import './TemplateR1C1Flash.css';

const TemplateFlash = (props) => {
    const { options, isUxManager, showEditComponentModal } = props;
    const component = options[0];
    console.log('TemplateFlash ==> ', props);
    return (
        <section
            className="products-offer-area ptb-60"
            style={{
                backgroundImage: `url(${'https://i5.walmartimages.com/asr/d5d4529a-438c-4719-a8e4-28dc1afbc502_1.03993aa308ee392eb3e7a713985d607d.jpeg'})`,
            }}
        >
            {isUxManager && (
                <OverComponent
                    {...component}
                    showEditComponentModal={props.showEditComponentModal}
                />
            )}
            <div className="container">
                <div className="products-offer-content">
                    <h1>{component.title}</h1>
                    <p>{component.description}</p>
                    <Link to={component.titleUrl} target="_blank">
                        <a className="btn btn-primary">Discover Now</a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TemplateFlash;
