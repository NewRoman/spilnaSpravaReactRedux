
import React, {Fragment} from 'react'

import {connect} from 'react-redux'

import './../scss/tableBlock.scss';

const ItemListContainer = (props) => {
	
	return (
		<Fragment>

			{
				props.listItems.length === 0 ? 
					(
						<h2>There are no result</h2>
					)
					: 
					( 
						<section className="table-block">
							<div className='table-row head'>
							{
								Object.keys(props.columnsOfTable).map((key,i)=> {
									return (<div key={ i } className={ props.columnsOfTable[key].isVisible ? "tr" : "tr hidden" } >
										{ props.columnsOfTable[key].alias }
									</div>)
								})
							}
							</div>
							{
								props.listItems.map((row, i) => {

									return (
										<div key={ i } className='table-row'>
										{
											Object.keys(row).map((key, i) => {
												return (
													<div key={ i } className={ props.columnsOfTable[key].isVisible ? "td" : "td hidden" }>
														{ row[key] }
													</div>
												)
											})
										}

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
		listItems: state.listItems,
		columnsOfTable: state.columnsOfTable
	}
  };
export default connect(mapStateToProps)(ItemListContainer);

