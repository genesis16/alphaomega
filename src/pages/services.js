import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import Wave from '../components/Wave'
import styled from 'styled-components'
import Layout from '../layouts'


const DigitalMarketing = styled.div`
color: #000000; 
padding: 0 40px;
`
const About = () => (
  <Layout>
  <div>
   <div className="Hero">
   <div className="HeroGroup">
        <h1>Alpha + Omega digital </h1>
        <p>Build. Brand. Sell</p>
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
      <h2>Content Marketing</h2>
      <h3>What is Content Marketing and who do I need to do it? </h3>
      <p>In a nutshell, content marketing is 'content' that draws traffic to your website from your intended audience. It can be in the form of blog posts, videos, tutorials, articles, recipes, opinion pieces and so on. Think about the last time you googled "how to.." and the first page you clicked on in googles search results. It was most likely 'content' that was successfully produced by a blogger/author/site owner and what kept you reading it was the benefit it provided you; or how it solved your problem at hand. This is content marketing. It's building authority organically, without shelling out thousands of dollars on on advertising. That's NOT to say it's quick or easy. It generally takes about a year to see true increases in traffic and sales from content marketing. I suspect this figure will grow even more as more and more people and websites produce competitive content.<br></br>
      <br></br>
      <h3>But If I give away all my best advice/information for free, no one will buy my product/service!</h3>

      Actually, that's not true. Content marketing has the opposite effect of asserting your authority on a certain topic/s, and proving your value to your audience. Lack of content means you site will have an extremely high bounce rate, regardless of how much money you throw at Google PPC per month. Yes, I know what you're going to say, you don't have time to produce content you are too busy running your business. That's cool, sometimes it's best to outsource marketing to make sure you get it done and don't have to think about it anymore. Needless to say, there is also merit in hiring someone who has more experience and know's what they're doing and can execute this marketing element properly for you.</p>

      <h2>Email marketing</h2>
      <h3>More powerful than all your social channels combined.</h3>
      <h4>"once you build an audience of email subscribers, anything is possible" - Joe Pulizzi</h4>
      <p>The proliferation of social media marketing has many small business thinking that pumping a tonne of money into Facebook advertising or Instagram advertising is the way to go. In the meantime, they are completely ignoring email marketing or only sending out an email once or twice a year and missing a massive opportunity.

      Email marketing builds brand awareness, helps you build authority and trust and build a relationship over time that is more likely to convert into a sale. Did you know that 91% of people check their emails <em>daily</em>, whereas many average users go days without checking their social media feed - particularly business owners.
      A well executed and nicely presented email campaign is paramount to connecting with your audience, and maximising revenue during lull times of year to provide your busines with a consistent income.</p>
      <p>I will setup a Mailchimp integration with your contact form, and custom code a HTML email to send a professional and sales driven email to your client base that will be analysed with all major data end points- open rate, unsubcribe rate, new subscribe rate, click through rate, and website sale conversion. </p>
     </DigitalMarketing>
  
      <Section
     image= {require('../images/rain.jpg')}
     logo= {require('../images/wordpressicon.png')}
      title="Content Creation Services"
      text= " Content creation services include: custom blog posts, content writing, tutorials, website content, social channel content and newsletter content"
     />
     </div>
 </Layout>
)

export default About
