import { useEffect, useState } from 'react';
import './App.css';
import GifPage from './GifPage';
import LandingPage from './LandingPage';
// import Header from './components/Header';
// import Search from './components/Search';

function App() {
  const [state, setState] = useState(<GifPage />);

  useEffect(() => {
    let num = 3;
    setInterval(() => {
      num -= 1;
      if(num === 0) {
        setState(<LandingPage />)
      }
    }, 1000)
  })

  return (
    <>
      {state}
    </>
  );
}

export default App;
