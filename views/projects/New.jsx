const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Upload A New Pet'>
        <form method='POST' action='/projects'>

          Pet's Name: <input type='text' name='name' placeholder='Name of Pet Here'/><br />
          Pet's Color: <input type='text' name='color' placeholder='Color of Pet Here' /><br />
          Pet's Age: <input type='text' name='age' placeholder='Pets Age Here'/><br />
           Pet's Size: <input type='text' name='size' placeholder='Pets Size Here'/><br />
          Is Ready To Be Adopted: <input type='checkbox' name='readyToBeAdopted' /><br />
          Is Already Adopted: <input type='checkbox' name='readyToBeAdopted' /><br />
      
          <input type='submit' value='Submit Pet' />
        </form>
      </Default>
    )
  }
}

module.exports = New