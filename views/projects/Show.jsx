const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, age, size, readyToBeAdopted} = this.props.project
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} project={this.props.project}>
        <p>{capName} is {color}, {age}, {size}, {readyToBeAdopted ? 'it\'s ready to be adopted' : 'it\'s  already adopted'}</p>
      </Default>
    )
  }
}


module.exports = Show
