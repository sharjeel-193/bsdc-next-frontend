import { Button, Container, Grid, IconButton, OutlinedInput, Typography, useTheme, Box } from "@mui/material"
import Logo from '../public/images/logo.png'
import Image from "next/image"
import {MdEmail, MdLocationOn, MdPhone} from 'react-icons/md'
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import {useEffect, useState} from 'react'
import Link from "next/link"


function Footer(){
    const theme  = useTheme()
    const [logoSize, setLogoSize] = useState(80);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth>=900){
                setLogoSize(80)
            } else if (window.innerWidth>=600){
                setLogoSize(60)
            } else {
                setLogoSize(50)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })
    return (
        <Box
            width={'100%'}
            backgroundColor={theme.palette.secondary.dark}
            padding={'20px 0'}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            display={'flex'}
                            // alignItems={'center'}
                        >
                            <Box
                                width={logoSize}
                                height={logoSize}
                                position="relative"
                                zIndex={10}
                                sx={{
                                    transition: 'all 0.3s linear'
                                }}
                            >
                                <Image src={Logo} alt="header-logo" layout="fill"/>
                            </Box>
                            <Box>
                                <Typography component={'h1'} sx={{
                                    fontWeight:'500',
                                    lineHeight:'32px',
                                    fontSize: '28px',
                                    marginLeft: '5px',
                                    letterSpacing: '-2px',
                                    color: theme.palette.primary.light
                                }}>
                                    Bright Smile Dental Clinic
                                </Typography>
                                <Typography color={'white'} maxWidth={'300px'} marginLeft={'5px'} fontSize={'14px'} marginTop={'7px'} textAlign={'justify'}>
                                    Bright Smile Dental Clinic is the State of The Art Dental Clinic in the Town Ensuring Quality Treatment. We Focused on Patient's Ease, Good Care and Following sterilization protocols.Our Special Emphasis is on Cosmetic Procedures and Root Canal Treatment
                                </Typography>
                                <Box maxWidth={'300px'} marginLeft={'5px'} display={'flex'} alignItems={'center'} marginTop={'20px'}>
                                    <Link href={'https://www.facebook.com/BrightSmileDentalClinic0'}>
                                        <a target={'_blank'}>
                                            <IconButton
                                                sx={{
                                                    marginRight: '7px',
                                                    color: 'white',
                                                    fontSize: '14px',
                                                    border: '1px solid white',
                                                    '&:hover':{
                                                        backgroundColor: theme.palette.social.facebook
                                                    }
                                                }}
                                            >
                                                <FaFacebookF />
                                            </IconButton>
                                        </a>
                                    </Link>
                                    <IconButton
                                        sx={{
                                            marginRight: '7px',
                                            color: 'white',
                                            fontSize: '14px',
                                            border: '1px solid white',
                                            '&:hover':{
                                                backgroundColor: theme.palette.social.twitter
                                            }
                                        }}
                                    >
                                        <FaTwitter />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            marginRight: '7px',
                                            color: 'white',
                                            fontSize: '14px',
                                            border: '1px solid white',
                                            '&:hover':{
                                                backgroundColor: theme.palette.social.instagram
                                            }
                                        }}
                                    >
                                        <FaInstagram />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            marginRight: '7px',
                                            color: 'white',
                                            fontSize: '14px',
                                            border: '1px solid white',
                                            '&:hover':{
                                                backgroundColor: theme.palette.social.whatsapp
                                            }
                                        }}
                                    >
                                        <FaWhatsapp />
                                    </IconButton>
                                </Box>
                                
                            </Box>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Box mt={3}>
                            <Typography 
                                component={'h4'}
                                color='white'
                                margin={'0 0 20px 0'}
                                fontSize={'24px'}
                            >For Info</Typography>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                color={'white'}
                                fontSize={'20px'}
                                marginBottom={'7px'}
                            >
                                <MdLocationOn />
                                <Typography marginLeft={'10px'}>Main Chowk Khurrianwala Punjab</Typography>
                            </Box>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                color={'white'}
                                fontSize={'20px'}
                                marginBottom={'7px'}
                            >
                                <MdEmail />
                                <Typography marginLeft={'10px'}>brightsmile2223@gmail.com</Typography>
                            </Box>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                color={'white'}
                                fontSize={'20px'}
                                marginBottom={'7px'}
                            >
                                <MdPhone />
                                <Typography marginLeft={'10px'}>0321 8323106</Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


  
  export default Footer

  