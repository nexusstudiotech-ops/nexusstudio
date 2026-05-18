const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
    const { name, email, phone, projectDetails } = req.body;

    // Basic validation
    if (!name || !email || !projectDetails) {
        return res.status(400).json({ error: 'Name, email, and project details are required.' });
    }

    // In a real application, you would save this to a database or send an email.
    console.log('Received contact submission:', { name, email, phone, projectDetails });

    return res.status(200).json({ message: 'Submission received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
