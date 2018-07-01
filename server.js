const express = require('express');

const app = express();

const PORT = process.env.port || 3001;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Mark', lastName: 'Robertson'},
        {id: 2, firstName: 'Graeme', lastName: 'Robertson'}
    ];

    res.json(customers);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));