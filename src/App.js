import React, { Component } from 'react';
import Pokegame from './Pokegame';

import './App.css';
import Pokecard from './Pokecard';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Pokegame />
			</div>
		);
	}
}

export default App;
