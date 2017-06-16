const { api, filters } = require('./config');

const url = (endpoint, query) => (query ? `${api}${endpoint}/${query}${filters}` : `${api}${endpoint}`);

export default url;
