import app from './app';
import { HTTP_PORT } from './constants';

app.listen(Number(HTTP_PORT), () => {
  console.log('Server ready at: http://localhost:3000');
});
