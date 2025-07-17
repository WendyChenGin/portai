import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage.jsx'
import Macro from './pages/Macro.jsx'
import Main from "./components/layout/Main.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Main />}>
        <Route path="macro" element={<Macro />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App;
