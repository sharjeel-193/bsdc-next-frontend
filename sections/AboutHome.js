import { Box, Typography, useTheme, Grid, Hidden, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import About1 from '../public/images/about-1.jpg'
import About2 from '../public/images/about-2.jpg'
import About3 from '../public/images/about-3.jpg'
import About4 from '../public/images/about-4.jpg'

function AboutHome() {
    const theme = useTheme()
    const isSmaller = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box
            width={'100%'}
            overflow={'hidden'}
            backgroundColor={theme.palette.filler.dull}
            padding={'80px 0'}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography component={'h3'}
                            color={theme.palette.secondary.dark}
                            fontSize={'20px'}
                            margin={0}
                            fontWeight={500}
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
                        >
                            We Care about your Dental Health
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={'p'} lineHeight={'32px'} fontSize={'18px'} marginTop={isSmaller?'30px':'0px'}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan placerat sem nisi torquent non. Tempus egestas praesent conubia  aliquet habitasse, ante eu ullamcorper neque ultricies risus quam mattis dui tempor nam.
                        </Typography>
                        <Link href={'#'}>
                            <Typography 
                                color={theme.palette.primary.main} 
                                sx={{
                                    cursor: 'pointer',

                                }}>
                                    Read More
                                </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Box
                    width={'100%'}
                    display={'flex'}
                    marginTop={5}
                >
                    <Box
                        width={isSmaller?'100%':'50%'}
                        // backgroundColor={'yellow'}
                        
                    >
                        <Box
                            width={'95%'}
                            marginTop={'5px'}
                            marginLeft={isSmaller?'-30px':'0px'}
                            height={'200px'}
                            position={'relative'}
                        >
                            <Image src={About1} alt="" layout='fill' />
                        </Box>
                        <Box
                            width={'95%'}
                            marginTop={'5px'}
                            marginLeft={isSmaller?'60px':'0px'}
                            height={'300px'}
                            position={'relative'}
                        >
                            <Image src={About2} alt="" layout='fill' />
                        </Box>


                    </Box>
                    <Hidden only={['xs','sm']}>
                    <Box
                        width={'50%'}
                    >
                        
                        <Box
                            width={'95%'}
                            margin={'5px auto'}
                            height={'300px'}
                            position={'relative'}
                            marginBottom={'30px'}
                        >
                            <Image src={About3} alt="" layout='fill' />
                        </Box>
                        <Box
                            width={'95%'}
                            margin={'5px auto'}
                            height={'200px'}
                            position={'relative'}
                        >
                            <Image src={About4} alt="" layout='fill' />
                        </Box>
                    </Box>
                    </Hidden>
                </Box>
            </Container>
        </Box>
    )
}

export default AboutHome