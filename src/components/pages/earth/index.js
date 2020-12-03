import React from 'react';
import Link from 'next/link';
import Header from '../../Header1';
import GridImages from '../../GridImages';
import Footer from '../../Footer';

import { Container, HeaderImg, Main, Description } from './styles';
import Cards from '../../Cards';

const Earth = () => {
  const world = 'Roteiro Terra';
  return (
    <Container>
      <Header />
      <HeaderImg>
        <img
          src="/img/terra/comodoro.webp"
          alt="Navio Comodoro"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="opacity">
          <div className="content">
            <div className="line"></div>
            <h2>{world}</h2>
            <div className="line"></div>
          </div>
        </div>
      </HeaderImg>

      <Main>
        <h3>
          Um Roteiro pra você que busca conhecer o Pantanal cheio de Aventuras.
        </h3>

        <p>
          São <strong>cinco dias</strong> de conhecimento e descobertas
          radicais.
        </p>

        <Cards />

        <Description>
          <section className="description">
            <h3>Descrição</h3>

            <p>
              Nessa viagem você vai navegar pelo rio Paraguai a bordo de um
              Cruzeiro com tratamento VIP, em barco classe yatch, moderno e com
              amplo espaço. Durante a viagem, você irá fazer passeios
              inesquecíveis como a Fazenda São João, uma autêntica fazenda
              pantaneira, que oferece passeio a cavalo e caminhadas em pleno
              Pantanal. No pacote ainda está incluso o City Tour em Corumbá, uma
              cidade criativa e autêntica em todos os aspectos culturais, onde
              você poderá saborear os quitutes típicos do Paraguai e Bolívia.
              Prepare-se para um show de paisagens e lindos pores do sol.
              Incluso Hospedagem em Corumbá, 3 Diárias no cruzeiro com pensão
              completa, 6 passeios, Transporte para as atividades e Seguro
              Viagem
            </p>
          </section>

          <section className="script">
            <h3>Roteiro</h3>

            <p>
              <strong>
                1º DIA - Chegada a Corumbá – Transfer do Aeroporto para o Hotel
              </strong>{' '}
              <br />
              Encontro no desembarque do Aeroporto, no horário de chegada do seu
              voo, para transporte até o Hotel
              <br />
              Fim de tarde e noite livre.
              <br />
              <br />
              <strong>2º DIA - Corumbá – Pantanal – Mato Grosso do Sul</strong>
              <br />
              Após o café da manhã malas prontas na recepção às 08:00hs
              <br />
              Saída às 08:30 hs com City Tour em Corumbá / Bolívia. Almoço
              incluso (não inclui bebidas) <br />
              14:00h Check–in no Barco Hotel no Porto Geral de Corumbá -MS
              <br />
              16:00h Partida - Navegação no rio Paraguai águas abaixo. Pôr do
              Sol no deck.
              <br />
              19:30h Jantar de boas vindas no restaurante
              <br />
              21:00 as 22:00hs – Focagem de Jacaré Noturno <br />
              <br />
              <strong>3º DIA - Estrada Parque Pantanal Sul</strong>
              <br />
              Após café da manhã, desembarque às 07:00h e descolamento pela
              Estrada Parque em carro aberto com um percurso de 35 km de estrada
              para “safári fotográfico”. Chegando a Fazenda São João onde
              encontraremos uma autêntica sede de fazenda pantaneira. Podendo
              ali andar a cavalo ou fazer caminhada em plena natureza.
              Apreciaremos um verdadeiro almoço pantaneiro (bebidas não
              incluídas).
              <br />
              • Retorno da fazenda para o Barco às 13:30h.
              <br />
              • Embarque, atividade livre, Jantar
              <br />
              <br />
              <strong>4º DIA - Pantanal das Aguas</strong>
              <br />
              Após o café da manhã, nossa aventura começará às 07:00hr em botes,
              em um braço do Rio Paraguai, conhecido como Paraguai Mirim e
              Negrinho. Lá você irá conhecer e descobrir as belezas do Pantanal.
              A nossa equipe, com instrutores capacitados fará com que nosso
              passeio seja simplesmente inesquecível. Nossa atividade encerra
              com um almoço e descanso pela tarde. Após esta inédita
              experiência, regresso ao Barco Hotel para contemplação do por do
              sol.
              <br />
              Tarde livre.
              <br />
              Navegação com destino ao Porto Geral de Corumbá e jantar.
              <br />
              <br />
              <strong>5º DIA - Retorno ao destino de Origem</strong>
              <br />
              Amanheceremos ancorados em Corumbá, após o café da manhã, o nosso
              último dia na capital do Pantanal.
              <br />
              Transfer disponível até as 12h do Porto até o Aeroporto de Corumbá
            </p>
          </section>

          <section className="what_is_included">
            <h3>O que está incluso</h3>
            <p>
              - Transfer Aeroporto/Hotel e Porto/Aeroporto
              <br />- 01 diária de hospedagem com café da manhã na cidade de
              Corumbá no Hotel Nacional.
              <br />- 03 diárias de hospedagem com pensão completa no barco
              selecionado: café da manhã, almoço e jantar
              <br />- Bebidas alcoólicas à bordo com consumação livre: cerveja
              (brahma, skol ou antártica), caipirinha, caipivodka, wisky 8 anos,
              vinho tinto, vinho branco, Campari, Martini e coquetéis.
              <br />- Bebidas não alcoólicas à bordo com consumação livre:
              refrigerante guaraná antártica (normal e zero), coca cola (normal
              e zero) e água mineral com e sem gás.
              <br />- Atividades: circuito histórico cultural em Corumbá com
              opcional de tour de compras na Bolívia, focagem noturna de
              jacarés, safári terrestre fotográfico pela estrada parque pantanal
              sul e passeio fluvial em barcos motor 40hp com parada para
              experiência de banho de rio.
              <br />- Atividades opcionais: cavalgada e caminhada após o safári
              terrestre, remada de caiaque após o passeio de fluvial.
              <br />- Acompanhamento de guia a bordo e em todos as atividades.
              <br />- Transporte e equipamentos para todas as atividades da
              programação.
              <br />- Seguro viagem para cobertura de sinistros durante o
              programa do Cruzeiro.
            </p>
          </section>

          <section className="what_is_not_included">
            <h3>O que não está incluso</h3>

            <p>
              - Taxa de Embarque + Seguro = R$ 72,00 por pessoa (pago no momento
              da reserva)
              <br />- Acompanhamento de guia bilíngue.
              <br />- Transporte aéreo até Corumbá
              <br />- Telefonemas via telefone por satélite R$ 20,00 o minuto{' '}
              <br />- Estacionamento R$ 20,00 por dia (área coberta) <br />-
              Bebidas nas Refeições no Rodeio e na Fazenda São João
            </p>
          </section>

          <section className="what_to_bring">
            <h3>O que levar</h3>
            <div>
              <p>
                - Roupas Leves de cores claras, confortáveis e adequadas ao
                Pantanal: calças Largas e confortáveis, camisetas de manga curta
                e longa
                <br />- Trajes de banho e bons calçados para praticar trilhas
                <br />- Máquina Fotográfica
                <br />- Chapéus, Boné, Capa de chuva <br />- Protetor Solar,
                Repelentes
                <br />- Remédios de seu uso pessoal
                <br />- Cantil, Garrafa para levar água durante os passeios
              </p>
            </div>
          </section>
        </Description>
        <GridImages page="Terra" />

        <Link href="https://www.instagram.com/joicetur/">
          <a
            className="on-map"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/joicetur/"
            style={{
              fontWeight: 700,
              textDecoration: 'none',
              color: '#0060df',
            }}
          >
            Veja mais no nosso instagram {'>>'}
          </a>
        </Link>
      </Main>

      <Footer />
    </Container>
  );
};

export default Earth;
