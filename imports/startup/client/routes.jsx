import React, { component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App } from '../../ui/pages/App.jsx';
import Index from '../../ui/pages/Index.jsx';

import CharacterList from '../../ui/pages/CharacterList.jsx';

import NotFound from '../../ui/pages/NotFound.jsx';

Meteor.startup( () => {
  render((
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/characters" component={ CharacterList } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>),
    document.getElementById( 'react-root' )
  );
});
