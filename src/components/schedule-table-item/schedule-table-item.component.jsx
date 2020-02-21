import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	Tooltip,
} from '@material-ui/core'

import ScheduleItemDetail from '../schedule-item-detail/schedule-item-detail.component'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		minWidth: 200,
	},
	item: {
		padding: theme.spacing(1),
		textAlign: 'left',
		'&:last-child': {
			paddingBottom: theme.spacing(1),
		},
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}))

const ScheduleTableItem = ({
	id,
	name,
	hours,
	doctor,
	phone_number,
	address,
	sex,
	age,
	desc,
	img,
}) => {
	const classes = useStyles()
	return (
		<Tooltip
			title={
				<ScheduleItemDetail
					{...{
						id,
						name,
						hours,
						doctor,
						phone_number,
						address,
						sex,
						age,
						desc,
						img,
					}}
				/>
			}
			interactive
			placement='right-start'
		>
			<Card className={classes.root}>
				<CardContent className={classes.item}>
					<Typography
						className={classes.title}
						color='textSecondary'
						gutterBottom
					>
						{hours}
					</Typography>
					<Typography variant='h6' component='h4'>
						{name}
					</Typography>
					<Typography variant='body2' component='p'>
						DT: {phone_number}
					</Typography>
					<Typography variant='body2' component='p'>
						BS: {doctor}
					</Typography>
					<Typography variant='body2' component='p'>
						ND: {desc}
					</Typography>
				</CardContent>
			</Card>
		</Tooltip>
	)
}

ScheduleTableItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	hours: PropTypes.string,
	doctor: PropTypes.string,
	phone_number: PropTypes.string,
	address: PropTypes.string,
	sex: PropTypes.string,
	age: PropTypes.number,
	desc: PropTypes.string,
	img: PropTypes.string,
}

export default ScheduleTableItem
