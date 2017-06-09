const { api } = require('./config');

const url = (endpoint, query) => (query ? `${api}${endpoint}/${query}` : `${api}${endpoint}`);

export default url;
