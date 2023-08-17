const AccordionItem = ({ topic, onToggle, active }) => {
  const { topicName, text } = topic;
  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button className='button' onClick={onToggle}>
        {topicName}
        <span className='control'>{active ? '-' : '+'}</span>
      </button>
      <div className={`answer_wrapper ${active ? 'open' : ''}`}>
        <div className='text'>{text}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
