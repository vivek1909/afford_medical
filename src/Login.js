import React, { useState } from "react";
import api from "./api";

const Login = ({ history }) => {
  // all the states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email === "" || password === "" || password2 === "") {
      alert("please enter all the details.");
    }

    if (password !== password2) {
      alert("password entered were different");
    }

    try {
      const response = api.post(`/user/${email}/login`, { email, password });

      console.log(response.data);
      //   const userId = response.data.email || false;
      //   if (userId) {
      //     history.push("/");
      //   } else {
      //     console.log("Oops, wrong credentials");
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email" />
        <input
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" />
        <input
          value={password}
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="password2" />
        <input
          value={password2}
          type="password2"
          placeholder="Re-enter password"
          onChange={(e) => setPassword2(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
