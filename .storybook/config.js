import { configure } from '@kadira/storybook';
import '../client/main.scss';

const req = require.context('../imports/ui', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
// 
// function loadStories() {
//   require('../tests/DieStatLine.js');
//   require('../tests/StatList.js');
//   require('../tests/CheckListCard.js');
//   require('../tests/SkillSelection.js');
//   require('../tests/BreadCrumb.js');
//   require('../tests/CharacterCreation.js');
// }

configure(loadStories, module);
