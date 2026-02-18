import logo from './logo.svg';
import './App.css';
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import Support from './components/Support'
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <ul>
        <li>
          <Link to ='/'>Home</Link>
        </li>
        <li>
          <Link to ='/Contact'>Contact</Link>
        </li>
        <li>
          <Link to ='/Support'>Support</Link>
        </li>
        <li>
          <Link to ='/About'>About</Link>
        </li>
      </ul>
     ROUTERS
       <Routes>
         <Route path='/' element ={<Home/>}></Route>
         <Route path='/Contact' element ={<Contact/>}></Route>
         <Route path='/About' element ={<About/>}></Route>
         <Route path='/Support' element ={<Support/>}></Route>
         <Route path='*' element ={<NotFound/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
