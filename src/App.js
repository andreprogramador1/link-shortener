import React from 'react'
import {Shortner} from './components/Shortener'
import {Nav} from './components/Nav'
import {Hero} from './components/Hero'

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden'}}>
      <Nav/>
      <Hero/>
      <Shortner/>
    </div>
  );
}

export default App;
