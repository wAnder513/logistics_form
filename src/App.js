import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import { Header } from './components/Header/Header'
import { BlogPage } from './containers/BlogPage/BlogPage'

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  )
  const [userName, setUserName] = useState(localStorage.getItem('userName'))

  return (
    <Router>
      <div className="App">
        <Header
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <main>
          <BlogPage />
        </main>
      </div>
    </Router>
  )
}
