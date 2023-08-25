const GridItem = ({ member }) => {
  const { photo, name, about } = member;

  return (
    <li>
      <div className='member-wrapper'>
        <img src='' alt='foto-integrante' />
        <h3>Nome</h3>
        <p>{name}</p>
        <h3>Sobre</h3>
        <p className='about'>{about}</p>
      </div>
    </li>
  );
};

export default GridItem;
