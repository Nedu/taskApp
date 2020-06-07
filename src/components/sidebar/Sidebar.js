import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import './Sidebar.scss';

function SideBar({ items }) {
    return (
        <div className="sidebar">
          <List disablePadding dense>
            {items.map(({ label, name, path, ...rest }) => (
              <ListItem key={name} button {...rest} component={Link} to={path}>
                <ListItemText>{label}</ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      )
}

export default SideBar;