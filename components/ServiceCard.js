import React from 'react'
import {Box, Typography, useMediaQuery, useTheme} from '@mui/material'
import Image from 'next/image'

function ServiceCard(props) {
    const {bgImg, iconImg, title, desc} = props
    const theme = useTheme()
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            width={'100%'}
            // border={'1px solid black'}
            borderRadius={5}
            overflow={'hidden'}
            sx={{
                transition: 'all 0.3s linear',
                '&:hover':{
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                }
            }}
        >
            <Box
                width={'100%'}
                height={isSmaller?'200px':'280px'}
                position={'relative'}
                zIndex={80}
                
            >
                <Image src={bgImg} className='service-img' alt="Service" layout={'fill'} />
            </Box>
            
            
            <Box
                width={'100%'}
                // backgroundColor={theme.palette.primary.light}
            >
                
                <Box
                    width={'90%'}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                    marginTop={0}
                    padding={'10px 0'}
                >
                    
                    <Box
                        display={'flex'}
                        // alignItems='center'
                    >
                        <Box
                            backgroundColor="white"
                            padding={'10px'}
                            width={'60px'}
                            height={'60px'}
                            zIndex={97}
                            marginTop={-3}
                            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
                        >
                            <Box
                                width={'100%'}
                                height={'100%'}
                                position={'relative'}
                                zIndex={98}
                                className='service-img'
                                
                            >
                                <Image  src={iconImg} alt="service icon" layout={'fill'} />
                            </Box>
                        </Box>

                        <Typography component={'h3'}
                            fontFamily={'Crimson Pro'}
                            fontWeight={600}
                            fontSize={'28px'}
                            marginLeft={'10px'}
                            color={theme.palette.primary.dark}
                        >{title}</Typography>
                    </Box>
                    <Typography component={'p'}
                        height={'60px'}
                        fontFamily={'Exo'}
                        fontWeight={400}
                        fontSize={'14px'}
                        color={theme.palette.primary.main}
                    >{desc}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ServiceCard