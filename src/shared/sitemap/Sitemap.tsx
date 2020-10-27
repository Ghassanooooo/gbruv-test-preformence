import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageEnum } from '../layout/navbar/Navbar.types';
import crawlArticles from '../../CrawlArticles/articles.json';

const Sitemap = () => {
    return (
        <nav>
            {Object.keys(PageEnum).map((i: any) => (
                <NavLink key={i} style={{ display: 'none' }} to={PageEnum[i]}>
                    {i}
                </NavLink>
            ))}

            {!!crawlArticles &&
                crawlArticles.map((item) => (
                    <NavLink
                        key={item._id}
                        style={{ display: 'none' }}
                        to={'/product-article/' + item._id}
                    >
                        {item.title}
                    </NavLink>
                ))}
        </nav>
    );
};

export default Sitemap;
/** {products.length > 0 &&
                products.map((i: any) => (
                    <NavLink
                        key={i._id}
                        style={{ display: 'none' }}
                        to={'/product-article/' + i._id}
                    >
                        {i.title}
                    </NavLink>
                ))} */
