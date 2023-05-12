var connect = require('connect');
 var serveStatic = require('serve-static');

 connect()
     .use(serveStatic(__dirname, {'index': ['Home.html']}))
     .listen(8080, () => console.log('Server running on 8080...'));

