// import React from 'react';
import path from 'path';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
import paths from '../../config/paths';
// import { configureStore } from '../shared/store';
import errorHandler from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';
import addStore from './middleware/addStore';
import webhookVerification from './middleware/webhookVerification';
import { i18nextXhr, refreshTranslations } from './middleware/i18n';
//const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
import { PageEnum, InfoPageEnum } from '../shared/navbar/Navbar.types';
import crawlArticles from '../CrawlArticles/articles.json';
//import robotstxt from 'generate-robotstxt';
require('dotenv').config();

const app = express();
// const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === 'development') {
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
// }

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/locales/refresh', webhookVerification, refreshTranslations);

// It's probably a good idea to serve these static assets with Nginx or Apache as well:
app.get('/locales/:locale/:ns.json', i18nextXhr);

app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use(serverRenderer());

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: http://localhost:${process.env.PORT || 3000}`)
    );
});

export default app;

/**
 let sitemap;

app.get('/sitemap.xml', function(req, res) {
    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');
    // if we have a cached entry send it
    if (sitemap) {
        res.send(sitemap);
        return;
    }

    try {
        const smStream = new SitemapStream({ hostname: process.env.CLIENTURL });
        const pipeline = smStream.pipe(createGzip());

        // pipe your entries or directly write them.
        crawlArticles.map((i) =>
            smStream.write({ url: '/product-article/' + i._id, changefreq: 'daily', priority: 0.3 })
        );
        Object.values(PageEnum).map((i) =>
            smStream.write({ url: i, changefreq: 'daily', priority: 0.7 })
        );

        Object.values(InfoPageEnum).map((i) => smStream.write({ url: i }));

        /* or use
    Readable.from([{url: '/page-1'}...]).pipe(smStream)
    if you are looking to avoid writing your own loop.
    */
/*
     
        streamToPromise(pipeline).then((sm) => (sitemap = sm));
        // make sure to attach a write stream such as streamToPromise before ending
        smStream.end();
        // stream write the response
        pipeline.pipe(res).on('error', (e) => {
            throw e;
        });
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

app.get('/robots.txt', function(req, res) {
    res.type('text/plain');

    robotstxt({
        policy: [
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: '/search',
                crawlDelay: 2,
            },
            {
                userAgent: 'OtherBot',
                allow: ['/allow-for-all-bots', '/allow-only-for-other-bot'],
                disallow: ['/admin', '/login'],
                crawlDelay: 2,
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: '/search',
                crawlDelay: 10,
                cleanParam: 'ref /articles/',
            },
        ],
        sitemap: process.env.CLIENTURL + 'sitemap.xml',
        host: process.env.CLIENTURL,
    })
        .then((content) => {
            console.log(content);

            return res.send(content);
        })
        .catch((error) => {
            throw error;
        });
});

 */
