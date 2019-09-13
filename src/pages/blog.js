import React from 'react';
import { graphql, Link } from "gatsby";
import Image from 'gatsby-image';
import Wave from '../components/wave'
import Layout from '../layouts'
import Section from '../components/section'

const Blog = ({ data: { allContentfulBlogPost: { edges } } }) => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Blog</h1>
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

      <div style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap', maxWidth: 1170, justifyContent: 'center' }}>
        {edges.map(({ node }) => (
          <Link to={node.slug} style={{ width: '33%', display: 'block', flexDirection: 'row'}}>
            <div style={{ margin: 15, background: '#f5f5f5' }}>
              <Image
                style={{ width: '100%', maxHeight: 220}}
                fluid={node.heroImage.fluid}
                objectFit="cover"
                objectPosition="100% 100%"
                alt={node.title}
              />
              <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15 }}>
                <h3>{node.title}</h3>
                <p>{node.description.description}</p>
                <p>{node.author.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Section
        image= {require('../images/rain.jpg')}
        logo= {require('../images/wordpressicon.png')}
        title="Content Creation Services"
        text= " Content creation services include: custom blog posts, content writing, tutorials, website content, social channel content and newsletter content"
      />
    </div>
  </Layout>
);

export default Blog;

export const query = graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            description {
              description
            }
            author {
              name
            }
            
            heroImage {
              fluid(maxHeight: 400) {
                src
                aspectRatio
                srcWebp
                base64
                sizes
                srcSet
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `



