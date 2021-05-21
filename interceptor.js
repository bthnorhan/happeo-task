function batchInterceptor(instance) {
	instance.interceptors.request.use(
		(request) => {
			// If params.ids is an array, join them with comma (s),
			// don't change anything.
			const ids = Array.isArray(request.params.ids)
				? request.params.ids.join(',')
				: request.params.ids;

			// Set new parameters
			request.params.ids = ids;
			return request;
		},
		(error) => Promise.reject(error),
	);

	instance.interceptors.response.use(
		(response) => {
			// Parsing requested ids
			const paramIds = response.config.params.ids.split(',');
			// Check ids in response
			const found = response.data.items.some((item) => paramIds.includes(item.id));
			if (!found) {
				// Reject the request if response didn't include ids.
				return Promise.reject(`${response.config.params.ids} is missing from te response`);
			}

			// Return object as wanted
			return response.data.items;
		},
		(error) => Promise.reject(error),
	);
}

exports.default = batchInterceptor;
