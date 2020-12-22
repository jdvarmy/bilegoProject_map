import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

// eslint-disable-next-line import/prefer-default-export
export const PlusMinusElementsSet = () => {
  const classes = useStyles();

  const onClickCb = (flag) => () => {
    console.log(flag);
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={onClickCb(true)} color="primary">
        <AddIcon />
      </IconButton>
      <IconButton onClick={onClickCb(false)} color="primary">
        <RemoveIcon />
      </IconButton>
    </div>
  );
};
