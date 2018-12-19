
import React from 'react'

import {connect} from 'react-redux'

import FormContainer from './FormContainer';


const FormBlockContainer = (props) => {
	
	return (
		props.showForm && <FormContainer />
	);
  }


const mapStateToProps = (state) => {
    return {
        showForm: state.commonState.showForm,
    }
};

export default connect(mapStateToProps)(FormBlockContainer)
