import { Box, ImageList, ImageListItem, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import About1 from '../public/images/about-1.jpg'
import About2 from '../public/images/about-2.jpg'
import About3 from '../public/images/about-3.jpg'
import About4 from '../public/images/about-4.jpg'
import Service1 from '../public/images/service1.jpg'
import Service2 from '../public/images/service2.jpg'
import Person1 from '../public/images/person-1.jpg'
import Person2 from '../public/images/person-2.jpg'
import Image from 'next/image'

function GalleryAbout() {
    const theme = useTheme()
    const galleryImgs = [About1, About2, About3, About4, Person1, Service1, Service2, Person2]
    return (
        <Box
            width={'100%'}
            padding={'70px 0'}
            textAlign={'center'}
        >
            <Typography component={'h3'}
                color={theme.palette.secondary.main}
                fontSize={'20px'}
                fontWeight={500}
                // marginTop={isSmaller?'160px':0}
            >
                HAVE A LOOK AT
            </Typography>
            <Typography component={'h2'}
                color={theme.palette.primary.dark}
                marginTop={0}
                fontFamily={'Crimson Pro'}
                lineHeight={'48px'}
                fontSize={'56px'}
                fontWeight={600}
            >
                Smile Gallery
            </Typography>
            <Container>
                <ImageList variant={'masonry'} cols={3} gap={8}>
                {galleryImgs.map((item, index) => (
                    <ImageListItem key={index}>
                        {/* <img
                            src={`${item}?w=248&fit=crop&auto=format`}
                            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={'ddi'}
                            loading="lazy"
                        /> */}
                        <img
                            src={item}
                            srcSet={item}
                            alt={'ddi'}
                            loading="lazy"
                        />
                        {/* <Box
                            width={'100%'}
                            height={'300px'}
                        >
                            <Image src={item} layout='responsive' />
                        </Box> */}
                    </ImageListItem>
                ))}
                </ImageList>
            </Container>

        </Box>
    )
}

export default GalleryAbout