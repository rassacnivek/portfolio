import React from 'react';
import { MAX_DELAY } from '@/hooks/useAnimationDelay';
import BulletList from '@/components/base/bulletList';
import Stack from '../base/stack';

const ExperienceItem = ({
    experience: { title, date, company, contract, description, front, back, system },
}) => {
    return (
        <div
            className="mb-12 opacity-0 animate-enter"
            style={{
                animationDelay: MAX_DELAY + 'ms',
            }}
        >
            <p className="font-medium text-xl">{`${title}, ${company}`}</p>
            <p className="mb-4 text-slate-400">{`${date}, ${contract}`}</p>
            <BulletList items={description} />
            <p className="my-4 font-medium text-lg">Stacks</p>
            {front && <Stack title="Front" items={front} />}
            {back && <Stack title="Back" items={back} />}
            {system && <Stack title="System" items={system} />}
        </div>
    );
};

export default ExperienceItem;
