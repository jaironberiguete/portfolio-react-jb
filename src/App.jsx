import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Toaster } from './components/ui/toaster';


function App() {
  return <div >
    <Toaster/>
     <BrowserRouter> 
      <Routes>
        <Route index element={<Home />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </BrowserRouter>
  </div>;
}

export default App;