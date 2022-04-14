import express from 'express';
import routes from './routes';

// 1. Create server object
const app = express();
const port = 3000;

// 2. using the router
app.use('/api', routes);

// 3. Start the server
app.listen(port, () => {
  console.log('Server started');
});

export default app;
