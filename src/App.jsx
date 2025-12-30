import { BrowserRouter, Route, Routes } from 'react-router'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import {Toaster} from 'sonner'
import HomePage from './pages/HomePage'
import  Layout  from './components/Layout.jsx'


function App() {
  return (
    <>
    <Toaster richColors/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='signin' element={<SigninPage/>}/>
          <Route path='signup' element={<SignupPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
