import React from 'react'
import { Box, Container, Typography, useTheme, Grid } from '@mui/material'
import Service1 from '../public/images/service1.jpg'
import Service2 from '../public/images/service2.jpg'
import Service3 from '../public/images/service3.jpg'
import BlogCard from '../components/BlogCard'
function blogs() {
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
                        Blogs
                    </Typography>
                </Box>
                <Box
                    marginBottom={'20px'}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <BlogCard 
                                title={'New Era of Braces'} 
                                desc={'ldmwk efje fafnme flwnf faelnfle flenfenfnelfne nieojfe fenfen'} 
                                date={'25 June, 2022'}
                                category={'Dentistry'}
                                img={Service2}
                            />    
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <BlogCard 
                                title={'New Era of Braces'} 
                                desc={'ldmwk efje fafnme flwnf faelnfle flenfenfnelfne nieojfe fenfen'} 
                                date={'25 June, 2022'}
                                category={'Dentistry'}
                                img={Service2}
                            />    
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <BlogCard 
                                title={'New Era of Braces'} 
                                desc={'ldmwk efje fafnme flwnf faelnfle flenfenfnelfne nieojfe fenfen'} 
                                date={'25 June, 2022'}
                                category={'Dentistry'}
                                img={Service2}
                            />    
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <BlogCard 
                                title={'New Era of Braces'} 
                                desc={'ldmwk efje fafnme flwnf faelnfle flenfenfnelfne nieojfe fenfen'} 
                                date={'25 June, 2022'}
                                category={'Dentistry'}
                                img={Service2}
                            />    
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <BlogCard 
                                title={'New Era of Braces'} 
                                desc={'ldmwk efje fafnme flwnf faelnfle flenfenfnelfne nieojfe fenfen'} 
                                date={'25 June, 2022'}
                                category={'Dentistry'}
                                img={Service2}
                            />    
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <BlogCard 
                                title={'New Era of Braces'} 
                                desc={'ldmwk efje fafnme flwnf faelnfle flenfenfnelfne nieojfe fenfen'} 
                                date={'25 June, 2022'}
                                category={'Dentistry'}
                                img={Service2}
                            />    
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <BlogCard 
                                title={'New Era of Braces'} 
                                desc={'ldmwk efje fafnme flwnf faelnfle flenfenfnelfne nieojfe fenfen'} 
                                date={'25 June, 2022'}
                                category={'Dentistry'}
                                img={Service2}
                            />    
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default blogs