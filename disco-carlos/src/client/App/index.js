import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AppLayout from '../AppLayout'
import Collections from '../Collections'
import Collection from '../Collection'
import CollectionsForm from '../CollectionForm'
import DiscForm from '../DiscForm'

class App extends Component {
  render () {
    return (      
      <div>
        <Switch>
          <AppLayout>
            <Route exact path='/' component={Collections}/>
            {/* <Route exact path='/collection/' component={CollectionsForm} /> */}
            <Route exact path='/collection/:id' component={Collection} />
            <Route exact path='/disc/:id' component={DiscForm} />
            <Route exact path='/disc/' component={DiscForm} />
          </AppLayout>
        </Switch>
      </div>
    );
  }
}

export default App;
