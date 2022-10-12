import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent, Grid, Box } from '@material-ui/core';
import { getApi } from '../../services/ListApi';

const useStyles = makeStyles(theme => ({
  gridItem: {
    background: 'grey'
  },
  mainGrid: {
    marginTop: '15px'
  },
  mainImage: {
    width: '100%',
  },
  button: {
    background: 'blue',
    color: 'white'
  },
  detailButton: {
    display: 'flex',
    justifyContent: 'end'
  },
  mainHead: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  jumbutron: {
    background: 'rgb(169,184,195) 100%',
  },
  mainImage: {
    width: '100%',
    height:'365px'
  },
  jumbotron: {
    textAlign: 'center',
    color: 'white'
  },
  mainImages: {
    width:'100%'
  },
  homes: {
    backgroundColor:'rgb(0, 51, 157)',
    color:'white',
    marginTop:'-3px',
    marginLeft:'0px'
  },
  heads: {
    textAlign:'center',
    marginTop:'50px'
  },
  mainImagess: {
    width:'100%',
    height:'400px'
  }
}));
export default function Home({ open }) {
  const classes = useStyles();
  const banner = require("../../images/th.jpg")

  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getApi()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div>
      <Header /> 
        <Box className={classes.jumbutron}>
          <div className={classes.jumbotron}>
          </div>
          <img src={banner} className={classes.mainImagess} alt="Snow" />
          <Box className={classes.heads}>
          </Box>
        </Box>
        <Box className={classes.homes}>
        </Box>
        <Grid container spacing={4} className={classes.mainGrid}>
         {list.map((item) => 
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent key={item.item}>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>{item.rose_1.name}</Typography>
                </Box>
                <CardContent>
                  <img src={item.rose_1.image} className={classes.mainImages} />
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        )}
        </Grid>
        <Grid container spacing={4} className={classes.mainGrid} >
        {list.map((item) => 
            <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent key={item.item}>
                <Box className={classes.mainHead} >
                  <Typography variant='h5'>{item.rose_2.name}</Typography>
                </Box>
                <CardContent>
                  <img src={item.rose_2.image} className={classes.mainImages} />
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        )}
        </Grid>
    </div>
  );
}