import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import Image from 'next/image'

function TeamCard(props) {
    const {img, name, qualifications} = props
    const theme = useTheme()
    return (
        <Box
            width={'80%'}
            margin={'0 auto'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                width={'200px'}
                height={'200px'}
                position={'relative'}
                borderRadius={'50%'}
                overflow={'hidden'}
            >   
                <Image src={img} alt="" layout={'fill'} />
            </Box>
            <Typography 
                component={'h3'}
                marginTop={'15px'}
                fontFamily={'Crimson Pro'}
                fontWeight={600}
                fontSize={'28px'}
                color={theme.palette.primary.dark}
            >
                {name}
            </Typography>
            <Typography component={'p'}
                height={'60px'}
                fontFamily={'Exo'}
                fontWeight={400}
                fontSize={'18px'}
                textAlign={'center'}
            >
                {qualifications}
            </Typography>
        </Box>
    )
}

export default TeamCard