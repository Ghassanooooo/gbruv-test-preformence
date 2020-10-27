import React from 'react';
import { Button, Popup, Dropdown } from 'semantic-ui-react';
import { FaRegEdit } from 'react-icons/fa';
import './component.css';
const OverComponent = (props) => {
    console.log('OverComponent ==> ====> ', props);
    const { component, showEditComponentModal, id } = props;
    const onShowEditComponentModalHandler = () => {
        console.log('onShowEditComponentModalHandler ===> ', props);
        showEditComponentModal(id);
    };
    const menuButton = () => {
        return (
            <Dropdown
                onClick={onShowEditComponentModalHandler}
                icon={<Button icon={<FaRegEdit />} />}
            />
        );
    };
    return (
        <div className="OverComponent">
            <div className="OverComponentEditButton">
                <Popup
                    trigger={menuButton()}
                    content="Edit the current Component"
                    className="OverComponentPopup"
                    position="top right"
                    inverted
                />
            </div>
            <div className="OverComponentName">{component && component}</div>
        </div>
    );
};

export default OverComponent;
