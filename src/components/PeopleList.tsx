import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_PEOPLE = gql`
  query GetPeople {
    people {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

function PersonList() {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>People</h2>
      <ul>
        {data.people.map((person: any) => (
          <li key={person.name}>
            {person.name} - {person.height}cm - {person.mass}kg -{" "}
            {person.gender} - {person.homeworld}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
