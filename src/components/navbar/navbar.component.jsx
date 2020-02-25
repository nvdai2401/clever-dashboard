import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tab, Tabs } from '@material-ui/core'
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
	ShoppingBasket,
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

const NavBarItem = {
	'/schedule': 0,
	'/reports': 1,
	'/utils': 2,
	'/sale-management': 3,
	'/hr-management': 4,
	'/system': 5,
	'/backup': 6,
	'/contact': 7,
	'/password': 8,
}

const NavBar = ({ location, history }) => {
	const classes = useStyles()
	const [value, setValue] = React.useState(NavBarItem[location.pathname])

	const handleChange = (newValue, event) => {
		setValue(newValue)
	}

	const navigateTo = pathname => {
		history.push(pathname)
		handleChange(NavBarItem[pathname])
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
					<Tab
						label='Lịch hẹn'
						icon={<Event />}
						{...a11yProps(0)}
						onClick={() => navigateTo('/schedule')}
					/>
					<Tab
						label='Báo cáo'
						icon={<Equalizer />}
						{...a11yProps(1)}
						onClick={() => navigateTo('/reports')}
					/>
					<Tab
						label='Chức năng'
						icon={<Apps />}
						{...a11yProps(2)}
						onClick={() => navigateTo('/utils')}
					/>
					<Tab
						label='Quản lý bán hàng'
						icon={<ShoppingBasket />}
						{...a11yProps(3)}
						onClick={() => navigateTo('/sale-management')}
					/>
					<Tab
						label='Quản lý nhân sự'
						icon={<People />}
						{...a11yProps(4)}
						onClick={() => navigateTo('/hr-management')}
					/>
					<Tab
						label='Hệ thống'
						icon={<Settings />}
						{...a11yProps(5)}
						onClick={() => navigateTo('/system')}
					/>
					<Tab
						label='Sao lưu'
						icon={<Backup />}
						{...a11yProps(6)}
						onClick={() => navigateTo('/backup')}
					/>
					<Tab
						label='Liên hệ'
						icon={<Phone />}
						{...a11yProps(7)}
						onClick={() => navigateTo('/contact')}
					/>
					<Tab
						label='Đổi mật khẩu'
						icon={<Lock />}
						{...a11yProps(8)}
						onClick={() => navigateTo('/password')}
					/>
					<Tab label='Đăng xuất' icon={<ExitToApp />} {...a11yProps(9)} />
				</Tabs>
			</AppBar>
		</div>
	)
}

export default withRouter(NavBar)
