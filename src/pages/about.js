import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import Layout from '../layouts'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const About = () => (
  <Layout>
  <div>
   <div className="Hero">
   <div className="HeroGroup">
        <h4>Hi, I'm Jane. I'ts nice to meet you. </h4>
        <p>Build. Brand. Develop </p>
        <Link className="link hero" to="/page-2/">Watch the video</Link>
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
        <Wave/>
          </div>
         </div>
        </div>
      <div className="About">
        <h2>About Me</h2>
        <p>Hi, my name is Jane and I'm a professional freelance web developer based in Melbourne Australia. <br/>
        I am proficient in all front end languages including PHP, JSX, ES6, CSS3, HTML5, CSS Grid and flexbox, JQuery, GraphQL, MySQL.<br/>
        I always strive to improve my dev skills and keep up with this rapidly changing web industry, and the evolving languages and frameworks.<br/>
        I also offer digital marketing and SEO services for my clients, as well as web maintenance plans to ensure 

        </p>
      </div>
    
    <Section
     image= {require('../images/rain.jpg')}
     logo= {require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
     />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
  <SectionCellGroup>
  {staticdata.cells.map(cell => (
  <Cell
     title={cell.title}
     image={cell.image} />
      ))}
      </SectionCellGroup>
      </div>
 </Layout>
)

export default About
