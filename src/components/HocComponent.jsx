import { useState } from "react";

function HocComponent(OriginalComponent) {
  function UpdatedComponent() {
    const [speed, setSpeed] = useState(0);

    const handleSpeed = () => {
      setSpeed(speed + 1);
    };

    return (
      <OriginalComponent
        speed={speed}
        handleSpeed={handleSpeed}
      ></OriginalComponent>
    );
  }

  return UpdatedComponent;
}

export default HocComponent;
