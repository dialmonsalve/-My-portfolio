import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.828eb5b8.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4 } from './chunks/pages/all.b4afb19b.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 *//* empty css                                      *//* empty css                                     *//* empty css                                 */import './chunks/about.74ca26dc.c3695def.mjs';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/api-comics.astro", _page1],["src/pages/api-books.astro", _page2],["src/pages/projects.astro", _page3],["src/pages/about.astro", _page4],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.f21d54d5.css","_astro/about.b9bb8369.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/api-comics.c2094f61.css","_astro/about.b9bb8369.css"],"scripts":[],"routeData":{"route":"/api-comics","type":"page","pattern":"^\\/api-comics\\/?$","segments":[[{"content":"api-comics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api-comics.astro","pathname":"/api-comics","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/api-books.3bd26af2.css","_astro/about.b9bb8369.css"],"scripts":[],"routeData":{"route":"/api-books","type":"page","pattern":"^\\/api-books\\/?$","segments":[[{"content":"api-books","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api-books.astro","pathname":"/api-books","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.b9bb8369.css"],"scripts":[],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.b9bb8369.css"],"scripts":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.b9bb8369.css","/_astro/api-books.3bd26af2.css","/_astro/api-comics.c2094f61.css","/_astro/index.f21d54d5.css"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
