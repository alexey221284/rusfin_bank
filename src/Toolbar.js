import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./App.css"
import menuIcon from "./img/menu_icon.png";
import rsLogo from "./img/rs_logo.png";

export default function ToolbarMy() {
	const [anchorElPhones, setAnchorElPhones] = React.useState(null);
	const [anchorElIpPlanning, setAnchorElIpPlanning] = React.useState(null);
	const [anchorElPhonesReports, setAnchorElPhonesReports] = React.useState(null);
	const [anchorElTools, setAnchorElTools] = React.useState(null);

	const handleClickPhones = (event) => {
		setAnchorElPhones(event.currentTarget);
	};

	const handleClickIpPlanning = (event) => {
		setAnchorElIpPlanning(event.currentTarget);
	};

	const handleClickPhonesReports = (event) => {
		setAnchorElPhonesReports(event.currentTarget);
	};

	const handleClickTools = (event) => {
		setAnchorElTools(event.currentTarget);
	};

	const handleClosePhones = () => {
		setAnchorElPhones(null);
	};

	const handleCloseIpPlanning = () => {
		setAnchorElIpPlanning(null);
	};

	const handleClosePhonesReports = () => {
		setAnchorElPhonesReports(null);
	};

	const handleCloseTools = () => {
		setAnchorElTools(null);
	};

	return (
		<div className={'main'}>
			<img className={'rsLogo'} src={rsLogo} alt="logo"/>
			<div>
				<Button>Офисы</Button>
				<Button>Оборудование</Button>
				<Button aria-controls="phones" aria-haspopup="true" onClick={handleClickPhones}>
					Phones
					<img className={'menuIcon'} src={menuIcon}/>
				</Button>
				<Button aria-controls="ipPlanning" aria-haspopup="true" onClick={handleClickIpPlanning}>
					IP Planning
					<img className={'menuIcon'} src={menuIcon}/>
				</Button>
				<Button>Reports</Button>
				<Button aria-controls="phonesReports" aria-haspopup="true" onClick={handleClickPhonesReports}>
					Phones reports
					<img className={'menuIcon'} src={menuIcon}/>
				</Button>
				<Button aria-controls="phonesReports" aria-haspopup="true" onClick={handleClickTools}>Tools
					<img className={'menuIcon'} src={menuIcon}/>
				</Button>
			</div>

			<Menu
				id="phones"
				anchorEl={anchorElPhones}
				keepMounted
				open={Boolean(anchorElPhones)}
				onClose={handleClosePhones}
			>
				<MenuItem onClick={handleClosePhones}>Телефоны инфо</MenuItem>
				<MenuItem onClick={handleClosePhones}>Телефона по ФИО</MenuItem>
				<MenuItem onClick={handleClosePhones}>Телефоны с переадресацией</MenuItem>
			</Menu>

			<Menu
				id="ipPlanning"
				anchorEl={anchorElIpPlanning}
				keepMounted
				open={Boolean(anchorElIpPlanning)}
				onClose={handleCloseIpPlanning}
			>
				<MenuItem onClick={handleCloseIpPlanning}>IPAM</MenuItem>
			</Menu>

			<Menu
				id="phonesReports"
				anchorEl={anchorElPhonesReports}
				keepMounted
				open={Boolean(anchorElPhonesReports)}
				onClose={handleClosePhonesReports}
			>
				<MenuItem onClick={handleClosePhonesReports}>По моделям</MenuItem>
				<MenuItem onClick={handleClosePhonesReports}>По кластерам</MenuItem>
				<MenuItem onClick={handleClosePhonesReports}>По неиспользуемым</MenuItem>
				<MenuItem onClick={handleClosePhonesReports}>По Agent Licenses</MenuItem>
			</Menu>

			<Menu
				id="tools"
				anchorEl={anchorElTools}
				keepMounted
				open={Boolean(anchorElTools)}
				onClose={handleCloseTools}
			>
				<MenuItem onClick={handleCloseTools}>Поиск незарегистрированных телефонов</MenuItem>
				<MenuItem onClick={handleCloseTools}>CUCM маршрутизация</MenuItem>
				<MenuItem onClick={handleCloseTools}>Tesling CORS requests</MenuItem>
			</Menu>

		</div>
	);
}
