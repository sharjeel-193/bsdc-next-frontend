import { Container, Typography, Box, CircularProgress } from "@mui/material"
import { useTheme } from "@mui/styles";
import {FaReact} from 'react-icons/fa'
import Image from 'next/image'
import reactLogo from '../../public/images/react.png'
import { useEffect } from "react";
import { urlFor } from "../../sanity";

function CircularProgressWithContent(props) {
    const theme = useTheme()
    
    return (
        
        <Box className="box-wrapper" sx={{ position: "relative", display: "inline-flex", textAlign:'center' }} marginBottom={3} marginX={1} data-aos="zoom-in">
            
            <CircularProgress
                variant="determinate"
                value={props.value}
                
                thickness={3}
                {...props}
                className={"foreground_skill_progress"}
                size={90}
            />
            <CircularProgress
                variant="determinate"
                size={90}
                value={100}
                className={"background_skill_progress"}
                thickness={3}
            />
            
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <div className="skill_progress_container">
                    <Image src={props.img} alt='' width={50} height={50}  />
                </div>
            </Box>
            <Box 
                // borderRadius={50}
                position='absolute'
                top={-7}
                width={90}
                zIndex={90}
            >
                <Typography  component={'p'} className='skill_progress_label'>{props.value}%</Typography>
            </Box>
        </Box>
    );
}


function Skills(props) {

    const skills = [
        {
            logo: reactLogo,
            value: 40
        },
        {
            logo: reactLogo,
            value: 50
        },
        {
            logo: reactLogo,
            value: 90
        },
        {
            logo: reactLogo,
            value: 99
        },
        {
            logo: reactLogo,
            value: 20
        },
        {
            logo: reactLogo,
            value: 34
        },
        {
            logo: reactLogo,
            value: 76
        },
        {
            logo: reactLogo,
            value: 40
        },
        {
            logo: reactLogo,
            value: 80
        },
        {
            logo: reactLogo,
            value: 40
        },
        {
            logo: reactLogo,
            value: 40
        },
    ]
    const theme = useTheme()

    const {expertise} = props
    const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
          // If an array already present for key, push it to the array. Else create an array and push the object
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
          return result;
        }, {}); // empty object is the initial value for result object
    };
      
    // const skills = _.groupBy(expertise, (skill) => {
    //     return skill.category.title
    // })
    const groupedSkills = groupBy(expertise,'category')
    // useEffect(() => {
    //     console.log({'Props in Expertise: ': groupedSkills})
    // }, [])

    return (
        <div className="skills_section">
            <Container>
                <Typography variant='h4' component='h3' className="about_page_section_heading">Areas of Expertise</Typography>
                <div className="skills_section_container">
                    {/* {skills.map((item, index) => (
                        <CircularProgressWithContent key={index} img={item.logo} value={item.value} />
                    ))} */}
                    {Object.entries(groupedSkills).map(([key, values], index) => {
                        // console.log(index)
                        return (
                            <Box key={index}>
                                <Typography variant='h5' component='h4' color={theme.palette.primary.main} marginBottom={3}>{key}</Typography>
                                <Box display={'flex'} flexWrap={'wrap'}>
                                {values.map((item, index) => (
                                    <CircularProgressWithContent key={index} img={urlFor(item.logo).url()} value={item.value} />
                                ))}
                                </Box>
                            </Box>
                        )
                    } )}
                </div>
                <Box width={'100px'} backgroundColor='yellow'>
                    {/* <RadialChart /> */}
                </Box>
            </Container>
        </div>
    )
}

export default Skills