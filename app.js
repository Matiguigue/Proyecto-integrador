const express = require('express');

const app = express();
const mainRoutes = require('./src/routes/main.routes')
const shopRoutes = require('./src/routes/shop.routes')

const PORT = 3003;

app.use(express.static('public'));

app.use('/shop', shopRoutes);
app.use('/', mainRoutes);



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
