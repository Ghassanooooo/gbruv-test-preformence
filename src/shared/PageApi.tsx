import { useState, useEffect } from 'react';
import axios from 'axios';
import { backendApiURL } from './baseApiURL';
const PageApi = ({ children, path }) => {
    const [page, setPage] = useState();

    const asPath = path;
    const pathToArray = asPath
        .split('/')
        .filter((item) => item !== 'ux-manager' && item !== 'content-manager')
        .reverse();
    const pullPageName = pathToArray[0] || 'home';

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios(backendApiURL + 'pages/' + pullPageName);
                console.log('response.data   =====> ', response.data);
                setPage(response.data);
            } catch (ex) {
                console.log('ERRORS   =====> ', ex);
            }
        }
        fetchData();
    }, [path]);

    return children(page);
};

export default PageApi;
