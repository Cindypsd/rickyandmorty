import './App.css';
import { useState } from 'react';
import { Cards } from '../src/components/Cards/Cards';
import { Nav } from '../src/components/Nav/Nav';
import { About } from '../src/components/About/About';
import { Detail } from '../src/components/Detail/Detail';
import { Form } from '../src/components/Form/Form';
import { Route, Routes, useLocation } from 'react-router-dom';
// import { Error } from '../src/components/Error/Error';

function App() {
	let location = useLocation();
	const [characters, setCharacters] = useState([]);

	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					for (let character of characters) {
						if (data.id === character.id) {
							return window.alert('Ya tienes ese personaje, intenta de nuevo');
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

			
			{location.pathname === '/' ? <Form /> : null}
			{location.pathname === '/' ? null : <Nav onSearch={onSearch} />}

			<Routes>
				<Route
					exact
					path='/home'
					element={
						characters.length === 0 ? (
							<img
								src={require('./images/Home2.png')}
								alt='Imagen inicio'
							></img>
						) : (
							<div>
								<img
									className='Logo'
									src={require('./images/logoTransparente.png')}
									alt='Logo Ricky Morty'
								></img>
								<Cards characters={characters} onClose={onClose} />
							</div>
						)
					}
				/>

				<Route exact path='/about' element={<About />} />

				<Route exact path='/detail/:detailId' element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
