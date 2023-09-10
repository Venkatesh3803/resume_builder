import './App.css';
import Navber from './components/navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ResumePage from './pages/resumePage/ResumePage';
import AddProject from './pages/Add project/AddProject';
import EditPage from './pages/editPage/EditPage';

function App() {
  return (
    <div className="App">
      <Navber />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume/:id' element={<ResumePage />} />
          <Route path='/addproject' element={<AddProject />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
