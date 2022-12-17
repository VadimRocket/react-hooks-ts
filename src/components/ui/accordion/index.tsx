import React, { useState } from 'react';
import { AccordionData } from './types';
import { AccordionItem } from './AccordionItem';

import './Accordion.less';

interface AccordionProps {
  items: AccordionData[]
}
export const Accordion: React.FC<AccordionProps> = ({ items }) => {

  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <ul className="accordion" >
      {
        items.map((item, idx) => (
          <AccordionItem
            key={idx}
            data={item}
            isOpen={idx === currentIdx}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))
      }
    </ul >
  );
}

