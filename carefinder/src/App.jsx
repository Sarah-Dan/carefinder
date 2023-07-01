// Date: 06/13/2023
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components';
import { Home, About, FindHospitals, Profile, SignIn, SignUp } from './pages';
import { AuthContextProvider } from './contexts/AuthContext';
//  import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
 
  return (
    <>
      {/* navbar */}
      <NavBar />

      {/* routes */}
      <AuthContextProvider>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':id' element={<SignIn />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/find-hospitals' element={<FindHospitals />} />
          <Route path='/signup' element={<SignUp />} />
        {/* protected route */}
          <Route path='/profile' element={
              // <ProtectedRoutes>
                <Profile />
              // </ProtectedRoutes>
            } 
          />
      </Routes>
      </AuthContextProvider>

      {/* footer */}
      {/* <Footer /> */}
    </>
  )
}

export default App;
