import Image from 'next/image'
import Logo from '../public/images/logo.png'
import { useEffect, useState } from "react"
import { AppBar, Box, Container, Drawer, Hidden, IconButton, List, ListItem, Typography, useMediaQuery, useTheme } from "@mui/material"
import menu from "./menu"
import { useRouter } from "next/router"
import Link from "next/link"
import {RiMenu4Fill, RiCloseLine} from 'react-icons/ri'
import {MdOutlineMail, MdOutlinePhone} from 'react-icons/md'
import {SlideDown} from 'react-slidedown'

function Header(props){
    
    const router = useRouter()
    const theme = useTheme()
    const [scrollY, setScrollY] = useState();
    const scrollValue = 100;
    const [logoSize, setLogoSize] = useState(80);
    const [mblMenu, setMblMenu] = useState(false);
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))
    const {email, phoneNo} = props


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
            position={'fixed'}
            sx={{
                // backgroundColor: scrollY>scrollValue?theme.palette.primary.dark:'transparent',
                // padding: '10px 0',
                zIndex: 99,
                transition: 'all 0.4s linear',
                [theme.breakpoints.down('md')]:{
                    backgroundColor: theme.palette.primary.dark
                }
            }}
        >
            <Box
                backgroundColor={theme.palette.filler.vibrant}
                display={'flex'}
                alignItems={'flex-end'}
                justifyContent={'flex-end'}
                padding={'2px 0'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    paddingRight={'10px'}
                    borderRight={'1px solid black'}
                    fontSize={'14px'}
                >
                    <MdOutlineMail />
                    <Typography marginLeft={'5px'} fontSize={'inherit'}>{email?email:'EMAIL'}</Typography>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    paddingLeft={'10px'}
                    marginRight={'10px'}
                    fontSize={'14px'}
                >
                    <MdOutlinePhone />
                    <Typography marginLeft={'5px'} fontSize={'inherit'}>{phoneNo?phoneNo:'03XX-XXXXXXX'}</Typography>
                </Box>
            </Box>
            <Box
                backgroundColor={scrollY>scrollValue?theme.palette.primary.dark:'transparent'}
            >
                <Container>
                    <Box
                        
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        zIndex={99}
                        padding={'10px 0'}
                        marginBottom={0}
                        // backgroundColor={'yellow'}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                        >
                            <Box
                                width={scrollY>scrollValue?50:logoSize}
                                height={scrollY>scrollValue?50:logoSize}
                                position="relative"
                                sx={{
                                    transition: 'all 0.3s linear'
                                }}
                            >
                                <Image src={Logo} alt="header-logo" layout="fill"/>
                            </Box>
                            {/* <Hidden only={['xs']}>
                                <Typography component={'h1'} sx={{
                                    fontWeight:'600',
                                    fontSize: scrollY>scrollValue?'28px':'32px',
                                    marginLeft: '5px',
                                    letterSpacing: '-2px',
                                    color: theme.palette.secondary.main,
                                    transition: 'all 0.3s linear'
                                }}>
                                    Bright Smile Dental Clinic
                                </Typography>
                            </Hidden> */}
                            <Typography component={'h1'} sx={{
                                fontWeight:isSmaller?500:600,
                                fontSize: isSmaller?'24px':scrollY>scrollValue?'28px':'32px',
                                marginLeft: '5px',
                                letterSpacing: '-2px',
                                color: theme.palette.secondary.main,
                                transition: 'all 0.3s linear'
                            }}>
                                Bright Smile Dental Clinic
                            </Typography>
                        </Box>
                        <Hidden only={['xs','sm']}>
                            <Box
                                display={'flex'}
                                color={scrollY>scrollValue?'white':theme.palette.primary.main}
                                width={'40%'}
                            >
                                {menu.map((item, index) => (
                                    <Link href={item.path} key={index}>
                                        <a className={router.pathname==item.path?'menu_link_desktop_active':'menu_link_desktop'} onClick={hideMblMenu}>{item.title}</a>
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
            </Box>
            <Box
                zIndex={99}
            >
                <Hidden only={['md','lg','xl']}>
                    <SlideDown className='slide-overlay'>
                            {mblMenu && 
                            <Box
                                width={'100%'}
                                margin={'0px auto'}
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
