import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
      this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true
      })
    } else {
      this.setState({
        hasScrolled: false
      })
    }
  }

  render() {
<<<<<<< HEAD
    return ( <
      div className = {
        this.state.hasScrolled ?
        'Header HeaderScrolled' : 'Header'
      } >
      <
      div className = "HeaderGroup" >
      <
      Link to = "/" > < img src = {
        require('../images/logo-alpha.png')
      }
      width = "50" / > < /Link>  <
      Link to = "/about" > about < /Link>  <
      Link to = "/projects" > projects < /Link>  <
      Link to = "/services" > Services < /Link>  <
      Link to = "/contact" > Contact < /Link> <
      Link to = "/blog" > Blog < /Link>  <
      /div>  <
      /div>
    )
=======
    return (
      <div className={this.state.hasScrolled ? 'header headerscrolled' : 'header'}>
        <div className="headergroup">
          <Link to="/"><img src={require('../images/logo-alpha.png')} width="80" alt="" /></Link>
        </div>
        <Link to="/projects">projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
     )
>>>>>>> b733ad99c962e233689354a2fc79bb37d3ca456a
  }
}

export default Header