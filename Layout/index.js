
import { Hidden } from "@mui/material"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false)
  
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  const toggleSidebarOpen = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <div>
        
        <Hidden only={['md','lg','xl']}>
          <Sidebar open={openSidebar} onClose={handleSidebarClose} />
        </Hidden>
        <Header onSidebarOpen={handleSidebarOpen} onSidebarClose={handleSidebarClose} sidebar={openSidebar}/>
        { children }
        <Footer />
    </div>
  )
}

export default Layout

