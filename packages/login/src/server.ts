import express from 'express';
import AuthService from './services/AuthService';

const app = express();
app.use(express.json());

const routes = express.Router();

routes.post('/login', (req, res) => {
  const { email, password } = req.body;

  const authService = new AuthService();

  const token = authService.execute({ email, password });

  return res.json({
    token,
  });
});

app.use(routes);

app.listen(3333, () => {
  console.log('App running on 3333');
});
