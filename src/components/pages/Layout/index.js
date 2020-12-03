import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import theme from '../../../styles/theme';
import MenuIcon from '@material-ui/icons/Menu';

import { Container } from './styles';

const useStyles = makeStyles({
  list: {
    width: 250,
    background: `${theme.palette.primary.light}`,
  },
  fullList: {
    width: 'auto',
    background: `${theme.palette.primary.light}`,
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [session, loading] = useSession();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      id="list"
      style={{ background: `${theme.palette.primary.light}`, height: '100%' }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1
        style={{
          maxWidth: '210px',
          width: '100%',
          height: 'auto',
          margin: 'auto',
        }}
      >
        <Link href="/">
          <a>
            <img
              style={{
                maxWidth: '210px',
                width: '100%',
                height: '100%',
                padding: '12px 0',
              }}
              src="/img/logocruzeiro.png"
              alt="logo"
            />
          </a>
        </Link>
      </h1>

      <Divider />
      {!session && (
        <div
          className="nSigned"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '24px',
          }}
        >
          <Typography
            variant="body1"
            style={{ color: theme.palette.secondary.light }}
          >
            {' '}
            Faça o Login{' '}
          </Typography>{' '}
          <br />
          <Button
            onClick={() => signIn('auth0')}
            variant="contained"
            color="secondary"
            style={{ color: 'white' }}
          >
            Compre Agora
          </Button>
        </div>
      )}
      {session && (
        <div
          style={{ padding: '12px', display: 'flex', flexDirection: 'column' }}
          className="signed"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}
            className="log-in"
          >
            <p style={{ color: 'white' }}>
              Olá <strong>{session.user.name}</strong>
            </p>
            <Avatar alt="Avatar" src={session.user.image} />
          </div>

          <Button
            variant="contained"
            color="secondary"
            style={{ color: 'white', marginBottom: '12px' }}
          >
            <Link href="/carrinho">
              <a
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                Faça sua reserva
              </a>
            </Link>
          </Button>

          <Button
            onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
            variant="contained"
            color="secondary"
            style={{ color: 'white' }}
          >
            Sair
          </Button>
        </div>
      )}
      <Divider />
      <List>
        <ListItem>
          <Link href="/">
            <a
              style={{
                textDecoration: 'none',
                color: `${theme.palette.secondary.light}`,
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
            >
              Página Inicial
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/sobre">
            <a
              style={{
                textDecoration: 'none',
                color: `${theme.palette.secondary.light}`,
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
            >
              Sobre Nós
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/experiencia">
            <a
              style={{
                textDecoration: 'none',
                color: `${theme.palette.secondary.light}`,
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
            >
              A Experiencia
            </a>
          </Link>
        </ListItem>

        {/* <ListItem>
          <Link href="/embarcacoes">
            <a
              style={{
                textDecoration: 'none',
                color: `${theme.palette.secondary.light}`,
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
            >
              Nossos Barcos
            </a>
          </Link>
        </ListItem> */}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link href="/terra">
            <a
              style={{
                textDecoration: 'none',
                color: `${theme.palette.secondary.light}`,
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
            >
              Roteiro Terra
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/agua">
            <a
              style={{
                textDecoration: 'none',
                color: `${theme.palette.secondary.light}`,
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
            >
              Roteiro Água
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/barcos">
            <a
              style={{
                textDecoration: 'none',
                color: `${theme.palette.secondary.light}`,
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
            >
              Nossos Barcos
            </a>
          </Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon style={{ color: `${theme.palette.secondary.main}` }} />
        </Button>
        <h1
          style={{
            maxWidth: '210px',
            width: '100%',
            height: 'auto',
            margin: 'auto',
          }}
        >
          <Link href="/">
            <a>
              <img
                style={{
                  maxWidth: '210px',
                  width: '100%',
                  height: 'auto',
                  padding: '8px 0',
                }}
                src="/img/logocruzeiro.png"
                alt="logo"
              />
            </a>
          </Link>
        </h1>
      </div>

      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {list('left')}
      </SwipeableDrawer>
    </Container>
  );
}
