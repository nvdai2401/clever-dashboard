import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
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
import nanoid from 'nanoid'
import vi from 'date-fns/locale/vi'
import {
	convertToSpaceStr,
	genMockArray,
	getMaxLengthOfArrayObj,
} from '@src/utils/share'
import ScheduleTableData from '@src/data/schedule'

import ScheduleTableItem from '../schedule-table-item/schedule-table-item.component'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 'calc(100vh - 155px)',
	},
	head: {
		backgroundColor: theme.palette.info.dark,
		color: theme.palette.common.white,
	},
	tblCell: {
		borderRight: '1px solid rgba(224, 224, 224, 1)',
		minWidth: 250,
	},
}))

const ScheduleTable = ({ startDate, endDate, openUpdateScheduleInfoModal }) => {
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
															openUpdateScheduleInfoModal={
																openUpdateScheduleInfoModal
															}
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
	openUpdateScheduleInfoModal: PropTypes.func,
}

ScheduleTable.defaultProps = {
	startDate: new Date(),
	endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
}

export default ScheduleTable
