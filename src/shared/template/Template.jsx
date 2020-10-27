import React from 'react';
import { Divider, Image } from 'semantic-ui-react';
import { Fa500Px } from 'react-icons/fa';
//import 'Template.css';
const TemplateLoading = () => <div>Loading...</div>;

class DynamicComponent extends React.Component {
    /* Sets the state to save the dynamic component when needed */
    state = {
        DynamicComponent: null,
        isComponent: true,
    };
    TemplateNotFound = () => (
        <div style={{ height: 70, background: 'red', margin: 20 }}>
            {this.props.template} Template Not Found!
        </div>
    );

    componentDidMount() {
        this.handleOnClick();
    }

    /*
     * Function to be called onClick event.
     * Waits for the import to be completed and stores the default exported
     * value in the state so we can rendered when needed.
     */
    handleOnClick = async () => {
        try {
            const DynamicComponent = await import(
                `./${this.props.template}/${this.props.template}`
            );

            this.setState({
                DynamicComponent: DynamicComponent.default,
                isComponent: true,
            });
        } catch (ex) {
            this.setState({
                ...this.state,
                isComponent: false,
            });
        }
    };

    render() {
        /* Gets the dynamically imported component */
        const { DynamicComponent } = this.state;
        const { title, description } = this.props;

        return this.state.isComponent ? (
            !DynamicComponent ? (
                <TemplateLoading />
            ) : (
                <section className="Template">
                    {/* <h3 className="TextWrap">{title && title}</h3>
                    <p className="TextWrap">{description && description}</p> */}
                    <DynamicComponent {...this.props} />
                </section>
            )
        ) : (
            this.TemplateNotFound()
        );
    }
}
export default DynamicComponent;
