import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import FlashMessage from '../layout/FlashMessage/FlashMessage';
import {
    BaseAirportCreationType,
    BaseAirportType
} from '../../domain/baseAirport/types/AirportType';

const Form = t.form.Form;

export default class AirportForm extends Component {
    constructor(props) {
        super();

        this._baseAirportForm = null;
        this.state = {
            baseAirportFormValues: props.baseAirport,
            baseAirportFormErrors: []
        };
    }

    get getValue() {
        return this._baseAirportForm.getValue();
    }

    get validate() {
        return this._baseAirportForm.validate();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ baseAirportFormValues: nextProps.baseAirport });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const formValue = this._baseAirportForm.getValue();
        const formErrors = this._baseAirportForm.validate();
        console.log('BaseAirportForm: ', formValue, formErrors);

        if (formErrors.errors.length > 0) {
            this.setState({ baseAirportFormErrors: formErrors.errors });

            return;
        }

        this.props.onSaveBaseAirport(formValue);
    };

    render() {
        return (
            <div>
                <h2>Base Airport</h2>
                <FlashMessage errorList={ this.state.baseAirportFormErrors } />
                <Form ref={ (f) => { this._baseAirportForm = f; } }
                    type={ BaseAirportCreationType }
                    value={ this.state.baseAirportFormValues } />
                <button type="submit" onClick={ this.onSubmit }>Submit</button>
            </div>
        );
    }
}

AirportForm.propTypes = {
    baseAirport: PropTypes.object,
    onSaveBaseAirport: PropTypes.func.isRequired
};
