import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


// in whatever component the useeffect hook is writtem; it will run the code in useeffect after the component renders



function App() {


  // variation1 

  // useEffect(()=>{
  //   console.log("UI rendering done");
  // });

  // variation2- second parameter shows the dependency list

  // useEffect(()=>{
  //   console.log("UI rendering done");
  // },[]);

  // variation-3->on rendering the 

 



  const[text,setText]=useState('a');
  function changeHandler(event)
  {
    setText(event.target.value);
     console.log(text);
  }
  useEffect(()=>{
    console.log("Change seen");
  },[text]);

  return (
    <div className="App">
      {/* <input type="text" onChange={changeHandler}></input> */}

      {/* controlled input */}

      <input 
  type="text" 
  value={text}
  onChange={changeHandler}
/>

    </div>


  );
}

export default App;
