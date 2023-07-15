import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}));

function ContactsComponent() {
  const classes = useStyles();

  return (
      <List className={classes.root}>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon color="secondary"/>
          </ListItemIcon>
          <ListItemText primary="+7 (985) 126-69-66" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <PhoneIcon color="secondary"/>
          </ListItemIcon>
          <ListItemText primary="+7 (916) 634-04-07" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <MailOutlineIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="ano-altika@mail.ru" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LocationOnIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="МО, г.Долгопрудный, ул. Набережная, д.33 оф.61" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <QueryBuilderIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Пн.-Пт.: 10.00-17.00, Сб.-Вс.: Выходной" />
        </ListItem>
      </List>
  );
}

export default ContactsComponent;
