import React, { useEffect, useRef, useState } from 'react';
import { AccordionData } from '../types';

import './AccordionItem.less';


interface AccordionItemProps {
    data: AccordionData;
    isOpen: boolean;
    btnOnClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    data,
    isOpen,
    btnOnClick,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current as HTMLDivElement;

            setHeight(contentEl.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <h2 className="accordion-item-title">
                <button className="accordion-item-btn" onClick={btnOnClick}>
                    {data.title}
                </button>
            </h2>
            <div className="accordion-item-container" style={{ height }}>
                <div ref={contentRef} className="accordion-item-content">
                    {data.content}
                </div>
            </div>
        </li>
    );
}

