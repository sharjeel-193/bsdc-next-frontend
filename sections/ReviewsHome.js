import React from 'react'
import {Box, Container, IconButton, Typography, useTheme, Button} from '@mui/material'
import Slider from 'react-slick'
import {RiArrowLeftCircleFill, RiArrowRightCircleFill} from 'react-icons/ri'
import ReviewCard from '../components/ReviewCard'
import Person1 from '../public/images/person-1.jpg'
import Person2 from '../public/images/person-2.jpg'
import Image from 'next/image'
import { urlFor } from '../sanity'

function ReviewsHome(props) {
    const theme = useTheme()
    const {reviews} = props
    function CustomNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <Box  onClick={onClick} className={className} style={{...style}} marginRight={'30px'}>
                <IconButton sx={{color: theme.palette.primary.light}}>
                    <RiArrowRightCircleFill />
                </IconButton>
            </Box>
        );
    }
      
    function CustomPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <Box  onClick={onClick} className={className} style={{...style}} >
                <IconButton sx={{color: theme.palette.primary.light}}>
                    <RiArrowLeftCircleFill />
                </IconButton>
            </Box>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />

    };

   

    
    return (
        <Box
            width={'100%'}
            padding={'50px 0'}
            // backgroundColor="yellow"
        >
            <Container>
                <Box
                    textAlign={'center'}
                    marginBottom={'50px'}
                >
                    <Typography component={'h3'}
                        color={theme.palette.secondary.main}
                        fontSize={'20px'}
                        margin={0}
                        fontWeight={500}
                    >
                        COMMITED TO EXCELLENCE
                    </Typography>
                    <Typography component={'h2'}
                        color={theme.palette.primary.dark}
                        marginTop={0}
                        fontFamily={'Crimson Pro'}
                        lineHeight={'48px'}
                        fontSize={'56px'}
                        fontWeight={600}
                    >
                        What Our Clients Say
                    </Typography>
                </Box>
                <Box width={'90%'} margin={'0 auto'} textAlign={'center'}  padding={'0'}>
                <Slider {...settings} sty>
                    {reviews.map((review, index) => (
                        <ReviewCard key={`review-${index}`} 
                            img={(urlFor(review.image)).url()} 
                            name={review.title} 
                            desc={review.description}
                        />
                    ))}
                </Slider>
                </Box>

            </Container>
        </Box>
    )
}

export default ReviewsHome