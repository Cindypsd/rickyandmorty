import { createStore } from 'redux';
import rootReducer from './reducer';

const storeRickAndnMorty = createStore(rootReducer);

export default storeRickAndnMorty;