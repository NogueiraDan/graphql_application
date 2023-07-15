import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PETS } from "../../../api/queries";
import "./petlist.scss"

function PetList() {
  const { loading, error, data } = useQuery(GET_PETS);

  return (
    <div className="listWrapper">
      <h2>Pet List</h2>

      <Link to="/add">
        <button>Add new pet</button>
      </Link>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data?.pets?.map((pet) => {
        return (
          <div key={pet?.id} className="petItem">
            <p>
              {pet?.name} - {pet?.type} - {pet?.breed}
            </p>

            <Link to={`/${pet?.id}`}>
              <button>Pet detail</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PetList;
