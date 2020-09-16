import express from 'express';

const app = express();
app.use(express.json());

const routes = express.Router();

routes.get('/private', (req, res) => {
  return res.json({ private: true });
});

app.use(routes);

app.listen(3333, () => {
  console.log('App running on 3333');
});
