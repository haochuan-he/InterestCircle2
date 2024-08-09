/*
 * @Author: HHC
 * @Date: 2024-08-07 14:15:47
 * @LastEditTime: 2024-08-09 13:57:35
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Interests from './pages/Interests';
import InterestDetail from './pages/InterestDetail.jsx';
import WelcomeAndLogin from './pages/WelcomeAndLogin.jsx';
import Register from './pages/Register.jsx';

import './input.css'//必须添加这个使得TailwindCss work

export default function App() {
  return (
    <>
      {/* <OriginalApp /> */}
      <AppRouter />
      {/* <Home /> */}
    </>
  )


}

function AppRouter() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<WelcomeAndLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/interest/:id" element={<InterestDetail />} />
      </Routes>
    </Router>
  );
}


function OriginalApp() {//特别注意逆天bug，只有首字母大写才能被作为组件使用！！！
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}
