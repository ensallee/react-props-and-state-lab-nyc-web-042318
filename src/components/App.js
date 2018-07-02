import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    console.log('event value inside onChangeType', event.target.value)
    this.setState({filters: {...this.state.filters, type:event.target.value}}, () => {console.log(this.state.filters.type)})
  }

  onFindPetsClick = (event) => {
    switch(this.state.filters.type) {
      case 'all':
        fetch('/api/pets')
          .then(resp=> resp.json())
          .then(data => this.setState({
            pets: data
          }, () => {console.log(data)}))
        break;
      case 'cat':
        fetch('/api/pets?type=cat')
          .then(resp => resp.json())
          .then(data => this.setState({
            pets: data
          }, () => {console.log(data)}))
        break;
      case 'dog':
        fetch('/api/pets?type=dog')
          .then(resp => resp.json())
          .then(data => this.setState({
            pets: data
          }, () => {console.log(data)}))
        break;
      case 'micropig':
        fetch('/api/pets?type=micropig')
          .then(resp => resp.json())
          .then(data => this.setState({
            pets: data
          }, () => {console.log(data)}))
        break;
    }
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets});
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
