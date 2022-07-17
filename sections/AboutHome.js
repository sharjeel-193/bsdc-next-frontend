import { Box, Typography, useTheme, Grid, Hidden, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {urlFor} from '../sanity'

function AboutHome(props) {
    const theme = useTheme()
    const isSmaller = useMediaQuery(theme.breakpoints.down('md'))
    const {aboutData} = props
    useEffect(() => {
        console.log({'Props in About Home': props})
    })
    return (
        <Box
            width={'100%'}
            backgroundColor={theme.palette.filler.dull}
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
                            color={theme.palette.secondary.main}
                            fontSize={'20px'}
                            marginTop={7}
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
                            {aboutData.title}
                        </Typography>
                        <Typography component={'p'} lineHeight={'32px'} fontSize={'18px'} marginTop={'30px'}>
                            {aboutData.description}    
                        </Typography>
                        <Link href={'/about'}>
                            <Typography 
                                color={theme.palette.primary.main} 
                                marginBottom={7}
                                sx={{
                                    cursor: 'pointer',

                                }}>
                                    Read More
                                </Typography>
                        </Link>
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
                        <Image src={(urlFor(aboutData.image)).url()} layout={'fill'} alt={''} objectFit={'cover'} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutHome