
import { Box, Button, Grid, Typography, useTheme, Container } from '@mui/material'
import React from 'react'
import { urlFor } from '../sanity'
import ServiceCard from '../components/ServiceCard'
import Link from 'next/link'

function ServicesSection(props) {
    const theme  = useTheme()
    const {services} = props
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
                        {services.map((item, index) => (
                            <Grid item xs={12} md={6} lg={4} key={`service-${index}`}>
                                <ServiceCard 
                                    bgImg={(urlFor(item.coverImg)).url()} 
                                    iconImg={(urlFor(item.icon)).url()} 
                                    title={item.title} 
                                    desc={item.introduction} 
                                    slug={item.slug?item.slug.current:''}
                                />
                            </Grid>
                        ))}
                        
                    </Grid>
                    <Box
                        width={'100%'}
                        textAlign={'center'}
                    >
                    <Link href={'/services'}>
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
                    </Link>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default ServicesSection