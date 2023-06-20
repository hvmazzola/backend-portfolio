import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Curriculo from './pages/Curriculo';
import ProtectedRoute from './routes/protectedRoute';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AddProject from './pages/AddProject';
import NotFound from './pages/NotFound';
import EditProduct from './pages/EditProject';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
  <>
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
        <Route path='/project/:id' element={
          <ProtectedRoute>
            <ProjectDetail/>
          </ProtectedRoute>
        }/>
        <Route path='/admin/add-project' element={
          <ProtectedRoute>
            <AddProject/>
          </ProtectedRoute>
        }/>
        <Route path='/admin/edit-project/:id' element={
          <ProtectedRoute>
            <EditProduct/>
          </ProtectedRoute>
        }/>
        <Route path='/curriculo' element={
          <ProtectedRoute>
            <Curriculo/>
          </ProtectedRoute>
        }/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes> 
    </AuthProvider>     
  </>
  );
}

export default App;
