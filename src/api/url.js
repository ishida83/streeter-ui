const { api } = require('./config');

const url = query => `${api}/${query}`;

export default url;
