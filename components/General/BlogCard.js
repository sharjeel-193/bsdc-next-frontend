import { Box, Button, Typography } from "@mui/material"
import blog1Photo from '../../public/images/blog1.jpg'
import Image from 'next/image'
import { useTheme } from "@mui/styles"
import {HiChevronDoubleRight} from 'react-icons/hi'
import Link from 'next/link'
import moment from "moment"

function BlogCard(props) {
    const theme  = useTheme()
    const {blog} = props
    const {title, date, slug, img} = props
    const handleLink = (e) => {
        e.preventDefault()
        router.push('/cs-in-nust')
    }
    return (
        <Box 
            borderRadius={5} 
            overflow='hidden' 
            className="blog_item" 
            height={'300px'} 
            width='100%'
            position={'relative'}
            sx={{overflow: 'hidden'}}
            data-aos="zoom-in"
        >
            <Image src={img.url()} alt='' layout="fill" />
            <Box
                width={'100%'}
                height={'300px'}
                position= 'absolute'
                top={0}
                left={0}
                backgroundColor={theme.palette.primary.main}
                sx={{opacity: 0.9, transition: 'all o.3s ease'}}
                display='flex'
                alignItems={'center'}
                justifyContent='center'
                flexDirection={'column'}
                className='blog_item_content'
            >
                <Typography component={'h3'} variant='h5' color={'white'} fontWeight={500} textAlign='center' marginX={4} marginBottom={1}>{title}</Typography>
                <Typography component={'p'} variant='body1' color={theme.palette.secondary.light}>{moment(date).format('Do MMMM YYYY')}</Typography>
                <Link  href={`/blogs/${slug.toString()}`} >
                    <a>
                    <Button className="blog_item_btn" endIcon={<HiChevronDoubleRight />}>Read More </Button>
                    </a>
                </Link>
            </Box>

        </Box>
    )
}

export default BlogCard