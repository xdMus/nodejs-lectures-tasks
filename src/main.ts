import express from 'express';

const PORT = 8000;
const app = express();

app.listen(PORT);

app.get('/', (req, res, next) => {
	res.send('Hello from my app');
});
