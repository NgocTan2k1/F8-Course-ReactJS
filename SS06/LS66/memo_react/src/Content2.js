import { memo } from 'react';

function Content2({ count }) {

    console.log("re-render Content2");

    return (
        <h1>Content2 {count}</h1>
    )
};

export default memo(Content2);




