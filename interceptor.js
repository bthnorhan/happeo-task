function batchInterceptor(instance) {
	instance.interceptors.request.use(
		(request) => {
			// Add your code here
			return request;
		},
		(error) => Promise.reject(error),
	);
}

exports.default = batchInterceptor;
