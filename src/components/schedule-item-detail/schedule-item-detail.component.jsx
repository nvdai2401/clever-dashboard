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

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
})

const ScheduleItemDetail = ({
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
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h5' component='h2'>
					{name}
				</Typography>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom
				>
					Giờ khám: {hours}
				</Typography>
				<Typography variant='body2' component='p'>
					Điện thoại: {phone_number}
				</Typography>
				<Typography variant='body2' component='p'>
					Bác sĩ: {doctor}
				</Typography>
				<Typography variant='body2' component='p'>
					Đại chỉ: {address}
				</Typography>
				<Typography variant='body2' component='p'>
					Giới tính: {sex}
				</Typography>
				<Typography variant='body2' component='p'>
					Tuổi: {age}
				</Typography>
				<Typography variant='body2' component='p'>
					Nội dung: {desc}
				</Typography>
			</CardContent>
		</Card>
	)
}

ScheduleItemDetail.propTypes = {
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

ScheduleItemDetail.defaultProps = {
	name: 'Trống',
	hours: 'Trống',
	doctor: 'Trống',
	phone_number: 'Trống',
	address: 'Trống',
	sex: 'Trống',
	age: 18,
	desc: '',
	img: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
}

export default ScheduleItemDetail
