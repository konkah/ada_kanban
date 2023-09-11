import React from 'react';

import './App.css';

import Board from './components/board'


function colors() {
	document.body.style.background = '#282c34';
	document.body.style.color = '#FFFFFF';
}

class App extends React.Component {
	constructor(props) {
		super(props);
		colors();
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
