import { store } from './src/store.js'
const { loadModule } = window['vue3-sfc-loader'];
const options = {
  moduleCache: {
    vue: Vue
  },
  async getFile(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return {
      getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
    }
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
}

function loadComponent(url) {
  return Vue.defineAsyncComponent(() => loadModule('./src/components/' + url, options));
}

Vue.createApp({
  components: {
    'sidebar': loadComponent("Sidebar.vue"),
    'content': loadComponent("Content.vue"),
  }
}).use(store).mount('#app');
