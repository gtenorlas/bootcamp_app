const { POol, Pool } = require('pg');

const pool = new Pool({user: 'vagrant', password: '123', host: 'localhost'});
