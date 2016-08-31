import { configure } from '@kadira/storybook';
import '../client/main.scss';

function loadStories() {
  require('../tests/DieStatLine.js');
  require('../tests/StatList.js');
  require('../tests/CheckListCard.js');
  require('../tests/SkillSelection.js');
  require('../tests/BreadCrumb.js');
}

configure(loadStories, module);
