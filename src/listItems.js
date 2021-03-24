import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LayersIcon from '@material-ui/icons/Layers';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import BuildIcon from '@material-ui/icons/Build';
import ReportIcon from '@material-ui/icons/Report';
import CommentIcon from '@material-ui/icons/Comment';

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DesktopWindowsIcon />
			</ListItemIcon>
			<ListItemText primary="Офисы" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<MobileScreenShareIcon />
			</ListItemIcon>
			<ListItemText primary="Оборудование" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LocalPhoneIcon />
			</ListItemIcon>
			<ListItemText primary="Phones" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary="Ip Planning" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<CommentIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ReportIcon />
			</ListItemIcon>
			<ListItemText primary="Phones reports" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BuildIcon />
			</ListItemIcon>
			<ListItemText primary="Tools" />
		</ListItem>
	</div>
);