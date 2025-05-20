
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dep-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dep-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 498, hash: 'c97c6dab300a67c256fc7ab1d88b177b2cfbe319ff38735cd846bb7718a75398', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'c01e62be4832f2d39243e245fe1889c77c71ce2544c4f8d883e89c035f843c33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20838, hash: '30ff10299a1d328dc0e62f0c9d32f89c851adf2be3e677fb91b18b686ac97a4a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
