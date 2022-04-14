import express from 'express';
import imagesRoute from './individual/images';

// Create the router object
const routes = express.Router();
// Define router
routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('<h1>Hello from router</h1>');
});

routes.use('/images', imagesRoute);
export default routes;
