// imports
// Style Sheet
import './App.css';
// Components
import {Home, NavigationBar} from "./components";
// Libraries
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

// Comment changed
// Test
// Default React Component including a Router
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    {/* Usual Routes */}
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/projects" element={<h1>Projects</h1>}/>
                    <Route path="/team" element={<h1>Team</h1>}/>
                    <Route path="/story" element={<h1>Story</h1>}/>
                    <Route path="/contact" element={<h1>COntact us</h1>}/>
                    <Route path="/collaboration" element={<h1>Collab</h1>}/>    
		{/* Default: redirect to home page, when a link is invalid */}
                    <Route path="*" element={<Navigate to={"/"} replace={true}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
