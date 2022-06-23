import { Drawer, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import menu from './menu'
import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/images/logos/logo-secondary-light.png'
import { useRouter } from "next/router"

const useStyles = makeStyles(theme => ({
  drawer: {
		width: 240,
    zIndex: 99,
		[theme.breakpoints.up("lg")]: {
			marginTop: 64,
			height: "calc(100% - 64px)",
		},
		scrollbarWidth: "none",
		backgroundColor: theme.palette.primary.main,
	},
	root: {
		backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
		display: "flex",
		flexDirection: "column",
		height: "100%",
		padding: theme.spacing(2),
		paddingTop: theme.spacing(5),
	},
  menu_link_mbl:{
    color: theme.palette.secondary.main,
    textAlign: 'center',
    borderRadius: '2px',
    padding: '7px',
    margin: '10px 10px',
    '&:hover':{
      color: 'white'
    }
  },
  menu_link_mbl_active:{
    color: theme.palette.secondary.light,
    textAlign: 'center',
    borderRadius: '10px',
    padding: '10px',
    margin: '10 10px',
    backgroundColor: theme.palette.primary.dark
  },
}))
function Sidebar(props) {
  const classes = useStyles()
  const {open, onClose} = props
  const router = useRouter()
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant='temporary'
    >
      <div
        className={classes.root}
        onClick={onClose}
      >
        <Box width={50} height={50} mx='auto'>
          <Image src={Logo} alt="header-logo"  />
        </Box>
        <Box display={'flex'} flexDirection='column' mt={10}>
          {menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <a className={router.pathname==item.path?classes.menu_link_mbl_active:classes.menu_link_mbl}>{item.title}</a>
            </Link>
          ))}
        </Box>

      </div>
      
    </Drawer>
  )
}

export default Sidebar

