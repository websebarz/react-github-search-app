import { useState, useEffect } from "react";
import Header from "./comps/Header";
import NavBar from "./comps/NavBar";
import User from "./comps/User";

function App() {
  const [username, setUsername] = useState(null);
  const [currUser, setCurrUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name } = e.target;
    // console.log(name.value);

    setUsername(name.value);
  };

  useEffect(() => {
    const getUser = () => {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((user) => {
          setCurrUser(user);
        });
    };

    getUser();
    // const getUser = async () => {
    //   const api = `https://api.github.com/users/${username}`;
    //   const res = await fetch(api);
    //   const data = await res.json();

    //   return data;
    // };

    // (async function () {
    //   try {
    //     console.log(await getUser());
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();
  }, [username]);
  // console.log(currUser);

  return (
    <div className="bg-[#F6F8FF]">
      <Header />
      <NavBar handleSubmit={handleSubmit} />
      <User currUser={currUser} />
    </div>
  );
}

export default App;
