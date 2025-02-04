import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import About1 from '../public/images/about-1.jpg'
import About2 from '../public/images/about-2.jpg'
import About3 from '../public/images/about-3.jpg'
import { urlFor } from '../sanity'

function IntroAbout(props) {
    const {aboutData} = props
    const theme = useTheme()
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            width={'100%'}
            position={'relative'}
        >
            <Box
                width={'100%'}
                height={'100%'}
                minHeight={'100vh'}
                position={'relative'}
            >
                <Image src={(urlFor(aboutData.image)).url()} layout={'fill'} objectFit={'cover'} />
            </Box>
            <Box
                width={'100%'}
                height={'100%'}
                position={'absolute'}
                top={0}
                left={0}
                backgroundColor={theme.palette.filler.dull+'CC'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Container>
                    <Grid container spacing={4} >
                        <Grid item xs={12} md={6} lg={7}>
                            <Typography component={'h3'}
                                color={theme.palette.secondary.dark}
                                fontSize={'20px'}
                                fontWeight={500}
                                marginTop={isSmaller?'120px':0}
                                sx={{
                                    transition: 'all 0.3s linear'
                                }}
                            >
                                YOUR SMILE, OUR PASSION, OUR PRIDE
                            </Typography>
                            <Typography component={'h2'}
                                color={theme.palette.primary.dark}
                                marginTop={0}
                                fontFamily={'Crimson Pro'}
                                lineHeight={'48px'}
                                fontSize={'56px'}
                                fontWeight={600}
                                sx={{
                                    transition: 'all 0.3s linear'
                                }}
                            >
                                {aboutData.title}
                            </Typography>
                            <Typography component={'p'} lineHeight={'32px'} fontSize={'18px'} marginTop={'30px'} textAlign={'justify'}>
                                {aboutData.description}    
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={5}>
                            <Box
                                width={'100%'}
                                height={'100%'}
                                textAlign={'center'}
                                // backgroundColor={'yellow'}
                                position={'relative'}
                                display={'flex'}
                                justifyContent={'center'}
                            >
                                <Box
                                    width={'264px'}
                                    position={'relative'}
                                    sx={{
                                        transition: 'all 0.3s linear'
                                    }}
                                    // backgroundColor={'yellow'}
                                >
                                    <Box
                                        width={'240px'}
                                        height={'240px'}
                                        position={'absolute'}
                                        top={0}
                                        left={0}
                                        borderRadius={3}
                                        overflow={'hidden'}
                                        zIndex={95}
                                    >
                                        <Image src={(urlFor(aboutData.image)).url()} objectFit={'cover'} layout={'fill'} />
                                    </Box>
                                    <Box
                                        width={'240px'}
                                        height={'240px'}
                                        position={'absolute'}
                                        zIndex={85}
                                        backgroundColor={theme.palette.primary.light+'50'}
                                        top={24}
                                        left={24}
                                        borderRadius={3}
                                    >

                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default IntroAbout