import HocComponent from "./HocComponent";
import Auto2StyleModule from "./Auto2.module.css";

function Auto2({ speed, handleSpeed }) {
  return (
    <>
      <span className={Auto2StyleModule["auto-span"]}>
        Brzina drugog auta: {speed}
      </span>
      <button className={Auto2StyleModule.btn} onClick={handleSpeed}>
        Ubrzaj
      </button>
    </>
  );
}

export default HocComponent(Auto2);
