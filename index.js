import express from 'express';

const app = express();
app.use(express.json());

let PORT = 8000;

app.listen(PORT, () => {
	console.log('Connected to port', PORT);
});
