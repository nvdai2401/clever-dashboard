import 'date-fns'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
	Container,
	Grid,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	Button,
} from '@material-ui/core'

import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => {
	console.log(theme)
	return {
		root: {
			flexGrow: 1,
			backgroundColor: theme.palette.grey['300'],
			boxShadow: theme.shadows['5'],
			padding: theme.spacing(1),
		},
		formControl: {
			minWidth: 200,
		},
	}
})

const ScheduleToolbar = () => {
	const classes = useStyles()
	const [selectedDateFrom, setSelectedDateFrom] = React.useState(
		new Date('2020-01-01T21:11:54')
	)
	const [selectedDateTo, setSelectedDateTo] = React.useState(
		new Date('2020-01-02T21:11:54')
	)
	const [selectedDoctor, setSelectedDoctor] = React.useState(0)

	return (
		<Container maxWidth='xl' className={classes.root}>
			<Grid container spacing={5}>
				<Grid item xs={4}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid container justify='space-between'>
							<KeyboardDatePicker
								disableToolbar
								variant='inline'
								format='dd/MM/yyyy'
								margin='normal'
								id='date-picker-inline 1'
								label='Từ ngày'
								value={selectedDateFrom}
								onChange={date => setSelectedDateFrom(date)}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
							<KeyboardDatePicker
								disableToolbar
								variant='inline'
								format='dd/MM/yyyy'
								margin='normal'
								id='date-picker-inline 2'
								label='Đến ngày'
								value={selectedDateTo}
								onChange={date => setSelectedDateTo(date)}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</Grid>
						<div>
							<FormControl className={classes.formControl}>
								<InputLabel id='demo-simple-select-helper-label'>
									Bác sĩ
								</InputLabel>
								<Select
									labelId='demo-simple-select-helper-label'
									id='demo-simple-select-helper'
									value={selectedDoctor}
									onChange={e => setSelectedDoctor(e.target.value)}
								>
									<MenuItem value=''>
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<Button variant='contained' color='primary'>
								Tra cứu
							</Button>
						</div>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={4}></Grid>
				<Grid item xs={4}></Grid>
			</Grid>
		</Container>
	)
}

export default ScheduleToolbar
