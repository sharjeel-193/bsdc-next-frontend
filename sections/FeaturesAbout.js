import { Box, Typography, useMediaQuery, useTheme, Container, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Feature1 from '../public/images/feature-1.png'
import Feature2 from '../public/images/feature-2.png'
import Feature3 from '../public/images/feature-3.png'
import Feature4 from '../public/images/feature-4.png'
import Feature5 from '../public/images/feature-5.png'
import FeatureCard from '../components/FeatureCard'

function FeaturesAbout() {
    const theme = useTheme()
    const isSmaller=useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            width={'100%'}
            padding={'70px 0'}
            textAlign={'center'}
        >
            <Typography component={'h3'}
                color={theme.palette.secondary.main}
                fontSize={'20px'}
                fontWeight={500}
                marginTop={isSmaller?'160px':0}
            >
                TREAT YOURSELF WITH
            </Typography>
            <Typography component={'h2'}
                color={theme.palette.primary.dark}
                marginTop={0}
                fontFamily={'Crimson Pro'}
                lineHeight={'48px'}
                fontSize={'56px'}
                fontWeight={600}
            >
                Best Ever Dental Experience
            </Typography>
            <Container>
                <Box
                    marginTop={'70px'}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <FeatureCard icon={Feature1} title={'Advanced Dentsitry'} desc={'Lorem ipsum dolor sit amet, et pri legimus reprehendunt.'} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeatureCard icon={Feature2} title={'High Quality Equipment'} desc={'Lorem ipsum dolor sit amet, et pri legimus reprehendunt.'} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeatureCard icon={Feature3} title={'Comfortable Office'} desc={'Lorem ipsum dolor sit amet, et pri legimus reprehendunt.'} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeatureCard icon={Feature4} title={'Friendly Staff'} desc={'Lorem ipsum dolor sit amet, et pri legimus reprehendunt.'} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeatureCard icon={Feature5} title={'Emergency Care'} desc={'Lorem ipsum dolor sit amet, et pri legimus reprehendunt.'} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default FeaturesAbout