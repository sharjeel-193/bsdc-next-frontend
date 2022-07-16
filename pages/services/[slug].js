import { Box, Container, useTheme, Typography, useMediaQuery } from "@mui/material"
import Image from 'next/image'
import { useRouter } from "next/router"
import { sanityClient, urlFor } from "../../sanity"
import SanityBlockContent from "@sanity/block-content-to-react"


function serviceSingle(props){

    const theme = useTheme()
    const {currService} = props
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
        },
    }
    return (
        <Box>
            <Box
                width={'100%'}
                height={isSmaller?'300px':(isMed?'400px':'500px')}
                zIndex={80}
            >
                <Box
                    width={'100%'}
                    height={'100%'}
                    position={'relative'}
                    
                >
                    <Image src={(urlFor(currService.coverImg)).url()} layout={'fill'} objectFit={'cover'} />
                    
                </Box>
                <Box
                    width={'100%'}
                    height={isSmaller?'300px':(isMed?'400px':'500px')}
                    position={'absolute'}
                    top={0}
                    backgroundColor={theme.palette.secondary.dark}
                    // backgroundColor={theme.palette.filler.vibrant}
                    sx={{
                        opacity: 0.6
                    }}
                >

                </Box>
            </Box>
            <Container>
                <Box
                    display={'flex'}
                    zIndex={97}
                    flexDirection={isMed?'column':'row'}
                    justifyContent={isMed?'center':'flex-start'}
                    alignItems={isMed?'center':'flex-start'}
                    sx={{
                        transition: 'all 0.3s linear'
                    }}
                >
                    <Box
                        color={'white'}
                        backgroundColor={'white'}
                        padding={isSmaller?'10px':(isMed?'14px':'20px')}
                        width={isSmaller?'120px':(isMed?'148px':'190px')}
                        height={isSmaller?'120px':(isMed?'148px':'190px')}
                        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
                        marginTop={-10}
                        zIndex={97}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        <Box
                            width={isSmaller?'100px':(isMed?'120px':'150px')}
                            height={isSmaller?'100px':(isMed?'120px':'150px')}
                            position={'relative'}
                            sx={{
                                transition: 'all 0.3s linear'
                            }}
                        >
                            <Image src={(urlFor(currService.icon)).url()} layout={'fill'} objectFit={'cover'} />
                        </Box>
                    </Box>
                    <Typography
                        component={'h2'}
                        color={theme.palette.primary.dark}
                        marginLeft={'20px'}
                        marginTop={'28px'}
                        fontFamily={'Crimson Pro'}
                        lineHeight={'48px'}
                        fontSize={'56px'}
                        fontWeight={600}
                        textAlign={'center'}
                        
                    >
                        {currService.title}
                    </Typography>
                    
                </Box>
                <Box
                    margin={'40px 0'}
                >
                    <SanityBlockContent 
                        blocks={currService.description} 
                        serializers={serializers}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} 
                    />
                </Box>
            </Container>
        </Box>
    )


}


export default serviceSingle

export const getServerSideProps = async({ params }) => {
    // console.log("Static Props Start")
    
    const { slug } = params

    // console.log({Slug: slug})

    const query = `*[_type == "service" && slug.current == '${slug}'][0]`
    // console.log({Query: query})

   try {
        const data = await sanityClient.fetch(query)
        if(data){
            return {
                props:{
                    currService: data
                }
            }
        } else {
            return {
                props:{
                    error: 'Sorry, There is not any Server like this'
                }
            }
        }
   } catch (error) {
        return {
            props: {
                notFound: true
            }
        }
   }
}