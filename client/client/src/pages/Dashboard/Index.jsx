import Navbar from '../../components/layout/Navbar.jsx'
import Footer from '../../components/layout/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Index(){


  return(
    <>
    in dashboard 

    <br />
    <Navbar></Navbar>
    <br />
    <Outlet />
    <br />
    <Footer></Footer>
    </>
  )

}

