import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Typography, useTheme} from '@mui/material'
import Logo from '../public/images/logo.png'
import { sanityClient, urlFor } from '../sanity'
import FrontHero from '../sections/FrontHero'
import ServicesSection from '../sections/ServicesSection'
import AboutHome from '../sections/AboutHome'
import ReviewsHome from '../sections/ReviewsHome'
import TeamHome from '../sections/TeamHome'
import OffersHome from '../sections/OffersHome'
import ContactForm from '../sections/ContactForm'
import BlogsHome from '../sections/BlogsHome'
import ErrorSection from '../sections/ErrorSection'
import { useEffect } from 'react'

export default function Home(props) {
    const theme = useTheme()
    const {error, homeData} = props

    useEffect(() => {
        console.log({'Props in Home': props})
    }, [])

    return (
        <Box
        >
            {error?(
                <Box
                    minHeight={'600px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <ErrorSection errMsg={error} />
                </Box>
            ):(
                <Box>
                    <FrontHero />
                    <ServicesSection services={homeData.services} />
                    <AboutHome aboutData={homeData.about} />
                    <ReviewsHome reviews={homeData.reviews}/>
                    <TeamHome teamMembers={homeData.team} />
                    <OffersHome offer={homeData.offer} />
                    <ContactForm />
                    <BlogsHome blogs={homeData.blogs} />
                </Box>
            )}
        </Box>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type=='homePage']
    {
      about->{title, image, description},
      "blogs":blog[]->{
        title,
        slug,
        author->{name},
        mainImage,
        _createdAt,
        "categories":categories[]->{title}
      },
      offer->{title, mainImage, description},
      "reviews":review[]->{title, image, description},
      "services":services[]->{title,slug, coverImg,icon, introduction},
      "team":team[]->{name, image, introduction}
    }[0]`
    // console.log({Query: query})

   try {
        const data = await sanityClient.fetch(query)
        if(data){
            return {
                props:{
                    homeData: data
                }
            }
        } else {
            return {
                props:{
                    error: 'Sorry, There is an error in fetching Data'
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
