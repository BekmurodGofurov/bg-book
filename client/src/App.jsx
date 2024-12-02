import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Books from "./pages/Books.jsx"
import Add from "./pages/Add.jsx"
import Update from "./pages/Update.jsx"

import { useState } from 'react'
import './App.css'
import "./style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
