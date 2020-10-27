require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

let dir = './src/CrawlArticles/articles.json';

const genArticles = (data) => {
    fs.writeFile(dir, data, function(err) {
        if (err) return console.log(err);
        console.log(dir, '==>', data);
    });
};
const findProducts = async () => {
    try {
        const productsData = await axios(process.env.backendApiURL + 'products/all');
        genArticles(JSON.stringify(productsData.data));
        console.log('productsData   =====> ', productsData.data);
    } catch (ex) {
        console.log('ERRORS   =====> ', ex);
    }
};
findProducts();
