import { Route, useHistory } from 'react-router';
import './App.css';
import { useState } from 'react';
import { Cards } from '../src/components/Cards/Cards';
import { Nav } from '../src/components/Nav/Nav';
import { About } from '../src/components/About/About';
import { Detail } from '../src/components/Detail/Detail';
import { Form } from '../src/components/Form/Form';
//import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { Error } from '../src/components/Error/Error';

function App() {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	//const navigate = useNavigate();
	const history = useHistory();

	let username = 'cindy@gmail.com';
	let password = 'Hola123!';

	const login = userData => {
		if (userData.password === password && userData.username === username) {
			setAccess(true);
			history.push('/home');
		}
	};

	useEffect(() => {
		!access && history.push('/');
	}, [access, history]);

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
			<Route exact path='/'>
				<div className='signBox'>
					<Form login={login} />
				</div>
			</Route>

			<Route exact path='/home'>
				<Nav onSearch={onSearch} />
				<div>
					{characters.length === 0 ? (
						<img src={require('./images/Home2.png')} alt='Imagen inicio'></img>
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

			<Route exact path='/about' component={About} />

			<div className='divDetailCard'>
				<Route exact path='/detail/:detailId' component={Detail} />
			</div>

			{/* <Route path='*' component={Error} /> */}
		</div>
	);
}

export default App;
