import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText'; 
import Checkbox from '@material-ui/core/Checkbox'; 
import Grid from '@material-ui/core/Grid';   

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',  
    marginTop:10,
    marginBottom:10,
    backgroundColor: theme.palette.background.paper,
    border:'2px solid rgba(0, 0, 0, 0.05)', borderRadius:'8px'
  },
}));

export default function CheckboxList({dataList,setSelected}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    } 
    setSelected(newChecked)
    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root} >
    <Grid item lg={12} >
        <Grid container justifyContent="left">
            {dataList && dataList.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <Grid item lg={4}> 
                        <ListItem key={value} button>  
                            <ListItemText id={labelId} primary={`${value}`} />
                            <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            </ListItemSecondaryAction>
                        </ListItem> 
                    </Grid>
                );
            })}
        </Grid>
      </Grid>
    </List>
  );
}