import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import Image from 'next/image'
import Logo from '../public/images/logo.png'
import {FaRegTimesCircle} from 'react-icons/fa'

function LayouFetchError() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                textAlign={'center'}
                // backgroundColor={'yellow'}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box
                        width={'60px'}
                        height={'60px'}
                        position="relative"
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        <Image src={Logo} alt="header-logo" layout="fill"/>
                    </Box>
                    <Typography component={'h1'} sx={{
                        fontWeight:500,
                        fontSize: '28px',
                        marginLeft: '5px',
                        letterSpacing: '-2px',
                        color: theme.palette.secondary.main,
                        transition: 'all 0.3s linear'
                    }}>
                        Bright Smile Dental Clinic
                    </Typography>
                </Box>
                <Box
                    textAlign={'center'}
                    color={theme.palette.secondary.main}
                    fontSize={'72px'}
                >
                    <FaRegTimesCircle />
                </Box>
                <Typography
                    fontFamily={'Exo'}
                    fontSize={'28px'}
                    color={'primary'}
                >
                    Sorry, We can't Fetch Data from Server right Now
                </Typography>
                <Typography
                    fontFamily={'Exo'}
                    fontSize={'28px'}
                    color={'primary'}
                >
                    Please Try Again Later ...
                </Typography>
            </Box>
        </Box>
    )
}

export default LayouFetchError