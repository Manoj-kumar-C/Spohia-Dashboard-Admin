// pages/api/saveData.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const dataFilePath = path.join(process.cwd(), 'data.json');
    const { formData } = req.body;
    try {
      let data = [];
      if (fs.existsSync(dataFilePath)) {
        data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
      }
      const newData = [...data, formData];
      fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
