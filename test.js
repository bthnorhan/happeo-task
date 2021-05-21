const client = require('./apiClient').default();
// All requests should run at the same time and produce
// only one requestto the backend. All requests should return or reject.
function runTest() {
	const batchUrl = '/file-batch-api';
	// Should return [{id:”fileid1”},{id:”fileid2”}]
	client.get(batchUrl, { params: { ids: ['fileid1', 'fileid2'] } });
	// Should return [{id:”fileid2”}]
	client.get(batchUrl, { params: { ids: ['fileid2'] } });
	// Should reject as the fileid3 is missing from the response
	client.get(batchUrl, { params: { ids: ['fileid3'] } });
}

runTest();
