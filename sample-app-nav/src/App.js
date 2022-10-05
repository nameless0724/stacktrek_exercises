import TopBar from './component/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './page/About';
import Home from './page/Home';
import MovieListPage from './page/MovieListPage';
import SpiderLily from './page/SpiderLily';


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<MovieListPage />} />
        <Route path="/spiderlily" element={<SpiderLily />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
