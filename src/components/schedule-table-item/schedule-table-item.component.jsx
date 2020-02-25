import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles, withStyles } from '@material-ui/core/styles'
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
		position: 'relative',
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
	statusBadge: {
		borderRadius: '50%',
		width: 20,
		height: 20,
		position: 'absolute',
		top: 8,
		right: 8,
	},
}))

const ScheduleTableItem = ({
	id,
	name,
	hours,
	date,
	doctor,
	phone_number,
	address,
	sex,
	age,
	desc,
	img,
	status,
	openUpdateScheduleInfoModal,
}) => {
	const classes = useStyles()

	const genStatusBgColor = status => {
		const rbgStatusCode = {
			wait_for_re_exam: '76, 175, 80',
			did_re_exam: '245, 0, 87',
			waiting: '255, 152, 0',
			came: '244, 67, 54',
		}
		return `rgb(${rbgStatusCode[status]})`
	}

	const StatusBtn = withStyles({})(({ status }) => {
		return (
			<div
				className={classes.statusBadge}
				style={{ backgroundColor: genStatusBgColor(status) }}
			/>
		)
	})

	return (
		<Tooltip
			title={
				<ScheduleItemDetail
					{...{
						id,
						name,
						hours,
						date,
						doctor,
						phone_number,
						address,
						sex,
						age,
						desc,
						img,
						openUpdateScheduleInfoModal,
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
					<StatusBtn status={status} />
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
	date: PropTypes.string,
	doctor: PropTypes.string,
	phone_number: PropTypes.string,
	address: PropTypes.string,
	sex: PropTypes.string,
	age: PropTypes.number,
	desc: PropTypes.string,
	img: PropTypes.string,
	status: PropTypes.string,
	openUpdateScheduleInfoModal: PropTypes.func,
}

export default ScheduleTableItem
