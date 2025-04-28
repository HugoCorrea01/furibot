
# 🦁 FURIBOT – Chatbot para fãs da FURIA

## 🌎 Link do Projeto Online
🔗 [Acessar o FURIBOT Online](https://furibot.vercel.app/)

Projeto desenvolvido como parte do desafio técnico para o processo seletivo de estágio em Engenharia de Software na FURIA.

---

## 🎯 Visão geral

O **FURIBOT** é um chatbot interativo feito com React + Vite que oferece aos fãs da FURIA uma experiência divertida, informativa e personalizada. Ele conecta os torcedores com os dados reais de jogos, memes da comunidade, curiosidades do time e até o manto oficial da loja.

---

## ⚙️ Funcionalidades

- 📅 Consulta ao **próximo jogo** da FURIA (via API)
- 🏆 **Último resultado** com placar e série
- 📊 **Ranking de torneios** onde o time participou
- 🎲 **Jogo aleatório** (match aleatório do cenário competitivo)
- 🧠 **Fatos curiosos** sobre o time e jogadores
- 😂 **Memes personalizados**
- 🛒 **Loja oficial** com link clicável
- 🌍 **Multilíngue** (Português/Inglês)
- 🎖️ **Sistema de XP do torcedor**
  - Cada interação soma XP
  - Barra de progresso visual
  - Exibição de nível atual

---

## 🧠 Tecnologias utilizadas

- React + Vite
- Axios (para chamadas à API da [PandaScore](https://developers.pandascore.co/))
- CSS puro (visual dark + identidade FURIA)
- LocalStorage (persistência de XP)
- HTML seguro com `dangerouslySetInnerHTML`
- Git + GitHub para versionamento

---
🔐 Observação sobre APIs
O projeto usa integração com a API PandaScore para buscar dados reais de partidas de CS:GO.

Foi utilizado um token pessoal para fins acadêmicos e de desafio técnico.

🧠 Diferenciais Adicionados
Chat multilíngue (Português 🇧🇷 / Inglês 🇺🇸)

Sistema de gamificação de XP FURIOSO

Design responsivo, escuro e tematizado na identidade visual da FURIA

Mensagens interativas e experiência personalizada para o fã



## 📂 Estrutura do projeto

```bash
furibot/
├── src/
│   ├── components/
│   │   └── Chat.jsx
│   ├── services/
│   │   └── pandascoreApi.js
│   └── App.jsx
├── public/
├── Chat.css
└── README.md
```

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/furibot.git

# Acesse a pasta
cd furibot

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---


## 🧑‍💻 Autor

**Hugo Farranha**  
[LinkedIn](https://www.linkedin.com/in/hugo-farranha-843724268/) • [GitHub](https://github.com/hugocorrea01)

---

## 🦁 GL HF!

Esse projeto foi feito com  técnica e criatividade — focado em oferecer algo real para a comunidade FURIA. Obrigado pela oportunidade!
