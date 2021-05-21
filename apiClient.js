import axios from 'axios';
import batchInterceptor from './interceptor';

const client = () => {
	const config = {
		host: 'https://europe-west1-quickstart-1573558070219.cloudfunctions.net',
		baseAPI: 'https://europe-west1-quickstart-1573558070219.cloudfunctions.net',
		headers: {},
	};

	const instance = axios.create(config);
	addInterceptor(instance);
	return instance;
};
export default client;
