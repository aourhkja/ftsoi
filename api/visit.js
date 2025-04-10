import mongoose from 'mongoose';

let conn = null;

const connectDB = async () => {
  if (!conn) {
    conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
  }
};

const Visit = mongoose.models.Visit || mongoose.model('Visit', new mongoose.Schema({ timestamp: Date }));

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      await Visit.create({ timestamp: new Date() });
      return res.status(200).json({ message: 'Visit logged' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
