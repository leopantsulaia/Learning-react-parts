import React, { useState } from "react";
import EffectEx3 from "./EffectEx3";

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <EffectEx3 />}
    </div>
  )
}