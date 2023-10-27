import './classes.css';
import { classes } from './data';

const Classes = () => {
  return (
    <ul className='ClassList'>
      {classes.map((singleClass) => (
        <div className='classItem'>
          <h2 className='className'>{singleClass.class}</h2>
          <h3 className='classAge'>{singleClass.age}</h3>
          <ul className='classFeatures'>
            {singleClass.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
          <p className='classText'>{singleClass.text}</p>
        </div>
      ))}
    </ul>
  );
};

export default Classes;
