// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB error:', err));

const visitSchema = new mongoose.Schema({ timestamp: Date });
const Visit = mongoose.model('Visit', visitSchema);

app.post('/api/visit', async (req, res) => {
  await Visit.create({ timestamp: new Date() });
  res.status(200).send('Visit logged');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
