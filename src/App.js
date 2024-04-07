import React, { Component } from 'react'
import Header from './components/Header'
import Main_1 from './components/Main_1'
import Main2_1 from './components/Main2_1'
import Main_2 from './сomponents/Main_2'

export class App extends Component {
  render() {
    return (
        <div className='wrapper'>
          <Header />
          <Main_1 />
          <Main2_1 />
          <Main_2 />
        </div>
    )
  }
}

export default App