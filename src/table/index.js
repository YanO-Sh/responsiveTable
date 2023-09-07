import './index.css'

import React from 'react';

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
	['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6', 'data 7', 'data 8', 'data 9', 'data 10'],
]

const Table = () => {

	return (
		<div>
			<table>
				<thead>
				<tr>
					{ columnsInfo.map((i) => <th key={ i }>{ i }</th>) }
				</tr>
				</thead>
				<tbody>
				{ entriesInfo.map((i, index) => <tr key={ index }>{ i.map((i) => <td key={ i }>{ i }</td>) }</tr>) }
				</tbody>
			</table>
		</div>
	);
};

export default Table;