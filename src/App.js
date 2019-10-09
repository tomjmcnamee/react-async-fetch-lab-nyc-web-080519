import React from 'react'
import Person from './Person'


class App extends React.Component {

state = {
  data: [],
} 

componentDidMount() {
  fetch("http://api.open-notify.org/astros.json")
  .then( resp => resp.json())
  // .then( resp => console.log(resp.people) )
  .then( resp => this.setState({data: resp.people}) )
}



render() {
  let allPeople = this.state.data.map((pers, index) => <Person key={index} {...pers}   />)

  return (
    <div>
      {/* {console.log(this.state.data.people)} */}
      {allPeople}
    </div>
  )
} // ends Render

} // ends App Class

export default App

// Create an App class component from scratch
// Write a componentDidMount method. Inside the method, send a fetch request to 
// http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.