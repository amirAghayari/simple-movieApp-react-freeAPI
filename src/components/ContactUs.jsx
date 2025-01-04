import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";
function ContactUs() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      console.log("hi");
      navigate(-1);
    } else {
      navigate("/");
      console.log("by");
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleBack}>
        Back
      </button>
      <h1 className={styles.developerTitle}>WebDeveloper</h1>
      <div className={styles.allContainer}>
        <div className={styles.nameContainer}>
          <h2 className={styles.firstName}>Amirhossein</h2>
          <h1 className={styles.lastName}>Aghayari</h1>
        </div>
        <img
          src="../../public/34.jpg"
          alt="a developer "
          className={styles.firstImg}
        />
        <img
          src="../../public/helloworld.jpg"
          alt="a developer "
          className={styles.secondaryImg}
        />
        <div className={styles.contactDiv}>
          <h2>
            <span>Email:</span>
            <a href="#"> amirAghayari2119@gmail.com</a>
          </h2>
          <h2>
            <span>call:</span>
            <a href="#"> 09331052119</a>
          </h2>
          <h2>
            <span>Github:</span>
            <a href="https://github.com/amirAghayari"> amirAghayari</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
