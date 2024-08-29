import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';  // Import CORS

const app = express();
const prisma = new PrismaClient();

// Use CORS middleware
app.use(cors());

app.use(express.json());

// GET /orders - Fetch a list of orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// POST /orders - Submit a new order
app.post('/api/orders', async (req, res) => {
  const { customerName, status } = req.body;

  if (!customerName || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newOrder = await prisma.order.create({
      data: {
        customerName,
        status,
      },
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
