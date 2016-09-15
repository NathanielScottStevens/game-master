import { configure } from '@kadira/storybook';
import '../client/main.scss';

const req = require.context('../imports/ui', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
