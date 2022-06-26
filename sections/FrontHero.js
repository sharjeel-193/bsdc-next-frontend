import React, { useCallback, useEffect } from 'react'
import {Box, IconButton, Typography, useTheme, useMediaQuery, Button} from '@mui/material'
import Image from 'next/image'
import Logo from '../public/images/logo.png'
import Hero1 from '../public/images/hero-1.png'
import Hero2 from '../public/images/hero-2.png'
import {useState} from 'react'
import {RiArrowLeftSFill, RiArrowRightSFill} from 'react-icons/ri'

function FrontHero() {
    const [currentSlide, setCurrentSlide] = useState(2)
    const totalSlides = 2

    const theme  = useTheme()
    const isResp = useMediaQuery(theme.breakpoints.down('lg'))
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))

    
    useEffect (() => {
        const showSlides = async () => {
            if(currentSlide < totalSlides){
                setCurrentSlide(currentSlide + 1)
                // console.log({'Current Slide UP': currentSlide})
                
            } else {
                setCurrentSlide(1)
                // console.log({'Current Slide to 1': currentSlide})
            }
        }
        const interval = setInterval(() => {
            showSlides()
        }, 20000)
        return () => clearInterval(interval)
    })
    
    useEffect(() => {
        // console.log({'Current Updated: ': currentSlide})
    }, [currentSlide])

    const showNextSlide = () => {
        if(currentSlide===totalSlides){
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    const showPrevSlide = () => {
        if(currentSlide==1){
            setCurrentSlide(totalSlides)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }
    
    return (
        <Box>
            <Box
                width={'100%'}
                height={'100vh'}

            >
                {/* /** ITEM 1 */ }
                <Box
                    position={'absolute'}
                    visibility={currentSlide==1?'visible':'hidden'}
                    width={'100%'}
                    height={'100%'}
                    sx={{
                        transition: '0.5s linear',
                        opacity: currentSlide==1?1:0,
                        backgroundImage: `linear-gradient(180deg,white, ${theme.palette.primary.light});`
                    }}
                >
                    <Box
                        width={isResp?'500px':'700px'}
                        maxWidth={'90%'}
                        height={isSmaller?'300px':isResp?'450px':'550px'}
                        position="absolute"
                        bottom={0}
                        right={0}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        <Image src={Hero1} alt="Hero1" layout='fill' />
                        
                    </Box>
                    <Box
                        position={'absolute'}
                        marginTop={isResp?'120px':'200px'}
                        marginLeft={isResp?'50px':'120px'}
                        width={isResp?'300px':'400px'}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        <Typography 
                            component={'h1'} 
                            fontFamily={'Crimson Pro'} 
                            color={theme.palette.primary.dark}
                            fontSize={isResp?44:56}
                            letterSpacing={-1.5}
                            lineHeight={isResp?'44px':'56px'}
                            
                        >A Bright Smile Ensures a Bright Life &#128512;</Typography>
                        <Typography color={theme.palette.primary.dark} marginTop={'10px'}>
                            Welcome to Bright Smile Dental Clinic and let us make your Smile Bright
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                color: theme.palette.primary.dark,
                                border: `1px solid ${theme.palette.primary.dark}`,
                                textTransform: 'none',
                                marginTop: '10px',
                                fontFamily: 'Exo',
                                '&:hover':{
                                    backgroundColor: theme.palette.primary.dark,
                                    color: 'white'
                                }
                            }}
                        >
                            Make an Appointment
                        </Button>
                    </Box>
                </Box>
                <Box
                    position={'absolute'}
                    height={'100%'}
                    width={'100%'}
                    visibility={currentSlide==2?'visible':'hidden'}
                    sx={{
                        transition: '0.5s linear',
                        opacity: currentSlide==2?1:0,
                        backgroundImage: `linear-gradient(180deg,white, ${theme.palette.secondary.light});`
                    }}
                >
                    <Box
                        width={isResp?'500px':'700px'}
                        maxWidth={'90%'}
                        height={isSmaller?'300px':isResp?'450px':'550px'}
                        position="absolute"
                        bottom={0}
                        right={0}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        <Image src={Hero2} alt="Hero1" layout='fill' />
                        
                    </Box>
                    <Box
                        position={'absolute'}
                        marginTop={isResp?'120px':'200px'}
                        marginLeft={isResp?'50px':'120px'}
                        width={isResp?'300px':'400px'}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        <Typography 
                            component={'h1'} 
                            fontFamily={'Crimson Pro'} 
                            color={theme.palette.secondary.dark}
                            fontSize={isResp?44:56}
                            letterSpacing={-1.5}
                            lineHeight={isResp?'40px':'52px'}
                            
                        >Catering to all your dental needs and Desires</Typography>
                        <Typography color={theme.palette.secondary.dark} marginTop={'10px'}>
                            We provide you world class facilities using modern tools
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                color: theme.palette.secondary.dark,
                                border: `1px solid ${theme.palette.secondary.dark}`,
                                textTransform: 'none',
                                marginTop: '10px',
                                fontFamily: 'Exo',
                                '&:hover':{
                                    backgroundColor: theme.palette.secondary.dark,
                                    color: 'white'
                                }
                            }}
                        >
                            Have a Look at Services
                        </Button>
                    </Box>
                </Box>
                <Box
                    position={'absolute'}
                    top={'50%'}
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        sx={{
                            marginLeft: '10px',
                            opacity: 0,
                            '&:hover':{
                                opacity: 1,
                            }
                        }}
                        onClick={showPrevSlide}
                    >
                        <RiArrowLeftSFill />
                    </IconButton>
                    <IconButton
                        sx={{
                            marginRight: '10px',
                            opacity: 0,
                            '&:hover':{
                                opacity: 1,
                            }
                        }}
                        onClick={showNextSlide}
                    >
                        <RiArrowRightSFill />
                    </IconButton>
                </Box>
            </Box>
            
        </Box>
    )
}

export default FrontHero
