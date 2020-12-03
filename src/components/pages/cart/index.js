import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from '../../Header1';
import Footer from '../../Footer';
import CartCard from '../../MuiComponents/CartCard';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import theme from '../../../styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '12px',
  },
  paper: {
    padding: theme.spacing(2),
    /* margin: 'auto', */
    maxWidth: 700,
  },
  image: {
    margin: 'auto',
    width: 256,
    height: 128,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Cart() {
  const classes = useStyles();

  const [rT, setRt] = useState(0);
  const [rA, setRa] = useState(0);

  var valor = rT * 3000 + rA * 3000;

  return (
    <>
      <Header />
      <Container style={{ height: '100vh' }} maxWidth="lg">
        <Typography style={{ fontSize: '2rem', marginBottom: '24px' }}>
          Carrinho de Compras
        </Typography>
        <div className={classes.root}>
          <Paper component="div" maxWidth="sm" className={classes.paper}>
            <Grid container spacing={2}>
              <Grid style={{ margin: 'auto' }} item>
                <Button className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="img/comodoro.webp"
                  />
                </Button>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Cruzeiro Pantanal
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Roteiro Terra
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Um roteiro cheio de descobertas e aventuras.
                    </Typography>
                  </Grid>
                  <Grid
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                    item
                  >
                    <Button
                      onClick={() => {
                        if (rT <= 0) {
                          setRt(0);
                        } else {
                          setRt(rT - 1);
                        }
                      }}
                      style={{ color: `${theme.palette.error.main}` }}
                      variant="outlined"
                      href="#outlined-buttons"
                    >
                      Remover
                    </Button>
                    <Button
                      onClick={() => setRt(rT + 1)}
                      variant="outlined"
                      color="primary"
                      href="#outlined-buttons"
                    >
                      Adicionar
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography style={{ lineHeight: '1' }} variant="subtitle1">
                    R$3000,00 <br />
                    <span style={{ fontSize: '0.7rem' }}> por pessoa</span>{' '}
                    {/* price */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper component="div" maxWidth="sm" className={classes.paper}>
            <Grid container spacing={2}>
              <Grid style={{ margin: 'auto' }} item>
                <Button className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="img/vip.webp"
                  />
                </Button>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Cruzeiro Pantanal
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Roteiro Água
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Um roteiro para contemplar as belezas do Pantanal.
                    </Typography>
                  </Grid>
                  <Grid
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                    item
                  >
                    <Button
                      onClick={() => {
                        if (rA <= 0) {
                          setRa(0);
                        } else {
                          setRa(rA - 1);
                        }
                      }}
                      variant="outlined"
                      style={{ color: `${theme.palette.error.main}` }}
                      href="#outlined-buttons"
                    >
                      Remover
                    </Button>
                    <Button
                      onClick={() => setRa(rA + 1)}
                      variant="outlined"
                      color="primary"
                      href="#outlined-buttons"
                    >
                      Adicionar
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography style={{ lineHeight: '1' }} variant="subtitle1">
                    R$3000,00 <br />
                    <span style={{ fontSize: '0.7rem' }}> por pessoa</span>{' '}
                    {/* price */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div
          style={{
            position: 'absolute',
            right: '0',
            top: '0',
            marginTop: '150px',
            marginRight: '32px',
            borderRadius: '8px',
            background: `${theme.palette.primary.main}`,
            color: `${theme.palette.secondary.light}`,
            width: '260px',
            height: '370px',
            padding: '12px',
          }}
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <h2>Sua sacola</h2>
            <ShoppingCartIcon />
          </header>

          {rA === 0 && rT === 0 && <span>Sua sacola está vazia</span>}

          <div style={{ marginTop: '12px' }} className="list">
            <div className="terra">
              <h3>Roteiro Terra</h3>
              <span>x {rT}</span>
            </div>
            <div className="agua">
              <h3>Roteiro Terra</h3>
              <span>x {rA}</span>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '0',
              marginBottom: '12px',
              fontSize: '1.3rem',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="payment"
          >
            <span style={{ marginBottom: '8px' }}>R$ {valor},00</span>

            <Button variant="contained" color="secondary">
              Efetuar Pagamento
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
