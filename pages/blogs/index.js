import React from 'react'
import { Box, Container, Typography, useTheme, Grid } from '@mui/material'
import Service2 from '../../public/images/service2.jpg'
import BlogCard from '../../components/BlogCard'
import ErrorSection from '../../sections/ErrorSection'
import { sanityClient, urlFor } from '../../sanity'
import moment from 'moment'
function blogs(props) {
    const theme = useTheme()
    const {blogs, error} = props
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
                {error?(
                    <ErrorSection errMsg={error} />
                ):(
                    <Box
                        marginBottom={'20px'}
                    >
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
                    </Box>
                )}
            </Container>
        </Box>
    )
}

export default blogs

export const getServerSideProps = async () => {
    const query = `*[_type=='post']
    {
      title,
      slug,
      author->{name},
      mainImage,
      _createdAt,
      "categories":categories[]->{title},
    }`

    try {
        const data = await sanityClient.fetch(query)
        if(data.length){
            return {
                props:{
                    blogs: data
                }
            }
        } else {
            return {
                props:{
                    error: 'Sorry, Blogs are yet to be added'
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