import React from 'react';
import BulletList from './bulletList';

const Stack = ({ title, items }) => {
    return (
        <>
            <p className="my-4">{title}</p>
            <BulletList className="text-sm" items={items} />
        </>
    );
};

export default Stack;
