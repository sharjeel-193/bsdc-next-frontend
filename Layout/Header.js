import Image from 'next/image'
import Logo from '../public/images/logo.png'
import { useEffect, useState } from "react"
import { AppBar, Box, Container, Drawer, Hidden, IconButton, List, ListItem, Typography, useTheme } from "@mui/material"
import menu from "./menu"
import { useRouter } from "next/router"
import Link from "next/link"
import {RiMenu4Fill, RiCloseLine} from 'react-icons/ri'
import {SlideDown} from 'react-slidedown'

function Header(props){
    
    const router = useRouter()
    const theme = useTheme()
    const [scrollY, setScrollY] = useState();
    const scrollValue = 100;
    const [logoSize, setLogoSize] = useState(80);
    const [mblMenu, setMblMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        };
        const handleResize = () => {
            if (window.innerWidth>=900){
                setLogoSize(80)
            } else if (window.innerWidth>=600){
                setLogoSize(60)
            } else {
                setLogoSize(50)
            }
        }
        handleScroll();
        handleResize();
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    })

    const showMblMenu = () => {
        setMblMenu(true)
    }
    const hideMblMenu = () => {
        setMblMenu(false)
    }
    return (
        <Box
            width={'100%'}
            sx={{
                backgroundColor: theme.palette.primary.dark,
                padding: '10px 0'
            }}
        >
            <Container>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    zIndex={99}
                    // backgroundColor={'yellow'}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <Box
                            width={logoSize}
                            height={logoSize}
                            position="relative"
                            sx={{
                                transition: 'all 0.3s linear'
                            }}
                        >
                            <Image src={Logo} alt="header-logo" layout="fill"/>
                        </Box>
                        <Hidden only={['xs']}>
                            <Typography component={'h1'} sx={{
                                fontWeight:'600',
                                fontSize: '32px',
                                marginLeft: '5px',
                                letterSpacing: '-2px',
                                color: theme.palette.secondary.main
                            }}>
                                Bright Smile Dental Clinic
                            </Typography>
                        </Hidden>
                    </Box>
                    <Hidden only={['xs','sm']}>
                        <Box
                            display={'flex'}
                            color={'white'}
                            width={'40%'}
                        >
                            {menu.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    <a className={router.pathname==item.path?'menu_link_desktop_active':'menu_link_desktop'}>{item.title}</a>
                                </Link>
                            ))}
                        </Box>
                    </Hidden>
                    <Hidden only={['md','lg','xl']}>
                        <IconButton className={'menu_icon'} onClick={mblMenu?hideMblMenu:showMblMenu}>
                            {mblMenu ? <RiCloseLine /> : <RiMenu4Fill />}
                        </IconButton>
                    </Hidden>
                </Box>
                
            </Container>
            <Box
                zIndex={99}
            >
                <Hidden only={['md','lg','xl']}>
                    <SlideDown className='slide-overlay'>
                            {mblMenu && 
                            <Box
                                width={'100%'}
                                margin={'10px auto'}
                                color={'white'}
                                backgroundColor={theme.palette.primary.dark}
                                display={'flex'}
                                flexDirection={'column'}
                                // display={mblMenu?'block':'none'}
                                
                            >
                                {menu.map((item, index) => (
                                    <Link href={item.path} key={index}>
                                        <a className={router.pathname==item.path?'menu_link_mobile_active':'menu_link_mobile'}>{item.title}</a>
                                    </Link>
                                ))}
                            </Box>}
                    </SlideDown>
                </Hidden>
                </Box>
        </Box>
    )
}

export default Header
