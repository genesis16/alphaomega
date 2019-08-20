import React from 'react'
import Section from '../components/section'
import Wave from '../components/wave'
import styled from 'styled-components'
import Layout from '../layouts'


const DigitalMarketing = styled.div`
color: #000000;
padding: 0 40px;
`
const Social = () => (
  <Layout>
  <div>
   <div className="Hero">
   <div className="HeroGroup">
        <h1>Social Media</h1>
        <p>Build. Brand. Sell </p>
        <div className="Logos">
        <a className="link icon-link" href="https://sketch.com">
            <img src={require("../images/logo-sketch.png")} alt ="sketch" width="50" />
          </a>
          <a className="link icon-link" href="https://www.figma.com">
          <img src={require("../images/logo-figma.png")} alt ="figma" width="50" />
          </a>
          <a className="link icon-link" href="https://www.framer.com">
          <img src={require("../images/logo-framer.png")} alt="framer" width="50" />
          </a>
          <a className="link icon-link" href="https://www.gatsbyjs.org">
          <img src={require("../images/gatsby-icon.png")} alt ="gatsby" width="50" />
          </a>
          <a className="link icon-link" href="https://www.reactjs.org">
          <img src={require("../images/logo-react.png")} alt ="react" width="50" />
          </a>
          <a className="link icon-link" href="https://wordpress.org">
          <img src={require("../images/wordpressicon.png")} alt="wordpress" width="50" />
          </a>
        <Wave />
        </div>
     </div>
     </div>
     <DigitalMarketing>
      <h2>Revive your Social Media Feed</h2>
      <h3> Trust me, I'm a Hootsuite certified professional.</h3>
      <p>Most business owners don't have the time or inclination to build their social media pages. Perhaps you don't see the value. Or perhaps you dont have a strategy or schedule that is required to post valuable and consistent content to engage your audience. Social media can be a powerful tool to help you build and grow your business, and alongside content marketing is part of a marketing mix that provides another avenue to help you generate new leads and clients! You don't have to spend alot of time on your feed, or engaging in comments. I can turn off your comments, freeing up your time, or set key times for you to check messages and respond to prospects. YOur content can also be set on a schedule to publish at the key times your demographic is online and most likely to view your posts. I can also give you a report on engagement, trending topics, most viewed posts and more. </p>
     </DigitalMarketing>
  
      <Section
     image= {require('../images/rain.jpg')}
     logo= {require('../images/wordpressicon.png')}
      title="Social Meida Services"
      text= "Social media services include: regular posts, sales and promotions, paid social, automatic blog publishing, increase in followers, increase in engagement and general social management"
     />
     </div>
 </Layout>
)

export default Social