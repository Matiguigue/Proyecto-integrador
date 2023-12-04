const express = require('express');

const app = express();
const PORT = 3003;

app.use(express.static('public_html'));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
