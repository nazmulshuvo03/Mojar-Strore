import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const styles = (theme) => ({
	root: {
		zIndex: '3',
		color: theme.palette.common.white,
		position: 'sticky',
		margin: theme.spacing.unit,
		bottom: theme.spacing.unit * 7,
		left: theme.spacing.unit * 158,
		backgroundColor: purple[900],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			color: purple[900]
		},
		'&:focus': {
			backgroundColor: theme.palette.common.white,
			color: purple[800]
		}
	},
	label: {
		fontSize: '0.7rem'
	}
});

function FloatingButton(props) {
	const { classes } = props;
	return (
		<span>
			<Fab
				variant="outlined"
				color="primary"
				className={classes.root}
				href="https://github.com/nazmulshuvo03/Mojar-Strore"
				target="_blank"
			>
				<span className={classes.label}>source</span>
			</Fab>
		</span>
	);
}

export default withStyles(styles)(FloatingButton);
