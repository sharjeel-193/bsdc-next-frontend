import { Container, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'
import React from 'react'
import Particles from 'react-tsparticles'


function PageBanner(props) {
    const {pageTitle} = props
    const theme = useTheme()
    return (
        <div className='general_section_banner'>
            <Particles
                id="banner_section_particles"
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
            <div className='banner_wrapper'>
                <Container>
                    <div className='banner_container'>
                        <Typography variant='h2' component='h2' className='banner_title'>{pageTitle}</Typography>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default PageBanner