import { UserDetalis } from "./pages/userDetalis/userDetalis";
import { CreateUser } from "./pages/createUser/createUser";
import { UserList } from "./pages/userList/userList";
import { Landing } from "./pages/landing/landing";
import { Routes, Route } from "react-router";
import { Login } from "./pages/login/login";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const user = [{}]
  const [list, setList] = useState(user);

  useEffect(() => {
    axios.get('https://gorest.co.in/public/v2/users')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/landing'} element={<Landing />} />
        <Route path={'/user-list'} element={<UserList list={list} />} />
        <Route path={'/user-detalis/:id'} element={<UserDetalis list={list} />} />
        <Route path={'/create-user'} element={<CreateUser list={list} setList={setList} />} />
        <Route path={'*'} element={<div><h1 style={{ textAlign: "center" }}>Not Found</h1></div>} />
      </Routes>
    </>
  );
}

export default App;
