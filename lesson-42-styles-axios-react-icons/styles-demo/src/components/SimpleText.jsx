import { createUseStyles } from 'react-jss';

const isDarkTheme = true;
const companyColor = '#ff4d00';

const useStyles = createUseStyles({
  prettyGradient: {
    padding: '10px 20px',
    background: isDarkTheme ? 'linear-gradient(90deg, blue, red)' : 'yellow',
    border: `1px solid ${companyColor}`,
    borderRadius: '5px',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(90deg, red, blue)',
    },
  },
  label: {
    fontStyle: 'italic',
  },
});

export default function SimpleText() {
  const classes = useStyles();

  return (
    <div className={classes.prettyGradient}>
      I'm Simple Text Component
    </div>
  )
}