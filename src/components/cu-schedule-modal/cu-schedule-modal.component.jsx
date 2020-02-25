import 'date-fns'
import React, { useState } from 'react'
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
	inputField: {
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
	uploadingInput: {
		display: 'none',
	},
	dateTimePicker: {
		width: '100%',
	},
	imgUploader: {
		position: 'relative',
		border: '1px solid #e0e0e0',
		height: 180,
		width: 180,
		borderRadius: theme.shape.borderRadius,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(0.8),
		margin: '36px auto 0',
	},
	avatarImage: {
		width: '100%',
		height: '100%',
		borderRadius: 6,
	},
	closeImageIcon: {
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: 2,
		color: '#ffffff',
	},
}))

const CUScheduleModal = ({
	title,
	name,
	sex,
	age,
	phoneNumber,
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
	const [pName, setPName] = useState(name)
	const [pSex, setPSex] = useState(sex)
	const [pAge, setPAge] = useState(age)
	const [pPhoneNumber, setPPhoneNumber] = useState(phoneNumber)
	const [pAddress, setPAddress] = useState(address)
	const [pDoctor, setPDoctor] = useState(doctor)
	const [pTime, setPTime] = useState(hour)
	const [pDate, setPDate] = useState(date)
	const [pDesc, setPDesc] = useState(desc)
	const [pImg, setPImg] = useState(img)
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
				{actionType === 'create' ? 'Thêm lịch hẹn' : 'Cập nhật lịch hẹn'}
				<IconButton className={classes.closeIcon} onClick={handleClose}>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				<form noValidate>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<TextField
								required
								label='Họ và tên'
								value={pName}
								className={classes.inputField}
								onChange={e => setPName(e.target.value)}
							/>
							<TextField
								label='Số điện thoại'
								type='number'
								value={pPhoneNumber}
								className={classes.inputField}
								onChange={e => setPPhoneNumber(e.target.value)}
							/>
							<TextField
								label='Tuổi'
								type='number'
								value={pAge}
								className={classes.inputField}
								onChange={e => setPAge(e.target.value)}
							/>
							<TextField
								label='Địa chỉ'
								value={pAddress}
								className={classes.inputField}
								onChange={e => setPAddress(e.target.value)}
							/>
							<Autocomplete
								options={doctorList}
								getOptionLabel={option => option.title}
								className={classes.inputField}
								renderInput={params => (
									<TextField
										{...params}
										value={pDoctor}
										label='Bác sĩ'
										required
										fullWidth
										onChange={e => setPDoctor(e.target.value)}
									/>
								)}
							/>
							<FormControl
								required
								component='fieldset'
								className={classes.formControl}
							>
								<FormLabel component='legend'>Giới tính</FormLabel>
								<RadioGroup
									aria-label='gender'
									name='gender'
									value={pSex}
									className={classes.radioGroup}
									onChange={e => setPSex(e.target.value)}
								>
									<FormControlLabel
										value='female'
										control={<Radio color='primary' />}
										label='Nữ'
									/>
									<FormControlLabel
										value='male'
										control={<Radio color='primary' />}
										label='Nam'
									/>
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<MuiPickersUtilsProvider
								utils={DateFnsUtils}
								className={classes.dateTimePicker}
							>
								<KeyboardDatePicker
									disableToolbar
									required
									variant='inline'
									format='dd/MM/yyyy'
									label='Ngày khám bệnh'
									value={pDate}
									onChange={date => setPDate(date)}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
									className={classes.inputField}
								/>
								<KeyboardTimePicker
									required
									id='time-picker'
									label='Giờ khám bệnh'
									value={pTime}
									onChange={e => setPTime(e.target.value)}
									KeyboardButtonProps={{
										'aria-label': 'change time',
									}}
									className={classes.inputField}
								/>
							</MuiPickersUtilsProvider>
							<div className={classes.imgUploader}>
								{pImg ? (
									<React.Fragment>
										<Avatar
											alt='Avatar'
											src={pImg}
											variant='square'
											className={classes.avatarImage}
										/>
										<IconButton
											aria-label='upload picture'
											component='span'
											className={classes.closeImageIcon}
											onClick={() => setPImg('')}
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
											id='uploading-input'
											className={classes.uploadingInput}
											onChange={e => {
												const fileReader = new FileReader()
												fileReader.readAsDataURL(e.target.files[0])
												fileReader.onload = event => {
													setPImg(event.target.result)
												}
											}}
											type='file'
										/>
									</Button>
								)}
							</div>
						</Grid>
						<TextField
							label='Nội dung khám'
							required
							variant='outlined'
							multiline
							rows='3'
							rowsMax='15'
							value={pDesc}
							className={classes.inputField}
							onChange={e => setPDesc(e.target.value)}
						/>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions classname={classes.actionBtnContainer}>
				<Button variant='contained' color='secondary' onClick={handleClose}>
					Hủy bỏ
				</Button>
				<Button variant='contained' color='primary' onClick={handleClose}>
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
	phoneNumber: PropTypes.string,
	address: PropTypes.string,
	doctor: PropTypes.string,
	hour: PropTypes.number,
	date: PropTypes.object,
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
	age: undefined,
	phoneNumber: '',
	address: '',
	doctor: '',
	hour: new Date().getHours(),
	date: new Date(),
	desc: '',
	img: '',
	visible: false,
	actionType: 'create',
}

export default CUScheduleModal
