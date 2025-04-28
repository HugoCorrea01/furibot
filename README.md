
# 🦁 FURIBOT – Chatbot para fãs da FURIA

## 🌎 Link do Projeto Online
🔗 [Acessar o FURIBOT Online](https://furibot.vercel.app/)

Projeto desenvolvido como parte do desafio técnico para o processo seletivo de Estágio em Engenharia de Software da FURIA.

---

## 🎯 Visão Geral

O **FURIBOT** é um chatbot interativo feito com **React + Vite** que oferece aos fãs da FURIA uma experiência divertida, informativa e personalizada.  
Ele conecta os torcedores com dados reais de jogos, memes da comunidade, curiosidades do time e até o manto oficial da loja.

---

## ⚙️ Funcionalidades

- 📅 Consulta ao **próximo jogo** da FURIA (via API PandaScore)
- 🏆 Consulta do **último resultado** com placar e campeonato
- 📊 Exibição do **ranking de torneios** da FURIA
- 🎲 **Jogo aleatório** do cenário competitivo
- 🧠 **Fatos curiosos** sobre o time e jogadores
- 😂 **Memes personalizados** para diversão da torcida
- 🛒 Acesso à **loja oficial** da FURIA com link direto
- 🌍 **Multilíngue**: suporte a Português 🇧🇷 e Inglês 🇺🇸
- 🎖️ **Sistema de XP FURIOSO**:
  - Cada interação soma XP
  - Barra de progresso visual
  - Exibição do nível de torcedor

---

## 🧠 Tecnologias Utilizadas

- **React + Vite**
- **Axios** (para consumo da API [PandaScore](https://developers.pandascore.co/))
- **CSS puro** (tema escuro + identidade visual FURIA)
- **LocalStorage** (persistência de XP e progresso)
- **HTML seguro** (`dangerouslySetInnerHTML` no React)
- **Git + GitHub** para versionamento de código

---

## 🔐 Observações sobre API

- Integração com a **API PandaScore** para dados reais de partidas de CS:GO.
- Foi utilizado um **token pessoal** para fins acadêmicos e de desafio técnico.

---

## 🚀 Diferenciais Adicionados

- **Chat multilíngue** (Português 🇧🇷 / Inglês 🇺🇸)
- **Sistema de gamificação** (XP FURIOSO e níveis de torcedor)
- **Design responsivo e tematizado** inspirado na identidade da FURIA
- **Mensagens interativas** para engajamento do fã

---

## 📂 Estrutura do Projeto

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

## 💻 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/furibot.git

# Acesse a pasta do projeto
cd furibot

# Instale as dependências
npm install

# Rode o projeto em ambiente de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173/`.

---

## 🧑‍💻 Autor

**Hugo Farranha**  
[LinkedIn](https://www.linkedin.com/in/hugo-farranha-843724268/) • [GitHub](https://github.com/HugoCorrea01)

---

## 🦁 GL HF!

Este projeto foi feito com técnica e criatividade, focado em oferecer uma experiência real para a comunidade FURIA.  
**Obrigado pela oportunidade!** 🦁🔥
