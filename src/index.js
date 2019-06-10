import '@babel/polyfill';

import app from './server';
import { connect } from './database';

async function main () {
   await app.listen(app.get('port'));
   await connect();
   console.log('Server arracando desde el puerto', app.get('port'));
}

main();