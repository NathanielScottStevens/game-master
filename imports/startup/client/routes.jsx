import React, { component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App } from '../../ui/App.jsx';

import One from '../../ui/One.jsx';
import Two from '../../ui/Two.jsx';
import Index from '../../ui/Index.jsx';
import { Hello } from '../../ui/Hello.jsx';
import NotFound from '../../ui/NotFound.jsx';
import CharacterList from '../../ui/CharacterList.jsx';

Meteor.startup( () => {
  render((
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/characters" component={ CharacterList } />
        <Route path="/one" component={ One } />
        <Route path="/two" component={ Two } />
        <Route path="/hello/:name" component={ Hello } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>),
    document.getElementById( 'react-root' )
  );
});
