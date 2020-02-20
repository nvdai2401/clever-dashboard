import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import {
	Apps,
	Backup,
	Event,
	Equalizer,
	ExitToApp,
	Lock,
	People,
	Phone,
	Settings,
} from '@material-ui/icons'

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	tabs: {
		display: 'flex',
		justifyContent: 'center',
	},
}))

export default function NavBar() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static' color='primary'>
				<Tabs
					value={value}
					onChange={handleChange}
					className={classes.tabs}
					variant='scrollable'
					scrollButtons='on'
					indicatorColor='secondary'
					textColor='inherit'
					aria-label='scrollable force tabs example'
				>
					<Tab label='Lịch hẹn' icon={<Event />} {...a11yProps(0)} />
					<Tab label='Báo cáo' icon={<Equalizer />} {...a11yProps(1)} />
					<Tab label='Chức năng' icon={<Apps />} {...a11yProps(2)} />
					<Tab
						label='Quản lý bán hàng'
						icon={<ShoppingBasket />}
						{...a11yProps(3)}
					/>
					<Tab label='Quản lý nhân sự' icon={<People />} {...a11yProps(4)} />
					<Tab label='Hệ thống' icon={<Settings />} {...a11yProps(5)} />
					<Tab label='Sao lưu' icon={<Backup />} {...a11yProps(6)} />
					<Tab label='Liên hệ' icon={<Phone />} {...a11yProps(7)} />
					<Tab label='Đổi mật khẩu' icon={<Lock />} {...a11yProps(8)} />
					<Tab label='Đăng xuất' icon={<ExitToApp />} {...a11yProps(9)} />
				</Tabs>
			</AppBar>
		</div>
	)
}
