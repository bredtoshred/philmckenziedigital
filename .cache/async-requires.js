// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-work-js": () => import("./../src/templates/work.js" /* webpackChunkName: "component---src-templates-work-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

