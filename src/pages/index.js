import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Layout from '../layouts'

const IndexPage = () => (
  <Layout>
  <div>
   <div className="Hero">
   <div className="HeroGroup">
        <h1>Alpha + Omega digital </h1>
        <p>Build. Brand. Sell </p>
        <div className="Logos">
          <a className="link icon-link" href="https://sketch.com">
            <img src={require("../images/logo-sketch.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.figma.com">
          <img src={require("../images/logo-figma.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.framer.com">
          <img src={require("../images/logo-framer.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.gatsbyjs.org">
          <img src={require("../images/gatsby-icon.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.reactjs.org">
          <img src={require("../images/logo-react.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://wordpress.org">
          <img src={require("../images/wordpressicon.png")} width="50" />
          </a>
        <Wave />
       </div>
       </div>
      </div>
    <div className="Cards">
      <h2>See all Projects</h2>
      <div className="CardGroup">
        <Card
          url="https://google.com/"
          title="Under Construction"
          text="Coming soon"
          image={require('../images/Topography4.png')}
        />
        <Card
          title="Under construction"
          text="Coming Soon"
          image={require('../images/Topography4.png')}
        />
        <Card
          title="Under Construction"
          text="Coming Soon"
          image={require('../images/Topography4.png')}
        />
      </div>
    </div>
    <Section
     image= {require('../images/rain.jpg')}
     logo= {require('../images/logo-react.png')}
      title="Build your dream website"
      text="Transform your website into a feature rich, lightening fast, SEO optimised site that will improve your page loading speed, decrease your bounce rate, and convert more clients. "
     />
     </div>
 </Layout>
)

export default IndexPage
