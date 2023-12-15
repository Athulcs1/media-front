
        import { Route, Routes } from 'react-router-dom';
        import './App.css';
        import Footer from './Componets/Footer';
        import Header from './Componets/Header';
        import Landing from './pages/Landing';
        import Home from './pages/Home';
import Wacthistory from './pages/Watchhistory';

        function App() {
          return (
            <>
            <Header/>
            <div className='container m-5'>
              <Routes>
              
                <Route path='/' element={<Landing/>}/>
                <Route  path='/home' element={ <Home/>}/>
                <Route path='/watchhistory' element={<Wacthistory/>}/>

              </Routes>
            </div>

            <Footer/>
            </>
          );
        }

        export default App;
