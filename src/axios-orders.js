import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burgerbuilder-f477f.firebaseio.com/'
});

export default instance;
