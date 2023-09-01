const GridItem = ({ member }) => {
  const { photo, name, about } = member;

  return (
    <li>
      <div className='member-wrapper'>
        <img className='photo' src={photo} alt='foto-integrante' />
        <div className='member-info'>
          <h3>Nome</h3>
          <p>{name}</p>
          <h3>Sobre</h3>
          <p className='about'>{about}</p>
        </div>
      </div>
    </li>
  );
};

export default GridItem;
