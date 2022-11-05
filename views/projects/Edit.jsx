const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, size, age, _id, color, readyToBeAdopted } = this.props.project
    return (
      <Default title={`${name} Edit Page`} project={this.props.project}>
        <form method='POST' action={`/projects/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Color: <input type='text' name='color' defaultValue={color} /><br />
            Age: <input type='text' name='age' defaultValue={age} /><br />
            Size: <input type='text' name='size' defaultValue={size} /><br />
          Is Ready To Be Adopted: <input type='checkbox' name='readyToBeAdopted' defaultChecked={readyToBeAdopted} /> <br />
          <input type='submit' value='Edit Adoption' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit