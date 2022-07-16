import { Box, Container, Typography, useTheme, Grid } from '@mui/material'
import React, { useEffect } from 'react'
// import ServiceIcon1 from '../public/images/service-icon-1.png'
// import ServiceIcon2 from '../public/images/service-icon-2.png'
// import ServiceIcon3 from '../public/images/service-icon-3.png'
// import Service1 from '../public/images/service1.jpg'
// import Service2 from '../public/images/service2.jpg'
// import Service3 from '../public/images/service3.jpg'
import ServiceCard from '../../components/ServiceCard'
import { sanityClient, urlFor } from '../../sanity'
import ErrorSection from '../../sections/ErrorSection'

function services(props) {
    const theme = useTheme()
    const {error, services} = props
    useEffect(() => {
        console.log({'Props in Services': props})
    }, [])
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
                {error?(
                    <ErrorSection errMsg={error} />
                ):(
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
                    </Box>
                )}
                
            </Container>
        </Box>
    )
}

export default services

export const getServerSideProps = async () => {
    const query = `*[_type=='service']{title, coverImg, icon, introduction, slug}`
    try {
        const data = await sanityClient.fetch(query)
        if(data.length){
            return {
                props:{
                    services: data
                }
            }
        } else {
            return {
                props:{
                    error: 'Sorry, Services are yet to be added'
                }
            }
        }
        
    } catch (error) {
        return {
            props:{
                error: error.message
            }
        }
    }
}