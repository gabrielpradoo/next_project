import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Header from '../../Header1';
import GridImages from '../../GridImages';
import Footer from '../../Footer';

import theme from '../../../styles/theme';

import { Container, Main, AboutUsCard } from './styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
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
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
  },
}));

export default function Vessels() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Header />

      <Main>
        <AboutUsCard>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src="/img/kayama.webp"
            alt=""
          />
          <div className="opacity">
            <div className="content">
              <div className="line"></div>
              <h2>Nossos Barcos</h2>
              <div className="line"></div>
            </div>
          </div>
        </AboutUsCard>
        <div id="appbar" className={classes.root}>
          <AppBar
            style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
            position="static"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Comodoro - Roteiro Terra" {...a11yProps(0)} />
              <Tab label="Vip - Roteiro Agua" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div
              style={{
                background: `${theme.palette.primary.main}`,
                padding: '12px',
                borderRadius: '8px',
              }}
              className="content"
            >
              <h2
                style={{
                  fontSize: '21px',
                  color: `${theme.palette.secondary.light}`,
                }}
              >
                Barco Hotel Comodoro
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: `${theme.palette.secondary.light}`,
                  fontWeight: '400',
                  marginBottom: '12px',
                  textAlign: 'justify',
                }}
              >
                Navegue com estilo e muito conforto a Joice Tur em um cruzeiro
                de Pesca Esportiva ou Ecoturismo a bordo do barco hotel
                COMODORO.<br></br> <br></br> O COMODORO é um barco moderno com
                15 cabines com sacada privativa, equipadas com cama box (casal
                ou solteiro), banheiro privativo, interfone, aparador de bagagem
                e roupa, perfeitas para hospedar de 16 a 30 passageiros. A
                embarcação, com acabamento clean, também oferece aos seus
                passageiros, 02 piscinas, restaurante, bar, sala de Cinema, sala
                de jogos, academia e telefonia via satélite.<br></br> <br></br>{' '}
                Agregando tecnologia, sustentabilidade, acessibilidade e
                segurança a sua viagem, o COMODORO é também equipado com
                elevador de acesso a todos os pavimentos, 02 cabines formatadas
                com metragem para hospedar passageiros com deficiência física ou
                mobilidade reduzida, e central de tratamento de água e esgoto.
                <br></br> <br></br>Pratique a Pesca Esportiva ou o Ecoturismo à
                bordo do COMODORO, e viva momentos inesquecíveis no Pantanal
                Sul-mato-grossense.
              </p>

              <ul>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Capacidade para hospedagem de 16 a 30 pessoas
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> 15 camarotes com varanda privativa
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Cabines para passageiros com deficiência
                  física ou mobilidade reduzida
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Restaurante com cardápio de comidas típicas
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Sala de Cinema
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Área estar
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Elevador de acesso a todos os decks
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Academia
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Restaurante e bar
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Sala de Jogos
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Deck panorâmico com bar, churrasqueira, 2
                  piscinas, banheiros e duchas
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Barcos de duralumínio de 06 mts. com motores
                  de 40 HP
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Estação de Tratamento de Água
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Estação de Tratamento de Esgoto
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Equipe de bordo preparado para melhor
                  atendê-lo
                </li>
              </ul>
            </div>
            <GridImages page="Comodoro" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div
              style={{
                background: `${theme.palette.primary.main}`,
                padding: '12px',
                borderRadius: '8px',
              }}
              className="content"
            >
              <h2
                style={{
                  fontSize: '21px',
                  color: `${theme.palette.secondary.light}`,
                }}
              >
                Barco Hotel Vip
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: `${theme.palette.secondary.light}`,
                  fontWeight: '400',
                  marginBottom: '12px',
                  textAlign: 'justify',
                }}
              >
                Desfrute do prazer de uma pescaria no Pantanal com o requinte e
                o conforto de um grande navio.
                <br /> <br />
                Agora a JoiceTur, mais do que nunca orgulha-se de poder dar a
                você um completo tratamento VIP, com um barco classe yatch,
                moderno, com amplo espaço e todo o conforto e a segurança
                necessária para uma viagem inesquecível pelo Pantanal
                Sul-Matogrossense.
                <br />
                <br /> O Barco VIP é um fantástico barco-hotel com capacidade de
                20 a 30 pessoas, confortavelmente instaladas com 12 camarotes ,
                cada um com 3 camas individuas baixas ,com ar-condicionado e com
                banheiro privativo.
                <br />
                <br /> E para melhor atender quando recebemos grupo de casal ,
                os 12 camarotes tem a possibilidade de montar uma cama de casal.
              </p>

              <ul>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Barco com capacidade de 20 a 30 pessoas
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> 12 camarotes com cama baixa
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Restaurante com cardápio de comidas típicas
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Sala com TV, DVD e som
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Deck panorâmico com churrasqueira, piscina e
                  ducha
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Barcos de duralumínio de 06 mts. com motores
                  de 40 HP
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Equipe de bordo preparado para melhor
                  atendê-lo.
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    color: `${theme.palette.secondary.main}`,
                  }}
                >
                  <small>»</small> Sistema de tratamento de água.
                </li>
              </ul>
            </div>
            <GridImages page="Vip" />
          </TabPanel>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}

/*   return (
    <Container>
      <Header />
      <Main>
        <AboutUsCard>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src="/img/kayama.webp"
            alt=""
          />
          <div className="opacity">
            <div className="content">
              <div className="line"></div>
              <h2>Nossos Barcos</h2>
              <div className="line"></div>
            </div>
          </div>
        </AboutUsCard>
      </Main>
      <Footer />
    </Container>
  );
};
 */
