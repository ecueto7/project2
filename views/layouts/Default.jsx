const React = require('react')

class Default extends React.Component {
  render () {
    const { project, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/projects'>Go to Home Page To Upload Pet</a> <br />
            <a href='/projects/new'>Upload a New Pet</a>
            {project ? <a href={`/projects/${project._id}/edit`}> {project.name} Edit Page </a> : ''}
            {project ? <a href={`/projects/${project._id}`}>{project.name} Show Page</a> : ''}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default