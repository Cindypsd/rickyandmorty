import Cards from './components/Cards.jsx';
//import characters from './data.js';
import { Nav } from './components/Nav';
import './App.css';
import { useState } from 'react';
import { About } from './components/About.jsx';
import { Detail } from './components/About.jsx';

function App() {
	const [characters, setCharacters] = useState([]);

	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					setCharacters(oldChars => [...oldChars, data]);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
	}

	const onClose = event => {
		setCharacters(
			characters.filter(char => char.id !== Number(event.target.id))
		);
	};

	return (
		<div className='App' style={{ padding: '25px' }}>
			<Nav onSearch={onSearch} />

			<img
				className='Logo'
				src={require('./images/logoTransparente.png')}
				alt='Logo Ricky Morty'
			></img>

			<div>
				<Cards characters={characters} onClose={onClose} />
			</div>
		</div>
	);
}

export default App;
