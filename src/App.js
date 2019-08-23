import React from 'react';
import {Provider} from 'react-redux';

import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video';

import store from './store/store';

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Provider store={store}>        
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}
