import { memo } from 'react';

function Content({ onIncrease }) {
    console.log('re-render Content1');
    return (
        <>
            <h1>Content </h1>
            <button onClick={onIncrease}>Click 1!</button>
        </>
    );
};
export default memo(Content);