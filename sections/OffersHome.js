import { Box, Typography, useTheme, Grid, Hidden, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import About1 from '../public/images/about-1.jpg'

function OffersHome() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            backgroundColor={theme.palette.filler.vibrant}
            padding={'0px 0'}
        >
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Box
                        width={'80%'}
                        height={'100%'}
                        minHeight={'500px'}
                        margin={'0 auto'}
                        // backgroundColor={'yellow'}
                        display={'flex'}
                        flexDirection={'column'}
                        // alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Typography component={'h3'}
                            color={theme.palette.secondary.dark}
                            fontSize={'20px'}
                            marginTop={7}
                            fontWeight={500}
                            
                        >
                            SPECIAL OFFER
                        </Typography>
                        <Typography component={'h2'}
                            color={theme.palette.primary.dark}
                            marginTop={0}
                            fontFamily={'Crimson Pro'}
                            lineHeight={'48px'}
                            fontSize={'56px'}
                            fontWeight={600}
                        >
                            10% Off on Braces
                        </Typography>
                        <Typography component={'p'} lineHeight={'32px'} fontSize={'18px'} marginTop={'30px'} marginBottom={7}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum pretium penatibus porta phasellus magna mauris sagittis, accumsan placerat sem nisi torquent non. Tempus egestas praesent conubia  aliquet habitasse, ante eu ullamcorper neque ultricies risus quam mattis dui tempor nam.
                        </Typography>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        width={'100%'}
                        height={'100%'}
                        minHeight={'400px'}
                        position={'relative'}
                        top={0}
                        margin={'0'}
                    >
                        <Image src={About1} layout={'fill'} alt={''} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default OffersHome