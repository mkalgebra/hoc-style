import HocComponent from "./HocComponent";
import Auto1StyleModule from "./Auto1.module.css";

function Auto1({ speed, handleSpeed }) {
  const spanStyle = {
    color: "red",
    fontSize: "24px",
    borderBottom: "1px solid black",
  };

  return (
    <>
      <span style={spanStyle}>Brzina prvog auta: {speed}</span>
      <button className={Auto1StyleModule.btn} onClick={handleSpeed}>
        Ubrzaj
      </button>
    </>
  );
}

export default HocComponent(Auto1);
