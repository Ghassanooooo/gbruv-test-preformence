import React from 'react';
import Component from '../component/component';

const PullComponent = props => {
    console.log('PullComponent ===>', props);

    const { options, isUxManager, showEditComponentModal, templateId } = props;
    return options.map((component, index) => (
        <Component
            templateId={templateId}
            showEditComponentModal={showEditComponentModal}
            {...component}
            index={index}
            isUxManager={isUxManager}
            key={component.id}
        />
    ));
};

export default PullComponent;
