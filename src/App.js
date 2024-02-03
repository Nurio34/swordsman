
import { useState, useEffect } from "react";
import sword from "./sword.png"

function App() {

  const [rightArmP1Action,setrightArmP1Action] = useState("")
  const [rightArmP2Action,setrightArm2Action] = useState("")
  const [swordAction,setSwordAction] = useState("")

  const actionFn = (e) =>  {
    if(e.key === " ") {
      setrightArmP1Action("rightArmP1Action")
      setrightArm2Action("rightArmP2Action")
      setSwordAction("swordAction")
    }
  }

  useEffect(()=> {

    window.addEventListener("keydown",actionFn)

    const time = setTimeout(() => {
      setrightArmP1Action("");
      setrightArm2Action("");
      setSwordAction("");
    }, 1000);

    return () => {
      clearTimeout(time)
      window.removeEventListener("keydown",actionFn)
    }
  })

  return (
    <div className="App">
      <div className="container">
        <div className="body">
          <div className="head"></div>
          <div className="left-arm"></div>
          <div className={"right-arm-p1 " + rightArmP1Action}>
            <div className={"right-arm-p2 " + rightArmP2Action}>
              <img src={sword} alt="" className={"sword " + swordAction} />
            </div>
          </div>
          <div className="left-leg"></div>
          <div className="right-leg"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
