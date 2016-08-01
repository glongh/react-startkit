import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

class App extends React.Component {
  render () {
    return (
      <div>
        <div>Rendered from react</div>
        <Component1 />
        <Component2 />
      </div>
		)
  }
}

export default App
