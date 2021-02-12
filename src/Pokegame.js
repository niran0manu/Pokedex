import React, { Component } from 'react';
import Pokedex from './Pokedex';
// 
class Pokegame extends Component {
	static defaultProps = {
		pokemon: [
			{ id: 4, name: 'Charmander', type: 'Fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'Water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'Bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'Poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'Normal', base_experience: 65 }
		]
	};

	render() {
		let hand1 = [];
		let hand2 = [ ...this.props.pokemon ];
		while (hand1.length < hand2.length) {
			let randIdx = Math.floor(Math.random() * hand2.length);
			let randPokemon = hand2.splice(randIdx, 1)[0];
			hand1.push(randPokemon);
		}
		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
		let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
		return (
			<div>
				<Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
				<Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
			</div>
		);
	}
}

export default Pokegame;

// hand1 is an empty array
// hand2 gets the default props pushed in.
// the while loop checks if the length of hand2 is bigger than hand1 
// var randIdx uses the code for picking some thing random 
// var randPokemon will splice form hand2 and pushes it to the hand1 
// this will repeat untill the length of both the arrays are equal.
// let exp1 and exp2 uses  the .reduce method to add all the base_experiences into a total.
