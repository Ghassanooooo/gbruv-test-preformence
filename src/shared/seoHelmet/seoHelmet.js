import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SeoHelmet(props) {
    const { title, description, url } = props;
    console.log('Helmet ==> ', title, description, url);
    return (
        <Helmet>
            <meta charset="UTF-8" />

            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
}
