import React from 'react';
import { Provider } from 'react-redux';

/*** components ***/
import { InitialComponent } from './src/components/Initial';

/*** redux ***/
import { store } from './src/redux';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <InitialComponent />
    </Provider>
  );
};

export default App;
