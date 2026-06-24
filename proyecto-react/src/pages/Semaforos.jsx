import { useEffect, useState } from "react";
import "../app.css";

const colors = {
  red: "light-red",
  yellow: "light-yellow",
  green: "light-green",
};

function Semaforos() {
 
    const [color, setColor] = useState("")   //   const [valor, funcionParaCambiarValor] = useState(valorInicial)
    const [countDown, setCountDown] = useState(5)   //   PARA USEFFECT

    useEffect(() => {
        if(countDown === 0){  
            return
        }
        const intervalId = setTimeout(() => {
            setCountDown(countDown-1)
        }, 1000)
        return()=>{
            clearInterval(intervalId)
        }
    }, [countDown])

    function changeColor(c) {
        setColor(c)
       /*  console.log(prev)   //   valor previo */ 
        return (c)
    }

    useEffect(() => {
        if(countDown>0){
            return
        }
        if (color == "red"){
            setColor("green")
            setCountDown(5)
        }
        if (color == "yellow"){
            setColor("red")
            setCountDown(3)
        }
        if (color == "green"){
            setColor("yellow")
            setCountDown(5)
        }
    }, [color, countDown])



  return (
    <div className="app">
      <div className="traffic-light">
        <div
          className={`light light-off ${color === "red" ? colors.red : ""}`}
        ></div>

        <div
          className={`light light-off ${
            color === "yellow" ? colors.yellow : ""}`}
        ></div>

        <div
          className={`light light-off ${color === "green" ? colors.green : ""}`}
        ></div>

        <div className="buttons">
          <button
            onClick={() => changeColor("red")}
            className="button button-red"
          >
            Rojo
          </button>

          <button
            onClick={() => changeColor("yellow")}
            className="button button-yellow"
          >
            Amarillo
          </button>

          <button
            onClick={() => changeColor("green")}
            className="button button-green"
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
}

export default Semaforos;