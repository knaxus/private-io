import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();

/**
 * use the public path for static files
 */
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('app running at:  http://localhost:' + port);
});