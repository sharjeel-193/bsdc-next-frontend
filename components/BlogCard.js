import React from 'react'
import {Box, Typography, useTheme, useMediaQuery, Button} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

function BlogCard(props) {
    const {img, title, date, category, author, slug} = props
    const theme = useTheme()
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))
    
    return (
        <Box
            width={'100%'}
            backgroundColor={theme.palette.primary.main}
            // border={`1px solid ${theme.palette.primary.main}`}
            borderRadius={5}
            overflow={'hidden'}
            sx={{
                boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
            }}
        >
            <Box
                position={'relative'}
            >
                <Box
                    width={'100%'}
                    height={isSmaller?'200px':'280px'}
                    position={'relative'}
                >
                    <Image src={img} className='service-img' alt="Service" layout={'fill'} />
                </Box>
                <Box
                    position={'absolute'}
                    top={0}
                    right={0}
                    padding={'10px'}
                    backgroundColor={theme.palette.primary.main+'80'}
                    
                >
                    <Typography
                        fontSize={'14px'}
                        color={'white'}
                    >
                        {category}
                    </Typography>
                </Box>
                <Box
                    position={'absolute'}
                    bottom={0}
                    left={0}
                    padding={'10px'}
                    backgroundColor={theme.palette.secondary.main+'80'}
                >
                    <Typography
                        fontSize={'14px'}
                        color={'white'}
                    >
                        {date}
                    </Typography>
                </Box>
            </Box>
            <Box
                position={'relative'}
                height={'100px'}
            >
                <Link href={`/blogs/${slug}`}>
                    <Typography component={'h3'}
                        fontFamily={'Crimson Pro'}
                        fontWeight={600}
                        fontSize={'28px'}
                        lineHeight={'30px'}
                        margin={'10px 10px 0 10px'}
                        color={'white'}
                        sx={{
                            cursor: 'pointer'
                        }}
                    >{title}</Typography>
                </Link>
                <Typography component={'p'}
                    
                    fontFamily={'Exo'}
                    fontWeight={400}
                    fontSize={'12px'}
                    margin={'0 10px'}
                    color={'white'}
                >by <b>{author}</b></Typography>
                <Link href={`/blogs/${slug}`}>
                    <Button variant={'outlined'}
                        sx={{
                            position:'absolute',
                            bottom: 0,
                            right: 0,
                            margin: '10px',
                            borderColor: theme.palette.secondary.dark,
                            color: theme.palette.secondary.dark,
                            '&:hover':{
                                backgroundColor: theme.palette.secondary.dark,
                                borderColor: theme.palette.secondary.dark,
                                color: 'white'
                            }
                        }}
                    >
                        Read More
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default BlogCard