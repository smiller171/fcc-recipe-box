import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import '@storybook/addon-console';
import Vue from 'vue';

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

setOptions({
  showSearchBox: false,
  sortStoriesByKind: true,
  addonPanelInRight: true
});

configure(loadStories, module);
