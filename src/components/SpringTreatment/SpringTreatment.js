import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from '../Header/Header'
import lightGreen from '@material-ui/core/colors/lightGreen'
import purple from '@material-ui/core/colors/purple'
import background from '../../green-bg.png'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundImage : `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom'
  },
  main: {
    height: '100vh',
    backgroundImage : `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom'
  },

  indicator: {
    backgroundColor: purple[400],
  },
  tabs: {
    backgroundColor: lightGreen[500]
  },
  tab: {
    minWidth: '25%',

  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      <Header />
      <AppBar position="static" >
        <Tabs value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              className={classes.tabs}
               // indicatorColor= {lime[800]}
              indicatorColor="primary"
              classes={{
                indicator: classes.indicator
              }}
        >
          <Tab label="Ранней весной  +5°С" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="По зеленому конусу" {...a11yProps(1)} className={classes.tab}/>
          <Tab label="По розовому бутону(цветочные почки не  раскрыты)" {...a11yProps(2)} className={classes.tab}/>
          <Tab label="После цветeния" {...a11yProps(3)} className={classes.tab}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <p>а)Мочевина</p>
        <p>б)Бордоская смесь 3%</p>
       </TabPanel>
      <TabPanel value={value} index={1}>
        <p>а)Бордоская смесь 1%</p>
        <p>б)Хорус +5° + Актара</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>а) Хорус +5° или Скор +14° + Актара</p>
        <p>б)Хорус +5° или Скор +14° + Децис</p>
        <p>в) Хорус +5° + Скор +14° + Калипсо</p>
        <p>г)Конфидор Макси + Топаз%</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>а) Хорус +5° или Скор +14° + Актара</p>
        <p>б)Хорус +5° или Скор +14° + Децис</p>
        <p>в) Хорус +5° + Скор +14° + Калипсо</p>
        <p>г)Конфидор Макси + Топаз%</p>
      </TabPanel>
    </div>
  );
}
