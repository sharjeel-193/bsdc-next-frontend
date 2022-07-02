import { Box, Container, Typography, useTheme, Grid } from '@mui/material'
import React from 'react'
import ServiceIcon1 from '../public/images/service-icon-1.png'
import ServiceIcon2 from '../public/images/service-icon-2.png'
import ServiceIcon3 from '../public/images/service-icon-3.png'
import Service1 from '../public/images/service1.jpg'
import Service2 from '../public/images/service2.jpg'
import Service3 from '../public/images/service3.jpg'
import ServiceCard from '../components/ServiceCard'

function services() {
    const theme = useTheme()
    return (
        <Box
            padding={'100px 0'}
        >
            <Container>
                <Box>
                    <Typography
                        component={'h2'}
                        color={theme.palette.primary.dark}
                        margin={'70px 0'}
                        fontFamily={'Crimson Pro'}
                        lineHeight={'48px'}
                        fontSize={'56px'}
                        fontWeight={600}
                        textAlign={'left'}
                    >
                        Services
                    </Typography>
                </Box>
                <Box
                    marginBottom={'30px'}
                >
                    <Typography
                        component={'h3'}
                        color={theme.palette.secondary.dark}
                        margin={'0 0 30px 0'}
                        fontFamily={'Exo'}
                        lineHeight={'40px'}
                        fontSize={'32px'}
                        fontWeight={500}
                        textAlign={'left'}
                    >
                        Cosmetic Dentistry
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service1} iconImg={ServiceIcon1} title={'Dental Implants'} desc={'Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan'} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service2} iconImg={ServiceIcon2} title={'Teeth Whitening'} desc={'Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan'} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service3} iconImg={ServiceIcon3} title={'Root Canal'} desc={'Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan'} />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    marginBottom={'20px'}
                >
                    <Typography
                        component={'h3'}
                        color={theme.palette.secondary.dark}
                        margin={'0 0 30px 0'}
                        fontFamily={'Exo'}
                        lineHeight={'40px'}
                        fontSize={'32px'}
                        fontWeight={500}
                        textAlign={'left'}
                    >
                        Cosmetic Dentistry
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service1} iconImg={ServiceIcon1} title={'Dental Implants'} desc={'Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan'} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service2} iconImg={ServiceIcon2} title={'Teeth Whitening'} desc={'Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan'} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ServiceCard bgImg={Service3} iconImg={ServiceIcon3} title={'Root Canal'} desc={'Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan'} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default services