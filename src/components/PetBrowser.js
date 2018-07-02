import React from 'react'

import Pet from './Pet'

// class PetBrowser extends React.Component {
//   render() {
//     let petComponents = this.props.pets.map((pet) => {
//       return <Pet id={pet.id} name={pet.name} type={pet.type} gender={pet.gender} weight={pet.weight} age={pet.age} isAdpoted={pet.isAdopted} />
//     })
//     return <div className="ui cards">{petComponents}</div>
//   }
// }

const PetBrowser = ({pets, onAdoptPet}) => {
  const petComponents = pets.map((pet) => {
    return <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />
  })

  return (
    <div className="ui cards">{petComponents}</div>
  )
}

export default PetBrowser
