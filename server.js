const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const phone = {
        name: 'iPhone 15 Pro Max',
        price: '1199',
        image: 'https://www.silicon.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-Pro-lineup-02.jpg',
        buyLink: 'https://www.apple.com/shop/buy-iphone/iphone-15-pro'
    };
    res.render('index', { phone });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
