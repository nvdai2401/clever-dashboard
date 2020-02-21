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
	TablePagination,
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

const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
		id: 'population',
		label: 'Population',
		minWidth: 170,
		align: 'right',
		format: value => value.toLocaleString(),
	},
	{
		id: 'size',
		label: 'Size\u00a0(km\u00b2)',
		minWidth: 170,
		align: 'right',
		format: value => value.toLocaleString(),
	},
	{
		id: 'density',
		label: 'Density',
		minWidth: 170,
		align: 'right',
		format: value => value.toFixed(2),
	},
]

function createData(name, code, population, size) {
	const density = population / size
	return { name, code, population, size, density }
}

const rows = [
	createData('India', 'IN', 1324171354, 3287263),
	createData('China', 'CN', 1403500365, 9596961),
	createData('Italy', 'IT', undefined, 301340),
	createData('United States', 'US', 327167434, 9833520),
	createData('Canada', 'CA', 37602103, 9984670),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('France', 'FR', 67022000, 640679),
	createData('United Kingdom', 'GB', 67545757, 242495),
	createData('Russia', 'RU', 146793744, 17098246),
	createData('Nigeria', 'NG', 200962417, 923768),
	createData('Brazil', 'BR', 210147125, 8515767),
]

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

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		height: 'calc(100vh - 170px)',
	},
})

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
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							{colLabels.map(column => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{fakeArray.map((row, rowIndex) => {
							return (
								<TableRow
									hover
									role='checkbox'
									tabIndex={-1}
									key={`${nanoid()}`}
								>
									{colLabels.map(col => {
										return (
											<TableCell key={col.id} align='center'>
												{ScheduleTableData[col.id].length
													? ScheduleTableData[col.id][rowIndex]
														? ScheduleTableData[col.id][rowIndex].id
														: ''
													: ''}
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
