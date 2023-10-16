export const CharacterRatings = ({ characters }) => {
  characters.sort((a, b) => a.votes - b.votes);
  return (
    <>
      <section className="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {characters.slice(4).map((char) => (
            <tr className="dark light" key={char.name}>
              <td>{char.name}</td>
              <td>{char.skillset}</td>
              <td>{char.votes}</td>
            </tr>
          ))}
        </table>
      </section>
    </>
  );
};
