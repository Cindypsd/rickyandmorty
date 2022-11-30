import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 2em;
`;

function App() {
	return (
		<div className='App' style={{ padding: '25px' }}>
			<img
				className='Logo'
				src={require('./images/logoTransparente.png')}
				alt='Logo Ricky Morty'
			></img>

			<div>
				<SearchBar onSearch={characterID => window.alert(characterID)} />
			</div>

			<StyledDiv>
				<Card
					name={Rick.name}
					species={Rick.species}
					gender={Rick.gender}
					image={Rick.image}
					onClose={() => window.alert('Emulamos que se cierra la card')}
				/>
			</StyledDiv>

			<div>
				<Cards characters={characters} />
			</div>
		</div>
	);
}

export default App;
