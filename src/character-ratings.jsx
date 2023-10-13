import { data } from "./data/fma-data";

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
          {data.map((char) => (
            <tr className="dark" key="char.name">
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
