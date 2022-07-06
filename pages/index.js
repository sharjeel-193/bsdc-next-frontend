import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Typography, useTheme} from '@mui/material'
import Logo from '../public/images/logo.png'

import FrontHero from '../sections/FrontHero'
import ServicesSection from '../sections/ServicesSection'
import AboutHome from '../sections/AboutHome'
import ReviewsHome from '../sections/ReviewsHome'
import TeamHome from '../sections/TeamHome'
import OffersHome from '../sections/OffersHome'
import ContactForm from '../sections/ContactForm'
import BlogsHome from '../sections/BlogsHome'

export default function Home() {
    const theme = useTheme()
    return (
        <Box
            // sx={{
            //     backgroundColor: theme.palette.filler.vibrant
            // }}
        >
            <FrontHero />
            <ServicesSection />
            <AboutHome />
            <ReviewsHome />
            <TeamHome />
            <OffersHome />
            <ContactForm />
            <BlogsHome />
            {/* <Image src={Logo} width={500} height={500}/>
            <Image src={Logo} width={500} height={500}/>
            <Image src={Logo} width={500} height={500}/>
            <Image src={Logo} width={500} height={500}/>
            <Image src={Logo} width={500} height={500}/>
            <Image src={Logo} width={500} height={500}/>
            <Image src={Logo} width={500} height={500}/>
            <Image src={Logo} width={500} height={500}/> */}
        </Box>
    )
}

// export const getServerSideProps = async () => {
    
// }
