import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  button: {
    color: '#ed4614',
  },
  fab: {
    backgroundColor: '#ed4614',
    color: 'white',
    "&:hover": {
      backgroundColor: '#ed4614',
      transform: 'scale(1.05)',
    },
  },
  title: {
    width: '600px',
    "& .MuiTypography-h6": {
      fontSize: '1.5rem',
      fontWeight: '700',
      fontFamily: 'Noto Sans KR Light',
    },
  },
  textField: {
    "& .Mui-focused": {
      color: '#ed4614',
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: '#ed4614',
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#ed4614',
    },
    caretColor: '#ed4614',
    margin: '5px 30px',
  },
});