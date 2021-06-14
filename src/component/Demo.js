import { useQuery } from "@apollo/client";
// import { Typography } from "@material-ui/core";
import {
  CUSTOMERS,
  // ALL_FILMS,
  // GET_TRACKS,
  // LAUNCHES,
  // ME,
  // USERS,
  // USERSHOW,
} from "./company/company.grapql";
import Sidebar from "./sidebar/Sidebar";

const Demo = () => {
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [rocket, setRocket] = useState("");
  const { data, error, loading } = useQuery(CUSTOMERS, {
    fetchPolicy: "network-only",
  });
  // const [
  //   addUser,
  //   { loading: mutationLoading, error: mutationError },
  // ] = useMutation(CUSTOMERS);

  // const AddUser = () => {
  //   addUser({
  //     variables: { objects: [{ name, rocket }] },
  //     refetchQueries: ["USERSHOW"],
  //   })
  //     .then(() => {
  //       alert("successfully added.");
  //     })
  //     .catch((error) => {
  //       alert("Error.");
  //       console.log(error);
  //     });
  // };
  if (loading) return "Loading";
  if (error)
    return (
      <div>
        <div>Error</div>
        {console.log(error)}
      </div>
    );
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ flex: "0.1" }}>
        <Sidebar />
      </nav>
      <main style={{ flex: "0.9", margin: "50px" }}>
        {data.customers.map((customer, index) => (
          <div key={index}>
            <p>{customer.id}</p>
            <p>{customer.frstname}</p>
            <p>{customer.lastname}</p>
          </div>
        ))}
        {/* {mutationLoading && <h4>Loading...</h4>}
        {mutationError && <h4>Error</h4>}
        <div>
          <input type="text" onChange={(e) => setId(e.target.value)} />
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <input type="text" onChange={(e) => setRocket(e.target.value)} />

          <button type="submit" onClick={AddUser}>
            Add USer
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default Demo;
