export const CharacterCards = ({ characters }) => {
  return (
    <section id="character-cards">
      {characters.map((char) => (
        <div className="card" key={char.name}>
          <div className="card-titles">
            <h3>{char.name}</h3>
            <h4>{char.nickName || "No Nickname"}</h4>
          </div>
          <img src={char.imageUrl} alt={char.name} />
          <p>{char.background}</p>
        </div>
      ))}
    </section>
  );
};
