import './staffGrid.css';
import GridItem from './GridItem';
import { staffMembers } from './data';

const StaffGrid = () => {
  return (
    <ul className='StaffGrid'>
      {staffMembers.map((member, index) => (
        <GridItem key={index} member={member} />
      ))}
    </ul>
  );
};

export default StaffGrid;
