import { Route } from 'react-router';
//import characters from './data.js';
import './App.css';
import { useState } from 'react';
import { Cards } from '../src/components/Cards/Cards';
import { Nav } from '../src/components/Nav/Nav';
import { About } from '../src/components/About/About';
import { Detail } from '../src/components/Detail/Detail';
import { Form } from '../src/components/Form/Form';
import { Error } from '../src/components/Error/Error';

function App() {
	const [characters, setCharacters] = useState([]);

	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					for (let character of characters) {
						if (data.id === character.id) {
							return window.alert('REPETIDO');
						}
					}
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

			<Route exact path='/'>
				<div className='signBox'>
					<Form />
				</div>
			</Route>

			<Route path='/home'>
				<div>
					{characters.length === 0 ? (
						<img src={require('./images/Home.png')} alt='Imagen inicio'></img>
					) : (
						<div>
							<img
								className='Logo'
								src={require('./images/logoTransparente.png')}
								alt='Logo Ricky Morty'
							></img>
							<Cards characters={characters} onClose={onClose} />
						</div>
					)}
				</div>
			</Route>

			<Route path='/about'>
				<About />
			</Route>

			<div className='divDetailCard'>
				<Route exact path='/detail/:detailId' component={Detail} />
			</div>

			<Route path='*' element={<Error />} />
		</div>
	);
}

export default App;
