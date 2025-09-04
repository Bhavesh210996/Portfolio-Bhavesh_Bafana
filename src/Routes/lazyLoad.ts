import React from "react";


export const lazyLoad = (path: string) => React.lazy(() => import(`../pages/${path}`));