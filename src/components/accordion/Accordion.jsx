import { useState } from 'react';
import { topics } from './data';
import AccordionItem from './AccordionItem';
import './accordion.css';

const Accordion = () => {
  const [clicked, setClicked] = useState('0');

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };

  return (
    <ul className='Accordion'>
      {topics.map((topic, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active='active'
          key={index}
          topic={topic}
        />
      ))}
    </ul>
  );
};

export default Accordion;
