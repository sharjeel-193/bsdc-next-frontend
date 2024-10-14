import { Box } from '@mui/material'
import React from 'react'
import ContactForm from '../sections/ContactForm'
import ErrorSection from '../sections/ErrorSection'
import { sanityClient } from '../sanity'

function contact(props) {
    const { contactData, error } = props;
    return (
        <Box paddingTop={'100px'}>
            {error ? (
                <Box
                    minHeight={'600px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <ErrorSection errMsg={error} />
                </Box>
            ) : (
                <ContactForm contactFormData={contactData} />
            )}
        </Box>
    )
}

export default contact

export const getServerSideProps = async () => {
    const query = `*[_type=='contactPage'][0]`
    // console.log({Query: query})

   try {
        const data = await sanityClient.fetch(query)
        if(data){
            return {
                props:{
                    contactData: data
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