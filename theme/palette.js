import { colors } from '@mui/material'

const white = "#FFFFFF";
const black = "#000000";

const palette = {
	black,
	white,
	primary: {
		contrastText: white,
		dark: "#063c66",
		main: "#1f76bb",
		light: "#45b9dd"
	},
	secondary: {
		contrastText: white,
		dark: "#2e5000",
		main: "#8ec446",
		light: "#c1ef84"
	},
	social: {
		facebook: '#3B5998',
		instagram: '#833AB4',
		linkedIn: '#0007B5',
		twitter:  '#1A8CD8',
		whatsapp: '#25D366',
		github: '#211F1F',
		docker: '#0DB7ED',
		behance: '#053EFF',
		dribble: '#EA4C89',
		google: '#DB4A39',
		website: '#0084C8'
	},
	
	success: {
		contrastText: white,
		dark: colors.green[900],
		main: colors.green[600],
		light: colors.green[400]
	},
	info: {
		contrastText: white,
		dark: colors.blue[900],
		main: colors.blue[600],
		light: colors.blue[400]
	},
	warning: {
		contrastText: white,
		dark: colors.orange[900],
		main: colors.orange[600],
		light: colors.orange[400]
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400]
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		link: colors.blue[600]
	},
	filler: {
		vibrant: "#f9ac42",
		dull:  "#d8d5d5" 
	},
	icon: colors.blueGrey[600],
	divider: colors.grey[200],
	transparent: "#00000000"
}

export default palette
