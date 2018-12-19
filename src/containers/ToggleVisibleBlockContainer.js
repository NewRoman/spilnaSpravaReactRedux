
import React, {Fragment} from 'react'

import {connect} from 'react-redux'

import actions from '../actions/actions'

import './../scss/toggleBlock.scss';

const ToggleVisibleBlockContainer = (props) => {

	const changeColumnVisible = (e) => {
		
		props.dispatch(actions.toggleColumnVisibility(e.target.value));
	}
	
	return (
		<Fragment>
			{
				props.showSetToggleBlock && (
					<section className="column toggle-block float-right">
						<h3>Click to show or hidden named column in table </h3>
						{
							Object.keys(props.columnsOfTable).map((collumn, i) => {
								let idCheckbox = `${collumn}_checkbox`;
								
								return (
									<div key={ i } className="check-visible-column">
										<label  htmlFor={ idCheckbox }
												className={ !props.columnsOfTable[collumn].isVisible ? "unchecked" : ""}>
											{ props.columnsOfTable[collumn].alias }
											<input 
												id={ idCheckbox } 
												type="checkbox" 
												onChange={ changeColumnVisible }
												value={ collumn }
												name={ idCheckbox } 
												checked={ props.columnsOfTable[collumn].isVisible } />
										</label>
									</div>
								)

							})
						}
					</section>
				)
			}
		</Fragment>
	);
  }
const mapStateToProps = (state) => {
	return {
		columnsOfTable: state.columnsOfTable,
		showSetToggleBlock: state.commonState.showSetToggleBlock
	}
  };
export default connect(mapStateToProps)(ToggleVisibleBlockContainer);

