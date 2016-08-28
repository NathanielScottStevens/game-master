import { configure } from '@kadira/storybook';
import '../client/main.scss';

function loadStories() {
  require('../imports/ui/components/DieStatLine.story.js');
}

configure(loadStories, module);
