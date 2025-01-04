import { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import MovieContext from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const item = [
  "breaking bad",
  "batman",
  "interstellar",
  "the god father",
  "fight club",
  "psycho",
  "gladiator",
  "terminator",
  "matrix",
  "inception",
  "spiderman",
];

function randomIndex(arr) {
  const index = Math.floor(Math.random() * 10) + 1;
  console.log(index);
  return arr[index];
}
function Login() {
  const { movie, setMovie, setQuery } = useContext(MovieContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const correctUser = "amirAghayari";
  const correctPassword = "amir2119";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUser && password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
    // Implement your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  useEffect(
    function () {
      setQuery(randomIndex(item));
      console.log(movie);
    },
    [setQuery]
  );

  return (
    <div className={styles.container}>
      <div className={styles.loginImgDiv}>
        <img src={movie.Poster} className={styles.Img} />
      </div>
      <div className={styles.loginDiv}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.formDiv}>
          <div className={styles.insideFormDiv}>
            <label className={styles.label} htmlFor="username">
              Username:
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div className={styles.insideFormDiv}>
            <label className={styles.label} htmlFor="password">
              Password:
              <input
                className={styles.input}
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button className={`${styles.btn} ${styles.btnGrad}`} type="submit">
            Login
          </button>
        </form>
        <button className={`${styles.btn} ${styles.btnSign}`} type="submit">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
