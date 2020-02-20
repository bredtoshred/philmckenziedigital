const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-work-js": hot(preferDefault(require("/Users/philmckenzie 1/Desktop/philmckenziedigital/src/templates/work.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/philmckenzie 1/Desktop/philmckenziedigital/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/philmckenzie 1/Desktop/philmckenziedigital/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/philmckenzie 1/Desktop/philmckenziedigital/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/philmckenzie 1/Desktop/philmckenziedigital/src/pages/index.js")))
}

