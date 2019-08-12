const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/page-2.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/projects.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/services.js"))),
  "component---src-pages-social-media-js": hot(preferDefault(require("/Users/janewhitehead/Desktop/Projects/gatsby/alphaomega/src/pages/SocialMedia.js")))
}
