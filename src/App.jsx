import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'
import Macro from './pages/Macro.jsx'
// import Fundamental from './pages/Fundamental.jsx'
// import Technical from './pages/Technical.jsx'
import Main from "./components/layout/Main.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Homepage />} />
        <Route path="macro" element={<Macro />} />
        {/* <Route path="fundamental" element={<Fundamental />} />
        <Route path="technical" element={<Technical />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

export default App;
