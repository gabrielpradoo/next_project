import React from 'react';
import Link from 'next/link';
import Header from '../../Header1';
import Footer from '../../Footer';

import { FaFacebookF, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

import { ImNewspaper, ImTrophy, ImQuestion, ImHeart } from 'react-icons/im';

import { Container, Main, AboutUsCard, OurHistoryCard, Cards } from './styles';

const About = () => {
  return (
    <Container>
      <Header />
      <Main>
        <AboutUsCard>
          <div className="opacity">
            <div className="social">
              <h3>Siga nossas redes sociais</h3>
              <span>#cruzeiropantanal</span>
              <div className="social-btns">
                <a
                  className="on-map"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/user/joicetur"
                >
                  <FaYoutube color={'#f1f1f1'} size={30} />
                </a>
                <a
                  className="on-map"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/joicetur/"
                >
                  <FaInstagramSquare color={'#f1f1f1'} size={30} />
                </a>
                <a
                  className="on-map"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/joicetur"
                >
                  <FaFacebookF color={'#f1f1f1'} size={30} />
                </a>
              </div>
            </div>
            <div className="line"></div>
            <h2>Sobre Nós</h2>
            <div className="line"></div>
          </div>
        </AboutUsCard>
        <OurHistoryCard>
          <div className="history-content">
            <div className="content-head">
              <h3>Nossa História</h3>
            </div>

            <p>
              A empresa JOICE PESCA E TUR é uma operadora receptiva
              especializada em cruzeiro de Pesca Esportiva e Ecoturismo, atuando
              no mercado desde o ano 2000, na região do Pantanal, em Corumbá no
              estado de Mato Grosso do Sul.
              <br />
              <br />
              Com uma equipe de trabalho que se destaca no atendimento e na
              competência dos serviços prestados e com uma frota de barco-hóteis
              modernos, adaptados a geografia do Pantanal e sob medida para o
              seu perfil de viagem, possuímos todo o know-how para fazer de sua
              viagem de pesca esportiva ou ecoturismo, uma experiência
              agradável, emocionante e inesquecível.
            </p>
          </div>
          <div className="history-img">
            {/* <Image src="/img/corumba-aereo.webp" width={800} height={600} /> */}
          </div>
        </OurHistoryCard>
        <Cards>
          <div className="generic">
            <div className="generic-head">
              <label>Notícias</label>
              <ImNewspaper size={45} color="#FFBA00" />
            </div>

            <div className="generic-content">
              <span>
                Veja Notícias, informações e anúncios sobre nossas embarcações
              </span>
              <h4>Postagens Recentes</h4>
              <data>06/11/2020</data>

              <p>
                A simplificação e a redução do volume e peso de uma tralha de
                pesca são seempre motivo de atenção para os pescadores
                esportivos, sejam veteranos ou novatos. Quando se trata de
                pesccarias a longa distância, como as do Pantanal, incluindo
                tranporte aéreo, a viagem merece um pouco de planejamento e uma
                escolha sensata da tralha. Observando e pondo em prática o que
                aprendi, cheguei a uma relação básica, de quais equipamentos
                levar para umaa pescaria...
              </p>
            </div>

            <Link href="/">
              <a>Ver mais</a>
            </Link>
          </div>
          <div className="generic">
            <div className="generic-head">
              <label>Premios e Elogios</label>
              <ImTrophy size={45} color="#FFBA00" />
            </div>

            <div className="generic-content">
              <span>
                Veja os comentários de clientes que fizeram reservas em nossos
                barcos e sentiram o que o Cruzeiro Pantanal tem a oferecer!
              </span>

              <data>Angela Barbosa - 18/09/2020</data>
              <p>
                Escolhi fazer uma reserva no Cruzeiro Pantanal porque uma amiga
                minha me recomendou e não me arrependo da escolha, foram as
                melhores férias que eu já tive! pode apostar que ano que vem eu
                to aqui de volta!
              </p>

              <data>Valquiria Barros - 08/07/2020</data>
              <p>
                Eu não sei por onde começar... Pescaria de tirar o fôlego! Uma
                gastronomia de dar água na boca, Cruzeiro Pantanal é uma
                verdadeira...
              </p>
            </div>
            <Link href="/">Ver mais</Link>
          </div>
          <div className="generic">
            <div className="generic-head">
              <label>Perguntas Frequentes (FAQ)</label>
              <ImQuestion size={45} color="#FFBA00" />
            </div>

            <div className="generic-content">
              <h4>
                Essas são algumas das perguntas mais constantes que são enviadas
                ao nosso e-mail:
              </h4>

              <span>Onde está localizado o Cruzeiro Pantanal?</span>
              <p>
                Nosso endereço é Manoel Cavassa, 331 - Porto Geral - Corumbá/MS
                - CEP: 79301-120
              </p>

              <p>O que o roteiro do cruzeiro oferece?</p>
              <p>
                O roteiro de turismo do cruzeiro pantanal oferece a essência do
                que é ser um cidadão pantaneiro, temos atividades desde Pesca
                com profissionais qualificados até turismo em solo.
              </p>

              <p>Como funcionam as reservas do Cruzeiro Pantanal?...</p>
            </div>
            <Link href="/">Ver mais</Link>
          </div>
          <div className="generic">
            <div className="generic-head">
              <label>Base da Empresa</label>
              <ImHeart size={45} color="#FFBA00" />
            </div>

            <div className="generic-content">
              <h4>Missão</h4>
              <p>
                "A empresa tem como missão conquistar não só clientes, mas
                grande amigos."
              </p>

              <h4>Visão</h4>
              <p>
                "Ser referência pela qualidade dos produtos, serviços e
                relacionamentos com clientes e funcionários."
              </p>

              <h4>Valores</h4>
              <p>
                "Presamos pela segurança, respeito e solidariedade, nós do
                Cruzeiro Pantanal somos mais que funcionários, somos uma
                família"
              </p>
            </div>
            <Link href="/">Ver mais</Link>
          </div>
        </Cards>
      </Main>
      <Footer />
    </Container>
  );
};

export default About;
