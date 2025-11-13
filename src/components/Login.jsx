import { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import MovieContext from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function Login() {
  const { movie, setQuery } = useContext(MovieContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const correctUser = "amirAghayari";
  const correctPassword = "amir2119";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUser && password === correctPassword) {
      login();
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  useEffect(() => {
    setQuery(randomIndex(item));
  }, [setQuery]);

  const posterSrc = Array.isArray(movie) ? movie[0]?.Poster : movie?.Poster;

  return (
    <div className={styles.container}>
      <div className={styles.loginImgDiv}>
        {posterSrc && <img src={posterSrc} className={styles.Img} />}
      </div>
      <div className={styles.loginDiv}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.formDiv}>
          <div className={styles.insideFormDiv}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input
              className={styles.input}
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.insideFormDiv}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              className={styles.input}
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={`${styles.btn} ${styles.btnGrad}`} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
