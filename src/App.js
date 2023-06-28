import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState("light");
  const [light, settextlight] = useState("text-dark");
  const [btnText, setbtntext] = useState("dark");
  const [color, setcolor] = useState("light");


  const darkMode = () => {
    if (mode === "light") {
      setMode("dark")
      settextlight("text-light")
      setbtntext("light")
      document.body.style.backgroundColor = "#3e4451";
      setcolor("white");


    }
    else {
      setMode("light");
      settextlight("text-dark");
      setbtntext("dark")
      document.body.style.backgroundColor = "white";
      setcolor("black")


    }
  }
  return (
    <>
      <Navbar title="Textutils" home="Home" About="About" feature="Features" mode={mode} darkMode={darkMode} textlight={light} btn={btnText} />
      <div className="container  my-3"  >
        <Textform heading="Enter your text here" color={color} />
      </div>
    </>
  );
}

export default App;
