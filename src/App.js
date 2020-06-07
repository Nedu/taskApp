import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import Tasks from './pages/tasks/Task';
import Today from './pages/today/Today';
import ErrorComponent from './components/errorComponent/ErrorComponent';

const items = [
  { name: 'tasks', label: 'Tasks', path: '/tasks' },
  { name: 'today', label: 'Today', path: '/today' }
]

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
        <SideBar items={items} />
        <Switch>
          <Route path='/tasks' exact component={Tasks} />
          <Route exact path='/today' component={Today} />

          <Route component={ErrorComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
