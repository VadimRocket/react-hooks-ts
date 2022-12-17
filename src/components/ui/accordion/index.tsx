import React, { useState } from 'react';
import './Accordion.less';
import { AccordionData } from './types';
import { AccordionItem } from './AccordionItem';

function Accordion({ items }: { items: Array<AccordionData> }) {

  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <ul className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
  );
}

export default Accordion;