import 'date-fns'
import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import {
	Chip,
	Container,
	Grid,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	Button,
	Input,
	TextField,
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { AddCircleOutline, SearchOutlined } from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers'
import { doctor } from '@src/data/doctor'

const useStyles = makeStyles(theme => {
	return {
		root: {
			flexGrow: 1,
			backgroundColor: theme.palette.grey['300'],
			boxShadow: theme.shadows['5'],
			padding: theme.spacing(2),
		},
		formControl: {
			width: '100%',
			minWidth: 200,
		},
		datePicker: {
			margin: 0,
			width: '45%',
		},
		doctorPicker: {
			display: 'flex',
			justifyContent: 'space-around',
		},
		schStatusContainer: {
			justifyContent: 'space-between',
			'& > div': {
				'&:nth-child(1)': {
					backgroundColor: theme.palette.success.main,
				},
				'&:nth-child(2)': {
					backgroundColor: theme.palette.secondary.main,
				},
				'&:nth-child(3)': {
					backgroundColor: theme.palette.warning.main,
				},
				'&:nth-child(4)': {
					backgroundColor: theme.palette.error.main,
				},
			},
		},
		alignCenter: {
			display: 'flex',
			alignItems: 'center',
		},
		justifyEnd: {
			display: 'flex',
			justifyContent: 'flex-end',
		},
	}
})

const ScheduleToolbar = ({
	startDate,
	endDate,
	onDateChange,
	toggleCUScheduleModal,
}) => {
	const classes = useStyles()
	const [selectedDoctor, setSelectedDoctor] = React.useState('')

	const validateDatePicker = (startDate, endDate) => {
		return startDate > endDate ? false : true
	}

	const searchSchedule = () => {
		if (validateDatePicker(startDate, endDate)) {
			alert('Success')
		} else {
			alert('Failed')
		}
	}

	return (
		<Container maxWidth='xl' className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid container justify='space-between'>
							<KeyboardDatePicker
								className={classes.datePicker}
								disableToolbar
								variant='inline'
								format='dd/MM/yyyy'
								margin='normal'
								id='date-picker-inline 1'
								label='Từ ngày'
								value={startDate}
								onChange={date => onDateChange({ startDate: date })}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
							<KeyboardDatePicker
								className={classes.datePicker}
								disableToolbar
								variant='inline'
								format='dd/MM/yyyy'
								margin='normal'
								id='date-picker-inline 2'
								label='Đến ngày'
								value={endDate}
								onChange={date => onDateChange({ endDate: date })}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={3} className={classes.doctorPicker}>
					<Autocomplete
						id='combo-box-demo'
						options={doctor}
						getOptionLabel={option => option.title}
						style={{ width: 300 }}
						renderInput={params => (
							<TextField
								{...params}
								value={selectedDoctor}
								onChange={e => setSelectedDoctor(e.target.value)}
								label='Bác sĩ'
								fullWidth
							/>
						)}
					/>

					<Button
						onClick={searchSchedule}
						variant='contained'
						color='primary'
						startIcon={<SearchOutlined />}
					>
						Tra cứu
					</Button>
				</Grid>
				<Grid
					item
					xs={4}
					className={`${classes.schStatusContainer} ${classes.alignCenter}`}
				>
					<Chip label='Đang chờ tái khám' color='secondary' />
					<Chip label='Đã quay lại tái khám' color='secondary' />
					<Chip label='Cuộc hẹn đang chờ' color='secondary' />
					<Chip label='Cuộc hẹn đã tới' color='secondary' />
				</Grid>
				<Grid item xs={2} className={classes.justifyEnd}>
					<Button
						variant='contained'
						color='primary'
						startIcon={<AddCircleOutline />}
						onClick={toggleCUScheduleModal}
					>
						Thêm lịch hẹn
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

ScheduleToolbar.propTypes = {
	startDate: PropTypes.object,
	endDate: PropTypes.object,
	onDateChange: PropTypes.func,
	toggleCUScheduleModal: PropTypes.func,
}

ScheduleToolbar.defaultProps = {
	startDate: new Date(),
	endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
}

export default ScheduleToolbar
