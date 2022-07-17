import { Box, Button, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { Container } from '@mui/system'
import BlogCard from '../components/BlogCard'
import moment from 'moment'
import {urlFor} from '../sanity'
import Link from 'next/link'

function BlogsHome(props) {
    const theme  = useTheme()
    const {blogs} = props
    
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
                        {blogs.map((item, index) => (
                            <Grid item xs={12} md={6} lg={4} key={`blog-${index}`}>
                                <BlogCard 
                                    title={item.title}
                                    author={item.author.name}
                                    date={moment(item._createdAt).format('MMMM Do YYYY')}
                                    category={item.categories[0].title}
                                    img={(urlFor(item.mainImage).url())}
                                    slug={item.slug?item.slug.current:''}
                                />    
                            </Grid>
                        ))}
                        
                    </Grid>
                    <Box
                        width={'100%'}
                        textAlign={'center'}
                    >
                    <Link href={'/blogs'}>
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
                    </Link>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default BlogsHome