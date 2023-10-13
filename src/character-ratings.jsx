export const CharacterRatings = () => {
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
          <tr className="dark">
            <td>{name}</td>
            <td>{skillset}</td>
            <td>{votes}</td>
          </tr>
        </table>
      </section>
    </>
  );
};
