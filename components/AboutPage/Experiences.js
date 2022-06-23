import { Typography, Chip } from "@mui/material"
import { useTheme } from "@mui/styles"
import { Box } from "@mui/system"
import {FaBriefcase, FaSquare} from 'react-icons/fa'
import moment from "moment"


function Experiences(props) {
    const theme = useTheme()
    const {jobs} = props
    const experiences = [
        {
            dates: 'Nov 2020 - Jan 2021',
            title: 'Web Developer Intern',
            company: 'Sigma Labs Nust',
            desc: 'Worked on Ai Related Projects'
        },
        {
            dates: 'Nov 2020 - Jan 2021',
            title: 'Web Developer Intern',
            company: 'Sigma Labs Nust',
            desc: 'Worked on Ai Related Projects'
        },
        {
            dates: 'Nov 2020 - Jan 2021',
            title: 'Web Developer Intern',
            company: 'Sigma Labs Nust',
            desc: 'Worked on Ai Related Projects'
        }
    ]
    return (
        <div className="experience_section">
            <Typography variant='h4' component='h3' className="about_page_section_heading">  My Experiences</Typography>
            <div className="about_page_details_container">
                {jobs.map((item, index) => (
                    <div  className="about_page_details_item" key={index} data-aos="zoom-in">
                        <Box display={'flex'} alignItems={'center'}>
                            <FaSquare className="detail_bullet" />
                            <Chip 
                                label={`${moment(item.from).format('MMM YYYY')} - ${moment(item.to).format('MMM YYYY')}`} 
                                variant='outlined' 
                                size="small" 
                                sx={{
                                    borderColor: theme.palette.primary.main, 
                                    backgroundColor: theme.palette.primary.main, 
                                    color: theme.palette.secondary.light
                                }}>

                            </Chip>
                            {/* <Typography variant="body1" component='p' className="details_timeline">{item.dates}</Typography> */}
                        </Box>
                        <Typography variant='h6' component='h4' className="details_institute">{item.comany}</Typography>
                        <Typography variant='body1' component='h5' className="details_title">{item.title}</Typography>
                        <ul className='details_desc'>
                            {item.description.map((desc, index) => (
                                <li key={index} sx={{ display: 'list-item' }}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences