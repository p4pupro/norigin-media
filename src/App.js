import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { HeaderMenu } from './components/header/headerMenu.component';
import { ShowView } from './components/showView/showView.component';
import { EPGContent } from './components/epgContent/epgContent.component';

export function App() {
  return (
    <BrowserRouter>
    <HeaderMenu />
    <Routes>
      <Route path="/" exact strict element={<EPGContent/>} />
      <Route path="/program/:id" exact element={<ShowView/>} />
    </Routes>
    </BrowserRouter>
  );
}