import "./App.css";
import { User, Countries } from "./Person";
import { UserProvider } from "./UserContextProvider";

//wrapping around this component with userProvider, fetchign api
function App() {
  return (
    <div>
      <UserProvider>
        <User
          name={"pedro"}
          age={22}
          isMarried={false}
          country={Countries.Brazil}
        />
        <User
          name={"Colin"}
          age={24}
          isMarried={true}
          country={Countries.India}
        />
      </UserProvider>
    </div>
  );
}

export default App;
