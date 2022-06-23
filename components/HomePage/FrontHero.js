import Image from 'next/image'
import Particles from 'react-tsparticles'
import theme from '../../theme'
import myPhoto from '../../public/images/person-bg.png'
import { Grid, Box, Container, Typography, Button} from '@mui/material'
import { makeStyles } from '@mui/styles'
import {Typewriter} from 'react-simple-typewriter'
import Link from 'next/link'
// import { Bounce } from 'react-reveal'

const useStyles = makeStyles(theme => ({
    hero_content: {
        width: '100%',
        backgroundColor: theme.palette.secondary.main,

    },
    hero_greeting:{
        color: theme.palette.secondary.light,

    }
}))

function FrontHero() {
    const classes = useStyles()
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
                <div className='hero-content-container'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7} xl={6}>
                            <div className='hero_content'>
                                <div className='hero_content_item' data-aos="fade-up-right">
                                    <Typography component='p' variant='h5' className='hero_greeting'>Hello, I am </Typography>
                                    <Typography component='h1' variant='h2' className='hero_title'>M. Sharjeel Maqsood</Typography>
                                    <Typography component='h2' variant='h6' className='hero_subtitle'>
                                        <Typewriter
                                            words={['MERN Stack Developer', 'Front End Developer', 'Freelancer', 'A Student Mentor']}
                                            loop={true}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={2000}
                                        />
                                    </Typography>
                                    <div className='hero_btn_area'>
                                        <Link href='/contact'passHref>
                                            <Button className='hero_contact_btn'>Contact Me</Button>
                                        </Link>
                                        <Link href={'https://drive.google.com/drive/folders/1JRuq3iHRMBr3kjrud-erbzSyeCLtzm_3?usp=sharing'} passHref>
                                            <a target={'_blank'}>
                                                <Button className='hero_resume_btn'>My Resume</Button>
                                            </a>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5} xl={6}>
                            <div className='hero_content'>
                                <div className='hero_img' data-aos="fade-down-left">
                                    <Image src={myPhoto} alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default FrontHero