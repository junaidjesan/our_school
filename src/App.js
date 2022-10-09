
import { createContext } from 'react';
import './App.css';
import Root from './Components/Root/Root';
export const ringContes=createContext('matir ring')
export const photoContex=createContext('photo')

function App() {
  
  return (
    <div className="App">
      <photoContex.Provider value={'https://jsonplaceholder.typicode.com/posts'}>
    <ringContes.Provider value={<img className='animation-bounce flex justify-center m-auto my-5' src='https://plus.unsplash.com/premium_photo-1661774939110-2840093552fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>}>
      <Root></Root>
      </ringContes.Provider>
      </photoContex.Provider>
    </div>
  );
}

export default App;
