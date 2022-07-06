
import { Hidden } from "@mui/material"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
// import Sidebar from "./Sidebar"

function Layout(props) {
  const {layoutData, children} = props

  useEffect(() => {
    console.log({Props: layoutData})
  }, [])
  
  return (
    <div>
        
        <Header 
          email={layoutData.email}
          phoneNo={layoutData.phoneNo}
        />
        { children }
        <Footer
          description={layoutData.description}
          facebook={layoutData.facebook}
          twitter={layoutData.twitter}
          instagram={layoutData.instagram}
          address={layoutData.address}
          email={layoutData.email}
          phoneNo={layoutData.phoneNo}
        />
    </div>
  )
}

export default Layout

