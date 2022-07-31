import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import {useState, useEffect} from "react";
import { useAuthentication } from './hooks/useAuthentication';

//context
import { AuthProvider } from './context/AuthContext';


import Home from './component/pages/Home'
import ComoFunciona from './component/pages/ComoFunciona'
import Sobre from './component/pages/Sobre'
import Register from './component/pages/Register/Register'
import Login from './component/pages/Login/Login';
import CreatePost from './component/pages/CreatePost/CreatePost'


import Container from './component/layout/Container'
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'
import Cards from './component/pages/Cards'
import Conteudos from './component/pages/Historias/Conteudos';
import Post from './component/pages/Post/Post'
import Dashboard from './component/pages/Dasboard/Dashboard';
import EditPost from "./component/pages/EditPost/EditPost";

function App() {
  
 const [user, setUser] = useState(undefined)
 const {auth} = useAuthentication()

 const loadingUser = user === undefined

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
}, [auth])

 if (loadingUser) {
   return <p>Carregando...</p>
 }
  return (
    <AuthProvider value={{ user }}>
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comofunciona" element={<ComoFunciona />} />
            <Route path="/sobre" element={<Sobre />} />
            
            <Route path="/conteudos/visualizar/:id" element={<Post />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route 
            path="/login" 
            element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
            path="/register" 
            element={!user ? <Register /> : <Navigate to="/" />} 
            />
            <Route 
            path="/posts/edit/:id"
            element={user ? <EditPost /> : <Navigate to="/login" />} />
             <Route 
            path="/cards"
            element={user ? <Cards /> : <Navigate to="/login" />} />
            <Route path="/edit" element={<EditPost />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/conteudos" element={<Conteudos />} />
            
          </Routes>
        </Container>
        <Footer />
      </Router>
    </AuthProvider>
   
  );
}

export default App;
