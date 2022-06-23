import Image from 'next/image'
import Logo from '../public/images/logos/logo-secondary-light.png'
import { useEffect, useState } from "react"
import { AppBar, Box, Container, Hidden, IconButton, List, ListItem, Typography } from "@mui/material"
import { makeStyles, useTheme } from "@mui/styles"
import menu from "./menu"
import { useRouter } from "next/router"
import Link from "next/link"
import {RiMenu3Fill, RiCloseLine} from 'react-icons/ri'

const useStyles = makeStyles(theme => ({
  header_wrapper:{
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    border: 'none',
    boxShadow: 'none',
    padding: '10px 0'
  },
  header_container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  brand_name: {
    fontFamily: 'Glory',
    fontWeight: 500,
    color: theme.palette.secondary.light,
    letterSpacing: -3
  },
  menu_list_desktop:{
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0
  },
  menu_link_desktop:{
    color: theme.palette.secondary.main,
    borderRadius: '2px',
    padding: '10px',
    margin: '0 8px',
    '&:hover':{
      color: 'white'
    }
  },
  menu_link_desktop_active:{
    color: theme.palette.secondary.light,
    borderRadius: '10px',
    padding: '10px',
    margin: '0 8px',
    backgroundColor: theme.palette.primary.dark
  },
  menu_icon:{
    // position: 'absolute',
    // right: '10px',
    color: theme.palette.secondary.light,
    '&:hover':{
      backgroundColor: theme.palette.primary.dark
    }
  }
}))

function Header(props) {
  const {sidebar, onSidebarOpen, onSidebarClose} = props
  const router = useRouter()
  const classes = useStyles()
  const theme = useTheme()
  const [scrollY, setScrollY] = useState();
  const scrollValue = 100
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])
  return (
    <AppBar 
      className={scrollY>scrollValue?'header_wrapper_scroll':'header_wrapper_top'}
      sx={{backgroundColor: scrollY>scrollValue?theme.palette.primary.main:'transparent'}}
    >
      <Container>
        <div className={scrollY>scrollValue?'header_container_scroll':'header_container_top'}>
          <Box display="flex" alignItems="center">
            <Image src={Logo} alt="header-logo" width={50} height={50}/>
            <Typography component='h1' variant='h4' ml={2} className={'brand_name'}>M. Sharjeel Maqsood</Typography>
          </Box>
          <Hidden only={['xs','sm']}>
            <Box display='flex' mt={scrollY>scrollValue?0:2}>
              {menu.map((item, index) => (
                <Link href={item.path} key={index}>
                  <a className={router.pathname==item.path?classes.menu_link_desktop_active:classes.menu_link_desktop}>{item.title}</a>
                </Link>
              ))}
            </Box>
          </Hidden>
          <Hidden only={['md','lg','xl']}>
              <IconButton className={classes.menu_icon} onClick={sidebar?onSidebarClose:onSidebarOpen}>
                {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
              </IconButton>
          </Hidden>
        </div>
      </Container>
    </AppBar>
  )
}
  
export default Header
