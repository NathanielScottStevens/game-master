import { configure } from '@kadira/storybook';
import '../client/main.scss';

function loadStories() {
  require('../tests/DieStatLine.js');
  require('../tests/StatList.js');
  require('../tests/CheckListCard.js');
}

configure(loadStories, module);