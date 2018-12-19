import React from 'react';
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form';

import FormComponent from '../components/FormComponent';

import actions from '../actions/actions';

import './../scss/formBlock.scss';

const validate = (values) => {
  
  const errors = {}
  if (!values.userName) {
    errors.userName = 'User name is required!'
  } else if (values.userName.length > 15) {
    errors.userName = 'Must be 15 characters or less'
  }

  if (!values.userSurname) {
    errors.userSurname = 'User surname is required!'
  }

  if (!values.jobPosition) {
    errors.jobPosition = 'Job position is required!'
  }

  if (!values.userMale ) {
    errors.userMale = 'User male is required!'
  } else if ( values.userMale.toLowerCase() !== 'male' && values.userMale.toLowerCase() !== 'female' ) {
    errors.userMale = 'User male must be male or female!'
  }

  if (!values.userAge) {
    errors.userAge = 'User age is required!'
  } else if (isNaN(Number(values.userAge))) {
    errors.userAge = 'Must be a number'
  }
  return errors
}


export const FormContainer = ({ showForm, handleSubmit, columnsOfTable, dispatch, reset }) => {
  const submitForm = (formValues) => {
    dispatch(actions.addNewUserInList(formValues));
    reset();

  }
  
  return (
    showForm && (
      <section className="column form-block float-left">
        <h3>Add new user</h3>
        <FormComponent
          onSubmit={submitForm}
          handleSubmit={handleSubmit}
          columnsOfTable={ columnsOfTable }
        />
      </section>
    )
   
  );
}
const formConfiguration = {
  form: 'user-detail-form',
  validate
}

const mapStateToProps = (state) => {
  return {
    showForm: state.commonState.showForm,
    columnsOfTable: state.columnsOfTable
  }
};

export default reduxForm(formConfiguration)(connect(mapStateToProps)(FormContainer));