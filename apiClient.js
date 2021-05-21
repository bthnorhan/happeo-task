const axios = require('axios').default;
const batchInterceptor = require('./interceptor').default;

const client = () => {
	const config = {
		baseURL: 'https://europe-west1-quickstart-1573558070219.cloudfunctions.net',
		headers: {},
	};

	const instance = axios.create(config);
	batchInterceptor(instance);
	return instance;
};

exports.default = client;
