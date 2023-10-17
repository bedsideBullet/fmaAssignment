export const CharacterRatings = ({ characters }) => {
  const sortedAndSliced = characters
    .slice()
    .sort((b, a) => b.votes - a.votes)
    .slice(4)
    .reverse();
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
          {sortedAndSliced.map((char) => (
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
