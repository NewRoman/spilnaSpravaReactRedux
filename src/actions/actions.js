import constants from '../constants/constants'

const commonActions = {
	showAddUserForm: ( showForm ) => dispatch => {
		
		dispatch({
			type: constants.SHOW_ADD_USER_FORM,
			data: showForm
		})
	},

	showToggledVisibilityBlock: (showSetToggleBlock) => dispatch => {
		dispatch({
			type: constants.SHOW_TOGGLE_VISIBLE_BLOCK,
			data: showSetToggleBlock
		})
	},

	toggleColumnVisibility: (columnAlias) => dispatch => {
		dispatch({
			type: constants.TOGGLE_COLUMN_VISIBILITY,
			data: columnAlias
		})
	},

	addNewUserInList: (formValues) => dispatch => {
		
		dispatch({
			type: constants.ADD_NEW_USER_INFO,
			data: formValues
		})
	},

}

export default commonActions