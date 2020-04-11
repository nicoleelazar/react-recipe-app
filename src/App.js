import React from 'react';
import ContainRecipeApp from './components/ContainRecipeApp';
import './App.css';

function App() {
  return (
    <div>
        <ContainRecipeApp />
    </div>
  );
  
  
}

export default App;


  // eg. for state Hook use  
  // const [counter, setCounter] = useState(0)

  // const incrm = () => {
  //   setCounter(counter + 1)
  // }
  
  {/* <button onClick={incrm}>{counter}</button> */}
