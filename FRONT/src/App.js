import React from 'react';

import './App.css';

import Board from './components/board'


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Board title='BOARD' />
			</div>
		);
	}
}


export default App;
