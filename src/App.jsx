import { useState, useEffect } from "react";
import Header from "./comps/Header";
import NavBar from "./comps/NavBar";
import User from "./comps/User";

function App() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name } = e.target;
    // console.log(name.value);

    setUsername(name.value);
  };

  useEffect(() => {
    const getUser = async () => {
      const api = `https://api.github.com/users/${username}`;
      const res = await fetch(api);
      const data = await res.json();

      console.log(data);
    };

    (async function () {
      try {
        console.log(await getUser());
      } catch (err) {
        console.log(err);
      }
    })();
  });

  return (
    <div className="bg-[#F6F8FF]">
      <Header />
      <NavBar handleSubmit={handleSubmit} />
      <User />
    </div>
  );
}

export default App;
