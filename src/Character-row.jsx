export const CharacterRow = (characters) => {
  return (
    <tr>
      {characters.slice(4).map((char) => (
        <tr className="dark light" key={char.name}>
          <td>{char.name}</td>
          <td>{char.skillset}</td>
          <td>{char.votes}</td>
        </tr>
      ))}
    </tr>
  );
};
