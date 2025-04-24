
import React, { useState } from 'react';
import './Chat.css';
import {
  getProximoJogoFuria,
  getJogoAleatorio,
  getUltimoResultadoFuria,
  getTorneiosFuria
} from '../services/pandascoreApi';

export default function Chat() {
  const [mensagens, setMensagens] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [etapa, setEtapa] = useState('boasvindas');
  const [pergunta, setPergunta] = useState('');
  const [idioma, setIdioma] = useState('pt');
  const [xp, setXp] = useState(() => Number(localStorage.getItem('xp')) || 0);
  const nivel = Math.floor(xp / 10);
  
  const t = (pt, en) => (idioma === 'pt' ? pt : en);

  const opcoes = [
    t('📅 Próximo jogo', '📅 Next match'),
    t('🏆 Último resultado', '🏆 Last result'),
    t('🧠 Fato curioso', '🧠 Fun fact'),
    t('😂 Manda um meme', '😂 Send a meme'),
    t('🛒 Loja oficial', '🛒 Official store'),
    t('📊 Ranking de torneios', '📊 Tournament ranking'),
    t('🎲 Me mostra um jogo aleatório', '🎲 Show me a random match')
  ];

  const handleOpcao = async (opcao) => {
    let resposta = '';
    const novoXp = xp + 1;
    setXp(novoXp);
    localStorage.setItem('xp', novoXp);
    
    if (opcao.includes('📅')) {
      const jogo = await getProximoJogoFuria();
      resposta = jogo
        ? t(
            `🎯 FURIA enfrenta ${jogo.time1.includes('FURIA') ? jogo.time2 : jogo.time1} em ${jogo.data} – ${jogo.serie}`,
            `🎯 FURIA faces ${jogo.time1.includes('FURIA') ? jogo.time2 : jogo.time1} on ${jogo.data} – ${jogo.serie}`
          )
        : t(
            '📅 A FURIA ainda não tem o próximo jogo confirmado. Mas fica ligado, porque vem pedrada por aí! 💥',
            '📅 No upcoming FURIA matches found. Stay tuned — something big might be coming! 💥'
          );
    } else if (opcao.includes('🏆')) {
      const result = await getUltimoResultadoFuria();
      resposta = result
        ? t(
            `🏆 Último jogo da FURIA: ${result.time1} vs ${result.time2} em ${result.data} – ${result.serie}. Resultado: ${result.resultado.toUpperCase()}`,
            `🏆 FURIA’s last match: ${result.time1} vs ${result.time2} on ${result.data} – ${result.serie}. Result: ${result.resultado.toUpperCase()}`
          )
        : t(
            '😕 Não encontrei nenhum jogo passado da FURIA.',
            '😕 No recent FURIA matches found.'
          );
    } else if (opcao.includes('🧠')) {
      const fatos = idioma === 'pt'
        ? [
            "🔍 A FURIA foi o primeiro time brasileiro a abrir uma gaming house nos EUA!",
            "👨‍🏫 FalleN, além de player, é professor — ele treinava os novatos no CS 1.6!",
            "🦁 O mascote da FURIA é inspirado no instinto animal da equipe: agressividade com inteligência.",
            "📈 A FURIA já alcançou o TOP 3 do mundo no ranking da HLTV!",
            "🎯 O KSCERATO já foi eleito o rifler mais consistente da América do Sul."
          ]
        : [
            "🔍 FURIA was the first Brazilian team to open a gaming house in the USA!",
            "👨‍🏫 FalleN is also a teacher — he used to train newcomers in CS 1.6!",
            "🦁 The FURIA mascot is inspired by the team’s animal instinct: aggressive and smart.",
            "📈 FURIA reached the TOP 3 in the HLTV world ranking!",
            "🎯 KSCERATO has been considered one of the most consistent riflers in South America."
          ];
      resposta = `🧠 ${fatos[Math.floor(Math.random() * fatos.length)]}`;
    } else if (opcao.includes('😂')) {
      const memes = idioma === 'pt'
        ? [
            "🧠 FalleN modo professor: 'Vamos trabalhar esse posicionamento aí!'",
            "🎯 arT no pistol: 'Rush B sem medo e sem smokes!'",
            "🔥 KSCERATO sprayando 3 e ainda chamando pra mais"
          ]
        : [
            "🧠 FalleN in teacher mode: 'Let’s work on that positioning!'",
            "🎯 arT on pistol round: 'Rush B no smokes!'",
            "🔥 KSCERATO gets 3 kills and still asks for more"
          ];
      resposta = `😂 ${memes[Math.floor(Math.random() * memes.length)]}`;
    } else if (opcao.includes('🛒')) {
      resposta = t(
        `🛍️ Quer vestir o manto sagrado da FURIA? Corre na loja oficial:<br><br>
        👉 <a href="https://www.furia.gg/produtos" target="_blank" rel="noopener noreferrer" style="color:#fff;font-weight:bold;">loja.furia.gg</a>`,
        `🛍️ Want to wear the sacred FURIA jersey? Check out the official store:<br><br>
        👉 <a href="https://www.furia.gg/produtos" target="_blank" rel="noopener noreferrer" style="color:#fff;font-weight:bold;">furia.gg/shop</a>`
      );
    } else if (opcao.includes('📊')) {
      const torneios = await getTorneiosFuria();
      if (torneios && torneios.length) {
        const texto = torneios.map((t, i) =>
          `${i + 1}. ${t.nome} (${t.serie}) - Status: ${t.status}`
        ).join('<br>');
        resposta = t(`📊 Últimos torneios da FURIA:<br><br>${texto}`, `📊 Latest FURIA tournaments:<br><br>${texto}`);
      } else {
        resposta = t('😕 Não encontrei torneios recentes da FURIA.', '😕 No recent FURIA tournaments found.');
      }
    } else if (opcao.includes('🎲')) {
      const jogo = await getJogoAleatorio();
      resposta = jogo
        ? t(
            `🎮 Jogo aleatório: ${jogo.time1} vs ${jogo.time2} em ${jogo.data} – ${jogo.serie}`,
            `🎮 Random match: ${jogo.time1} vs ${jogo.time2} on ${jogo.data} – ${jogo.serie}`
          )
        : t('😕 Não consegui puxar um jogo agora.', '😕 Could not fetch a match now.');
    }

    setMensagens(prev => [
      ...prev,
      { from: 'user', text: opcao },
      { from: 'bot', text: `${usuario || '👤'}: ${resposta}` }
    ]);
  };

  return (
    <div className="chat-container">
      <button onClick={() => setIdioma(idioma === 'pt' ? 'en' : 'pt')} className="lang-button">
        {idioma === 'pt' ? '🇺🇸 Switch to English' : '🇧🇷 Trocar para Português'}
      </button>

      {etapa === 'boasvindas' ? (
        <div className="boasvindas-container">
          <h2 className="furibot-title">👋 {t('Bem-vindo ao', 'Welcome to')} <span className="furia">FURIBOT</span>!</h2>
          <p className="furibot-sub">{t('Qual seu nome, FURIOSO(A)?', 'What’s your name, FURIOUS one?')}</p>
          <input
            placeholder={t("Digite seu nome", "Enter your name")}
            className="furibot-input"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                setUsuario(e.target.value);
                setMensagens([
                  { from: 'bot', text: t(
                    `Salve, ${e.target.value}! O que você quer saber hoje? 😎`,
                    `Hey, ${e.target.value}! What do you want to know today? 😎`
                  ) }
                ]);
                setEtapa('chat');
              }
            }}
          />
        </div>
      ) : (
        <>
        <div className="xp-info">
  🔥 {t('Nível', 'Level')} {nivel} – {t('Torcedor furioso', 'Furious fan')}
</div>
<div className="xp-bar-container">
  <div
    className="xp-bar-fill"
    style={{ width: `${(xp % 10) * 10}%` }}
  ></div>
</div>


          <div className="chat-box">
            {mensagens.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.from}`}>
                <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br>') }} />
              </div>
            ))}
          </div>

          <div className="chat-options">
            {opcoes.map((opcao, index) => (
              <button key={index} onClick={() => handleOpcao(opcao)}>
                {opcao}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
