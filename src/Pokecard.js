import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'; // API link for the images 

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);  // details down below 

class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`; // suffix for the img Src to retrive the exact img passed as a prop argument.
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title"> {this.props.name} </h1>
				<div className="Pokecard-image"> 
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">EXP: {this.props.exp}</div>
			</div>
		);
	}
}

export default Pokecard; // exported to pokedex.js  




// padToThree a function takes a number and checks if the number is greater than 999, if it is then it just returns that number. But if the number is less than 3 digits then it adds 2 zeros in front of it and then silces the last 3 -
// - digits and returns the number. i.e if the number is 2 it will return 002 