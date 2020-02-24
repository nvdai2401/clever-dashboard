import 'date-fns'
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
	Avatar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	RadioGroup,
	DialogTitle,
	Typography,
	IconButton,
	TextField,
	Grid,
	FormControl,
	FormControlLabel,
	Radio,
	FormLabel,
} from '@material-ui/core'
import { Close, CloudUpload } from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers'
import { Autocomplete } from '@material-ui/lab'
import { doctor as doctorList } from '@src/data/doctor'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
	},
	modalTitle: {
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	textField: {
		minWidth: 200,
		width: '100%',
		marginTop: 6,
	},
	formControl: {
		width: '100%',
		marginTop: 24,
	},
	radioGroup: {
		flexDirection: 'initial',
	},
	closeIcon: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
	closeImageIcon: {
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: 2,
	},
	uploadingInput: {
		display: 'none',
	},
	dateTimePicker: {
		width: '100%',
	},
}))

const CUScheduleModal = ({
	title,
	name,
	sex,
	age,
	address,
	doctor,
	hour,
	date,
	desc,
	img,
	handleClose,
	visible,
	actionType,
}) => {
	const classes = useStyles()
	return (
		<Dialog
			className={classes.root}
			open={visible}
			onClose={handleClose}
			aria-labelledby='responsive-dialog-title'
		>
			<DialogTitle
				id='responsive-dialog-title'
				className={classes.modalTitle}
				onClose={handleClose}
			>
				<Typography variant='h5'>
					{actionType === 'create' ? 'Thêm lịch hẹn' : 'Cập nhật lịch hẹn'}
				</Typography>
				<IconButton className={classes.closeIcon} onClick={handleClose}>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				<form noValidate>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<TextField
								className={classes.textField}
								required
								label='Họ và tên'
								defaultValue='Nguyễn Văn A'
							/>
							<TextField
								className={classes.textField}
								label='Số điện thoại'
								type='number'
							/>
							<TextField
								className={classes.textField}
								label='Tuổi'
								type='number'
							/>
							<TextField className={classes.textField} label='Địa chỉ' />
							<FormControl component='fieldset' className={classes.formControl}>
								<FormLabel component='legend'>Giới tính</FormLabel>
								<RadioGroup
									aria-label='gender'
									name='gender'
									className={classes.radioGroup}
								>
									<FormControlLabel
										value='female'
										control={<Radio />}
										label='Nữ'
									/>
									<FormControlLabel
										value='male'
										control={<Radio />}
										label='Nam'
									/>
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							{img ? (
								<React.Fragment>
									<Avatar alt='Avatar' src={img} variant='square' />
									<IconButton
										aria-label='upload picture'
										component='span'
										className={classes.closeImageIcon}
										// onClick={() => setAvatar('')}
									>
										<Close />
									</IconButton>
								</React.Fragment>
							) : (
								<Button
									variant='contained'
									color='default'
									component='label'
									startIcon={<CloudUpload />}
								>
									Upload
									<input
										accept='image/*'
										className={classes.uploadingInput}
										id='uploading-input'
										// onChange={onUpload}
										type='file'
									/>
								</Button>
							)}
							<Autocomplete
								id='combo-box-demo'
								options={doctorList}
								getOptionLabel={option => option.title}
								fullwidth
								renderInput={params => (
									<TextField
										{...params}
										// value={selectedDoctor}
										// onChange={e => setSelectedDoctor(e.target.value)}
										label='Bác sĩ'
										fullWidth
									/>
								)}
							/>
							<MuiPickersUtilsProvider
								utils={DateFnsUtils}
								className={classes.dateTimePicker}
							>
								<KeyboardDatePicker
									disableToolbar
									variant='inline'
									format='dd/MM/yyyy'
									id='date-picker-inline 1'
									label='Ngày khám bệnh'
									value={date}
									// onChange={date => onDateChange({ startDate: date })}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
								/>
								<KeyboardTimePicker
									id='time-picker'
									label='Giờ khám bệnh'
									// value={selectedDate}
									// onChange={handleDateChange}
									KeyboardButtonProps={{
										'aria-label': 'change time',
									}}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleClose} color='primary'>
					Hủy bỏ
				</Button>
				<Button onClick={handleClose} color='primary' autoFocus>
					Hoàn thành
				</Button>
			</DialogActions>
		</Dialog>
	)
}

CUScheduleModal.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	sex: PropTypes.string,
	age: PropTypes.number,
	address: PropTypes.string,
	doctor: PropTypes.string,
	hour: PropTypes.string,
	date: PropTypes.string,
	desc: PropTypes.string,
	img: PropTypes.string,
	handleClose: PropTypes.func,
	visible: PropTypes.bool,
	actionType: PropTypes.string,
}

CUScheduleModal.defaultProps = {
	title: 'Thêm lịch hẹn',
	name: '',
	sex: '',
	age: 18,
	address: '',
	doctor: '',
	hour: '',
	date: '',
	desc: '',
	img: '',
	visible: false,
	actionType: 'create',
}

export default CUScheduleModal
