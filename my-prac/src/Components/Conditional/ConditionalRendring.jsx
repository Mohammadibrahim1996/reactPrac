import React, { useState } from "react";

export const ConditionalRendring = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div>
      {show ? <h1>khaja Sir</h1> : <h1>Afroz Sir</h1>}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};
