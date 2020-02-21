import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import nanoid from 'nanoid'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core'
import { format } from 'date-fns'
import vi from 'date-fns/locale/vi'
import {
	convertToKebabCase,
	convertToSpaceStr,
	genMockArray,
	getMaxLengthOfArrayObj,
} from '@src/utils/share'

import ScheduleTableItem from '../schedule-table-item/schedule-table-item.component'

const ScheduleTableData = {
	fri_feb_21_2020: [
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
		{
			id: nanoid(),
			name: 'Nguyen Van B',
			hours: '10:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
	],
	sat_feb_22_2020: [
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
	],
	sun_feb_23_2020: [],
	mon_feb_24_2020: [
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
	],
	tue_feb_25_2020: [
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
		{
			id: nanoid(),
			name: 'Nguyen Van A',
			hours: '08:00',
			doctor: 'Luong Van Bang',
			phone_number: '0123456789',
			address: 'Ha Noi',
			sex: 'male',
			age: 24,
			desc: 'Hen tai kham',
			img: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 100
			)}.jpg`,
		},
	],
}

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	container: {
		height: 'calc(100vh - 170px)',
	},
	head: {
		backgroundColor: theme.palette.info.dark,
		color: theme.palette.common.white,
	},
	tblCell: {
		borderRight: '1px solid rgba(224, 224, 224, 1)',
	},
}))

const ScheduleTable = ({ startDate, endDate }) => {
	const classes = useStyles()

	const genColumnLabel = scheduleTableData => {
		const colLabels = []
		for (let key in scheduleTableData) {
			const date = convertToSpaceStr(key)
			const formattedDate = format(new Date(date), 'EE - dd/MM/yyyy', {
				locale: vi,
			})
			const turns =
				scheduleTableData[key].length === 0
					? ''
					: ` (${scheduleTableData[key].length})`
			const labelItem = {
				id: key,
				label: `${formattedDate}${turns}`,
				minWidth: 170,
				align: 'center',
				format: value => value.toLocaleString(),
			}
			colLabels.push(labelItem)
		}
		return colLabels
	}
	const colLabels = genColumnLabel(ScheduleTableData)
	const maxlength = getMaxLengthOfArrayObj(ScheduleTableData)
	const fakeArray = genMockArray(maxlength)

	return (
		<Paper className={classes.root}>
			<TableContainer>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow className={classes.head}>
							{colLabels.map(column => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{
										width: `${100 / colLabels.length}%`,
										fontWeight: 700,
									}}
									className={`${classes.head} ${classes.tblCell}`}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{fakeArray.map((row, rowIndex) => {
							return (
								<TableRow key={`${nanoid()}`}>
									{colLabels.map(col => {
										return (
											<TableCell
												key={col.id}
												className={classes.tblCell}
												align='center'
											>
												{ScheduleTableData[col.id].length ? (
													ScheduleTableData[col.id][rowIndex] ? (
														<ScheduleTableItem
															{...ScheduleTableData[col.id][rowIndex]}
														/>
													) : (
														''
													)
												) : (
													''
												)}
											</TableCell>
										)
									})}
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

ScheduleTable.propTypes = {
	startDate: PropTypes.object,
	endDate: PropTypes.object,
}

ScheduleTable.defaultProps = {
	startDate: new Date(),
	endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
}

export default ScheduleTable
