import MainPage from './pages/MainPage/MainPage'
import AdminPage from './pages/AdminPage/AdminPage';
import './styles/index.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/admin' element={<AdminPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
