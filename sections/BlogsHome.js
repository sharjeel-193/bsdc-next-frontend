import { Box, Button, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Service1 from '../public/images/service1.jpg'
import Service2 from '../public/images/service2.jpg'
import Service3 from '../public/images/service3.jpg'
import Image from 'next/image'
import { Container } from '@mui/system'
import BlogCard from '../components/BlogCard'

function BlogsHome() {
    const theme  = useTheme()
    
    return (
        <Box
            width={'100%'}
            padding={'70px 0'}
            backgroundColor={theme.palette.filler.dull}
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
                    DENTAL PRACTICES
                </Typography>
                <Typography component={'h2'}
                    color={theme.palette.primary.dark}
                    marginTop={0}
                    fontFamily={'Crimson Pro'}
                    lineHeight={'48px'}
                    fontSize={'56px'}
                    fontWeight={600}
                >
                    Read Latest Blogs
                </Typography>
            </Box>
            <Box
                marginTop={5}
                
            >
                <Container>
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
                        More Blogs
                    </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default BlogsHome