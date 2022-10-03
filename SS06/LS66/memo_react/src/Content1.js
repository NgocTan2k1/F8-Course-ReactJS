import { memo } from 'react';

function Content1({ count }) {
    console.log('re-render Content1');
    return (
        <h1>Content1 {count}</h1>
    );
};
export default memo(Content1);




