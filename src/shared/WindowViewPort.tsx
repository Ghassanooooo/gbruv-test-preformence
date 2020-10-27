import { useLayoutEffect, useState } from 'react';

export enum BreakpointsEnum {
    XS = 640,
    SM = 768,
    MD = 1024,
    LG = 1200,
}
export enum ViewPortEnum {
    Small = 'small',
}
const WindowViewPort = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [viewPort, setviewPort] = useState();

    useLayoutEffect(() => {
        function updateSize() {
            const { innerWidth, innerHeight } = window;
            if (innerWidth <= BreakpointsEnum.XS) {
                setviewPort(ViewPortEnum.Small);
            }
            setWidth(innerWidth);
            setHeight(innerHeight);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return { width, height, viewPort };
};

export default WindowViewPort;
