import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, platform, manufacturer, total, active, activeNIU, inactive) {
	return { id, platform, manufacturer, total, active, activeNIU,	inactive };
}

const rows = [
	createData(0, 'Платформа не указана', 'CISCO', 30, 0, 0, 3),
	createData(1, '1721', 'CISCO', 2, 0, 0, 0),
	createData(2, '1751-V', 'CISCO', 3, 0, 0, 3),
	createData(3, '1760', 'CISCO', 64, 0, 0, 62),
	createData(4, '1841', 'CISCO', 36, 0, 0, 22),
	createData(4, '2610XM', 'CISCO', 1, 0, 0, 0),
	createData(4, '2801', 'CISCO', 119, 0, 0, 103),
];

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

export default function Orders() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Title></Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Платформа</TableCell>
						<TableCell>Производитель</TableCell>
						<TableCell>Всего устройств</TableCell>
						<TableCell>Активных</TableCell>
						<TableCell>Активных (not InUse)</TableCell>
						<TableCell>Не активных</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.platform}</TableCell>
							<TableCell>{row.manufacturer}</TableCell>
							<TableCell>{row.total}</TableCell>
							<TableCell>{row.active}</TableCell>
							<TableCell>{row.activeNIU}</TableCell>
							<TableCell>{row.inactive}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
}