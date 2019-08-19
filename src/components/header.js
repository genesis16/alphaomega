import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

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
     this.setState ({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}

  render() {
    return (
      <div className={this.state.hasScrolled ?
      'Header HeaderScrolled' : 'Header'}>
       <div className="Logo">
       <Link to="/"><img src={require('../images/logo-alpha.png')} width="80"/></Link>
       </div>
       <div className="HeaderGroup">
       <Link to="/projects">projects</Link>
       <Link to="/services">Services</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/blog">Blog</Link>
   </div>
</div>
     )
  }
}

export default Header

