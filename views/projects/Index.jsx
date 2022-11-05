const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { projects } = this.props
    return (
      <Default title='Pets Adopting Page'>
        {/* <h1>Pets Index Page</h1> */}
        <nav>
          <a href='/projects/new'>Upload a New Pet</a>
        </nav>
        <ul>
          {
                        projects.map((project) => {
                          const { name, color, size, age, readyToAdopt, alredyAdopted,  _id } = project
                          return (
                            <li key={_id}>
                              <a href={`/projects/${_id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        readyToAdopt
                                          ? 'It\'s ready to be adopted'
                                          : 'It\'s already adopted'
                                    }
                              <br />
                              <form method='POST' action={`/projects/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index