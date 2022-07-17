import { Box } from '@mui/material'
import { sanityClient, urlFor } from '../sanity'
import React from 'react'
import FeaturesAbout from '../sections/FeaturesAbout'
import GalleryAbout from '../sections/GalleryAbout'
import IntroAbout from '../sections/IntroAbout'
import TeamHome from '../sections/TeamHome'
import ErrorSection from '../sections/ErrorSection'

function about(props) {
    const {aboutData, error} = props
    return (
        <Box>
            {error?(
                <Box
                    minHeight={'600px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <ErrorSection errMsg={error} />
                </Box>
            ):(
                <Box>
                    <IntroAbout aboutData={aboutData.about} />
                    <FeaturesAbout features={aboutData.features} />
                    <TeamHome teamMembers={aboutData.team} />
                    <GalleryAbout images={aboutData.gallery} />
                </Box>
            )}
        </Box>
    )
}

export default about

export const getServerSideProps = async () => {
    const query = `*[_type=='aboutPage']
    {
      about->{title, image, description},
      gallery,
      "features":features[]->{title, icon, description},
      "team":team[]->{name, image, introduction},
      
    }[0]`
    // console.log({Query: query})

   try {
        const data = await sanityClient.fetch(query)
        if(data){
            return {
                props:{
                    aboutData: data
                }
            }
        } else {
            return {
                props:{
                    error: 'Sorry, There is an error in fetching Data'
                }
            }
        }
   } catch (error) {
        return {
            props:{
                error: error.message
            }
        }
   }
}