import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = async (data) => {
    try {
      await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Cookie has been set");
      // Navigate to next route
    } catch (e) {
      // Handle erro
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>User Name</label>
        <input
          name="username"
          placeholder="User Name"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
