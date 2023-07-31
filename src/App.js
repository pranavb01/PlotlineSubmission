import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TooltipManager from './components/TooltipManager/TooltipManager';


const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <TooltipManager />
        </div>
        <div style={{ flex: 1 }}>
          {/* Add any other components you want to display on the right side here */}
        </div>
      </div>
    </Provider>
  );
};

export default App;


