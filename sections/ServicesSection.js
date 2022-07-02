
import { Box, Button, Grid, Typography, useTheme, Container } from '@mui/material'
import React from 'react'
import ServiceIcon1 from '../public/images/service-icon-1.png'
import ServiceIcon2 from '../public/images/service-icon-2.png'
import ServiceIcon3 from '../public/images/service-icon-3.png'
import Service1 from '../public/images/service1.jpg'
import Service2 from '../public/images/service2.jpg'
import Service3 from '../public/images/service3.jpg'
import Image from 'next/image'
import ServiceCard from '../components/ServiceCard'

function ServicesSection() {
    const theme  = useTheme()
    return (
        <Box
            width={'100%'}
            padding={'70px 0'}
        >
            <Box
                textAlign={'center'}
            >
                <Typography component={'h3'}
                    color={theme.palette.secondary.main}
                    fontSize={'20px'}
                    margin={0}
                    fontWeight={500}
                >
                    EXCELLENT SERVICES
                </Typography>
                <Typography component={'h2'}
                    color={theme.palette.primary.dark}
                    marginTop={0}
                    fontFamily={'Crimson Pro'}
                    lineHeight={'48px'}
                    fontSize={'56px'}
                    fontWeight={600}
                >
                    What We Provide
                </Typography>
            </Box>
            <Box
                marginTop={5}
                
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service1} iconImg={ServiceIcon1} title={'Dental Implants'} desc={'nif fei'} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service2} iconImg={ServiceIcon2} title={'Teeth Whitening'} desc={'nif fei'} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service3} iconImg={ServiceIcon3} title={'Root Canal'} desc={'nif fei'} />
                        </Grid>
                    </Grid>
                    <Box
                        width={'100%'}
                        textAlign={'center'}
                    >
                    <Button
                        variant='outlined'
                        sx={{
                            color: theme.palette.primary.dark,
                            border: `1px solid ${theme.palette.primary.dark}`,
                            textTransform: 'none',
                            marginTop: '10px',
                            fontFamily: 'Exo',
                            fontSize:'18px',
                            '&:hover':{
                                backgroundColor: theme.palette.primary.dark,
                                color: 'white'
                            }
                        }}
                    >
                        More Services
                    </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default ServicesSection