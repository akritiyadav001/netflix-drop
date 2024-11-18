//import Login from './components/login.js';
import { Provider } from 'react-redux';
import Body from './components/body.js';
import appStore from './utils/appStore.js';
function App() {
  return (
      <div >
       <Provider store={appStore}><Body/></Provider>
    </div>
  );
}

export default App;
