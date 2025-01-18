import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router> {/**a router has to wrap everything! */}
        <Navbar /> {/** element Text*/}
        <Routes>      
          <Route path="/" element={'Home'} />
          <Route path="/about" element={'About'} />
          <Route path="/projects" element={'Projects'} />
          <Route path="/contact" element={'Contact'} />
        </Routes>
      </Router>
    </main>

  )
}

export default App
