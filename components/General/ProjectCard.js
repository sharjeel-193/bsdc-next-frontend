import Image from 'next/image'
import { useTheme, withStyles } from "@mui/styles"
import {FaGithub, FaGlobe} from 'react-icons/fa'
import Link from "next/link"
import { Chip, Container, Grid, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import project1Photo from '../../public/images/project1.png'

const StyledChip = (props) => {
    const theme = useTheme()
    const {label} = props
    const codingClass = label.toLowerCase().replace(/ /g, '')
    // console.log(codingClass)
    const StyledChip = withStyles({
        root: {
            color: theme.palette.coding[codingClass],
            borderRadius: '5px',
            borderColor: theme.palette.coding[codingClass],
            marginBottom: '5px'
        },
    })(Chip);

    return <StyledChip {...props} />;
}

const StyledIconBtn = (props) => {

    const socialClass = props.title.toLowerCase().replace(/ /g, '')
    const theme = useTheme()
    return (
        <Link href={props.link} passHref>
            <a target={'_blank'}>
                <IconButton sx={{
                    color: theme.palette.social[socialClass], 
                    marginRight: '5px',
                    border: `1px solid ${theme.palette.social[socialClass]}`,
                    '&:hover':{
                        backgroundColor:theme.palette.social[socialClass],
                        color: 'white'
                    }
                }}>
                    {props.icon}
                </IconButton>
            </a>
        </Link>
    )
}

function ProjectCard(props) {
    const theme  = useTheme()
    const {project} = props
    // const {id, title, desc, image, tags, links, category} = project
    // const tags = ['React JS', 'Next JS', 'Material UI', 'SASS']
    const {img, title, desc, links, tags, category, github, website} = props
    return (
        <Box borderRadius={5} overflow='hidden' backgroundColor='yellow' top={0} className={'project_item'} height={'300px'} data-aos="zoom-out">
            <div className='project_item_wrapper'>
                <Image src={img.url()} alt='' layout="fill"  className="project_item_img" />
                <Box 
                    position={'absolute'} 
                    top={0} 
                    right={0} 
                    backgroundColor={theme.palette.primary.main} 
                    padding={1} 
                    // borderRadius={2}
                    sx={{opacity:0.8}}
                >
                    <Typography variant='body2' color={theme.palette.secondary.light}>{category}</Typography>
                </Box>
                <Box
                    position={'absolute'}
                    bottom={0}
                    left={0}
                    paddingY={2}
                    width={'100%'}
                    backgroundColor={theme.palette.primary.dark}
                    sx={{opacity:0.9}}
                    className='project_item_content'
                >   
                    <Typography component='h3' variant='h6' color='white' marginX={2}>{title}</Typography>
                    <Typography component='p' variant='body2' color={theme.palette.secondary.light} marginX={2} marginBottom={2}>{desc}</Typography>
                    <Box
                        className='project_item_info'
                        marginTop={1}
                        marginX={2}
                    >
                        <Box display='flex' flexWrap={'wrap'} className='project_item_tags'>
                            {tags.map((item, index) => (
                                <StyledChip variant="outlined" size="small" label={item} key={index} sx={{marginLeft:'10px'}}/>
                            ))}
                        </Box>
                        <Box marginTop={1} width={'100%'} display='flex' alignItems='center' flexWrap={'wrap'} justifyContent='flex-end'>
                            
                            {github &&
                            <StyledIconBtn icon={<FaGithub />} link={github} title={'github'}></StyledIconBtn>}

                            {website &&
                            <StyledIconBtn icon={<FaGlobe />} link={website} title={'website'}></StyledIconBtn>}

                        </Box>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}

export default ProjectCard