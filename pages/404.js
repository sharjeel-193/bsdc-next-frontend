import React from 'react'
import {Box, Typography} from '@mui/material'
import Image from 'next/image'
import Img404 from '../public/images/error-404.png'
function Error404(){
    return(
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
                    width={'300px'}
                    maxWidth={'80%'}
                    margin={'0 auto'}
                    // height={'300px'}
                    position={'relative'}
                >
                    <Image src={Img404} layout={'responsive'} />
                </Box>
                <Typography
                    fontFamily={'Exo'}
                    fontSize={'28px'}
                    color={'primary'}
                    marginTop={-5}
                >
                    Sorry, this Page Does not Exist Yet!!!
                </Typography>
            </Box>
        </Box>
    )
}

export default Error404