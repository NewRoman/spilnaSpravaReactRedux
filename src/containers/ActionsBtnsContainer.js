
import React from 'react'

import {connect} from 'react-redux'

import actions from '../actions/actions'

import './../scss/actionsBtn.scss';

const ActionsBtnsContainer = (props) => {
	const showAddUserForm = function(){
		
		setTimeout (()=> {
			props.dispatch(actions.showAddUserForm(props.showForm));
		}, 200)
	}

	const showToggledVisibilityBlock = function(){
		setTimeout (()=> {
			props.dispatch(actions.showToggledVisibilityBlock(props.showSetToggleBlock));
		}, 200)
	}
	
	return (
		<section className="action-btns-block clear">
			<button 
				onClick={ showAddUserForm } 
				className="btn float-left">
				{ props.showForm ? 'Hide Add User Form' : 'Show Add User Form' }
			</button>
			{props.listItemsLength > 0 && (
				<button 
					onClick={ showToggledVisibilityBlock } 
					className="btn float-right">
					{ props.showSetToggleBlock ? 'Hide setting' : 'Show setting' }
				</button>
			)}
		</section>
	);
  }
const mapStateToProps = (state) => {
	return {
		listItemsLength: state.listItems.length,
		showForm: state.commonState.showForm,
		showSetToggleBlock: state.commonState.showSetToggleBlock

		}
  };
export default connect(mapStateToProps)(ActionsBtnsContainer);

