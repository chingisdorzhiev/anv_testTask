import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientInfo from './Components/ClientInfo';
import MainComponent from './Components/MainComponent';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />}/>
          <Route path="/client/:id" element={<ClientInfo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
