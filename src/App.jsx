import { BrowserRouter, Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import {NewsPage} from './pages/NewsPage/NewsPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { SignupPage } from './pages/SignupPage/SignupPage'
import { MyPage } from './pages/MyPage/Mypage'
import { AllJobsPage } from './pages/AllJobsPage/AllJobsPage'
import { AnnoncePage } from './pages/AnnoncePage/AnnoncePage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
           <Route path='/nyheder' element={<NewsPage/>}></Route>
           <Route path='/login' element={<LoginPage/>}></Route>
           <Route path='/opret' element={<SignupPage/>}></Route>
           <Route path='/minside' element={<MyPage/>}></Route>
           <Route path ='/allejobs' element={<AllJobsPage/>}></Route>
           <Route path='/annoncer' element={<AnnoncePage/>}></Route>
           <Route path='/rediger' element={<ProfilePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
