import { useTheme } from '@mui/styles'
import Particles from 'react-tsparticles'
import { Grid, Box, Container, Typography, Button} from '@mui/material'
import {FaPhoneAlt, FaFacebookF, FaGoogle, FaTwitter} from 'react-icons/fa'
import ContactForm from './ContactForm'

function Hero() {
    const theme = useTheme()
    const contacts = [
        {
            title: 'phone',
            icon: <FaPhoneAlt />,
            desc: '0345 7897172'
        },
        {
            title: 'gmail',
            icon: <FaGoogle />,
            desc: 'm.sharjeel193@gmail.com',
        },
        {
            title: 'facebook',
            icon: <FaFacebookF />,
            desc: '/sharjeel.maqsood193'
        },
        {
            title: 'twitter',
            icon: <FaTwitter />,
            desc: '/sharjeel_4u'
        }
    ]
    return (
        <div className='hero_section_container'>
            <Particles
                id="hero_section_particles"
                options={{
                    background: {
                        color: {
                            value: theme.palette.primary.dark,
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        // detect_on: 'canvas',
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                                parallax: {
                                    enable: false
                                }
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 10,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: theme.palette.secondary.light,
                        },
                        links: {
                            color: theme.palette.secondary.dark,
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 800,
                            },
                            value: 60,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "square",
                        },
                        size: {
                            random: true,
                            value: 3,
                        },
                        },
                        detectRetina: true,
                        fullScreen:{
                            enable: false
                        }
                    
                }}
            >
            </Particles>
            <div className='hero-content-wrapper'>
                <Container>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} xl={6}>
                                <Box display={'flex'} flexDirection='column'>
                                    {contacts.map((item, index) => (
                                        <Box key={index} display='flex' alignItems='center' color={'white'} marginBottom={1}>
                                            <Box>{item.icon}</Box>
                                            <Typography marginLeft={3}>{item.desc}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8} xl={6}>
                                <Box width={'90%'} marginX='auto'>
                                    <ContactForm />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </div>
    )
}

export default Hero