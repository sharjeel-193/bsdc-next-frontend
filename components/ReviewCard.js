import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import Image from 'next/image'
import Person1 from '../public/images/person-1.jpg'

function ReviewCard(props) {
    const { img, name, desc } = props;
    const theme = useTheme()

    return (
        <Box 
            backgroundColor={theme.palette.secondary.light}
            width={'600px'}
            maxWidth={'70%'}
            margin={'0 auto'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            padding={'20px 0'}
            borderRadius={5}
            minHeight={'400px'}
        >

            <Box
                width={'100px'}
                height={'100px'}
                position={'relative'}
                borderRadius={'50%'}
                overflow={"hidden"}
            >
                <Image src={img} alt="" layout="fill" />
            </Box>
            <Box
                textAlign="center"
                width={'90%'}
                margin={'10px auto'}
            >
                <Typography 
                    component={'h4'} 
                    fontFamily={'Exo'} 
                    fontSize={'18px'} 
                    fontWeight={600}
                    color={theme.palette.primary.dark}
                >
                    {name}
                </Typography>
                <Typography component={'p'} fontSize={'14px'}>
                    {desc}    
                </Typography>
            </Box>
        </Box>
    )
}

export default ReviewCard