import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App } from '../../ui/layouts/App.jsx';

import Index from '../../ui/pages/Index.jsx';
import CharacterList from '../../ui/pages/CharacterList.jsx';
import Character from '../../ui/pages/Character.jsx';
import CharacterCreation from '../../ui/pages/CharacterCreation.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/characters/:id" component={Character} />
        <Route path="/charactercreation" component={CharacterCreation} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>),
    document.getElementById('react-root')
  );
});
