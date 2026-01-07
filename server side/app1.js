const express = require('express');
const connectDB = require('./database');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
connectDB();

const FRONTEND_URL = process.env.FRONTEND_URL || '*';
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('CORS allowed origin:', FRONTEND_URL);
});
