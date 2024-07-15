import React, { useState } from 'react'

import Header from './Components/Header.jsx'
import UserInput from './Components/UserInput.jsx'
import Results from './Components/Results.jsx'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(preUserInput => {
      return {
        ...preUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onchange={handleChange}/>
      <Results input={userInput} />
    </>
  );
}

export default App
