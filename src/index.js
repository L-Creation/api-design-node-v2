import http from 'http'
import { createServer } from 'http'

import app from './server'
let currentApp = app;

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp);
		server.on('request', app);
		currentApp = app
	})
}

currentApp.get('/', (req, res) => {
	res.json({received: true})
});

app.listen(3000, () => {
	console.log('first server response sent !')
});
