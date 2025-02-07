import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import { Home, About} from './pages';
import { Home } from './pages/Home';
import Chatbot from './pages/Chat';
import { Archive } from './pages/Archive';
import { useEffect } from 'react';
import "./App.css"


const App = () => {

  useEffect(() => {
    // Apply background color to the body when the component mounts
    // document.body.style.backgroundColor = '#171717';
    // document.body.style.margin = '0'; // Optional: reset any default body margin
    // document.body.style.padding = '0'; // Optional: reset any default body padding
    // document.body.style.height = '100%'; // Make sure it fills the screen
  }, []);

  return (
    <main>
        <Router>
            <Navbar />
            <div className='content'>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/archive" element={<Archive />}/>
                  <Route path="/chat" element={<Chatbot />} />
              </Routes>
            </div>

            {/* <Footer /> */}
        </Router>
    </main>
  )
}

export default App


