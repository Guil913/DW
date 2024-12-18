const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());


app.get('/api/articles', async (req, res) => {
    const { year, month } = req.query;

    if (!year || !month || isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        return res.status(400).json({ error: 'Invalid year or month' });
    }

    const apiKey = 'G69XSQQ8IncoVzzvulfsaDC9huzYF19E';
    const apiEndpoint = `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`;

    try {
        const response = await axios.get(apiEndpoint);
        res.json(response.data); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
