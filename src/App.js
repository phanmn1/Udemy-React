import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adfa', name: "Max", age: 28 },
        { id: 'idlkad', name: "Manu", age: 29 },
        { id: 'lkdjfa', name: 'Stephanie', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { id: 'adfa', name: "Max", age: 28 },
        { id: 'idlkad', name: "Manu", age: 29 },
        { id: 'lkdjfa', name: 'Stephanie', age: 27 }
      ]
    });
  };
 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; 
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id: 'adfa', name: "Max", age: 28 },
        { id: 'idlkad', name: event.target.value, age: 29 },
        { id: 'lkdjfa', name: 'Stephanie', age: 27 }
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if(this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            />
        })}
      </div>)
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
            onClick={this.togglePersonsHandler}
            style={style}
          >Switch Name</button>
         {persons}
        
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
