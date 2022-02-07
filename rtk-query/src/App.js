import "./App.css";
import { useGetUsersQuery } from "./services/user";

function App() {
  const { data, isSuccess } = useGetUsersQuery();

  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query</h1>

      {isSuccess &&
        data &&
        data.map((user, i) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
              <h3>{user.address.city}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default App;
