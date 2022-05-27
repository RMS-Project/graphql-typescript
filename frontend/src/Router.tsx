import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Login } from "./pages/login"
import { Account } from "./pages/account"

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </Router>
  )
}