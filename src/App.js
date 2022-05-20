import './App.css';
import React,{useContext,useState,createContext} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const initialState=10;

const context=createContext(null);

const MyGrandChild=()=>{

  const {state,setState}=useContext(context);

  console.log({state,setState});

  const increment=()=>{
    setState(state+1);
  };

  return(
    <div>
    <button onClick={increment}>Increment</button>
    {state}
    </div>
  )
}


const MyChild=()=>{
  return(
<div>
<MyGrandChild/>
</div>
  )
}




function App() {

  const[state,setState]=useState(initialState);
  const obj={state:state,setState:setState};

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <context.Provider value={obj}>
    <div className="App">
    <MyChild/>
    <h2>Vignesh</h2>
    </div>
    </context.Provider>
    </ThemeProvider>
  );
}

export default App;
