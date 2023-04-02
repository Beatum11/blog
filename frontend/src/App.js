import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './modules/Register';
import Menu from './modules/Menu';
import Home from './modules/Home';
import LogIn from './modules/LogIn';
import PostPage from './modules/PostPage';
import FullArticle from './modules/FullArticle';

function App() {



  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/post" element={<PostPage/>} />
          <Route path="/article" element={<FullArticle/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
