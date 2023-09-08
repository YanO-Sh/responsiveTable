import './index.css'

import React, { useEffect, useState } from 'react';

const columnsInfo = [
	'column 1',
	'column 2',
	'column 3',
	'column 4',
	'column 5',
	'column 6',
	'column 7',
	'column 8',
	'column 9',
	'column 10'
]

const entriesInfo = [
	['data 1', 'data 3', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
]

const Table = () => {
	const [currentPageSize, setCurrentPageSize] = useState(window.innerWidth)

	useEffect(() => {
		const watch = (event) => {
			setCurrentPageSize(event.target.innerWidth);
		}

		window.addEventListener('resize', watch)

		return () => {
			window.removeEventListener('resize', watch)
		}
	}, [])

	return (
		<div>
			{ currentPageSize > 800 ? <table>
					<thead>
					<tr>
						{ columnsInfo.map((i, index) => <th key={ i }>{ i }</th>) }
					</tr>
					</thead>
					<tbody>
					{ entriesInfo.map((i, index) => <tr key={ index }>{ i.map((i) => <td key={ i }>{ i }</td>) }</tr>) }
					</tbody>
				</table> :
				<div className={ 'stack' }>
					{ columnsInfo.map((col, index) => {
						return (
							<table>
								{ entriesInfo[index].length > 5 ?
									<>
										<tr>
											<th rowSpan={3} >{ col }</th>
										</tr>
										<tr>{ entriesInfo[index].slice(0, 5).map(row => <td >{ row }</td>) }</tr>

										<tr>{ entriesInfo[index].slice(5).map(row => <td >{ row }</td>) }</tr>
									</> :
									<tr>
										<th>{ col }</th>
										{ entriesInfo[index].map(row => <tr>
											<td>{ row }</td>
										</tr>) }
									</tr>
								}
							</table>
						)
					}) }
		</div>
}
</div>
)
};

export default Table;