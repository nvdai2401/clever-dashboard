import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

const CUScheduleModal = ({ handleClose, visible }) => {
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<Dialog
			fullScreen={fullScreen}
			open={visible}
			onClose={handleClose}
			aria-labelledby='responsive-dialog-title'
		>
			<DialogTitle id='responsive-dialog-title'>
				{"Use Google's location service?"}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleClose} color='primary'>
					Disagree
				</Button>
				<Button onClick={handleClose} color='primary' autoFocus>
					Agree
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
}

export default CUScheduleModal
