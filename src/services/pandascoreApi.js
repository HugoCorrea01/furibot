import axios from 'axios';

const TOKEN = 'YMg_fm6k9FBUhkvBI7hFB2Z7UNHsBRXBtG4-z2HJv5WsE2122dg'; // <-- Substituir pelo seu
const API_URL = 'https://api.pandascore.co/csgo';

export const getProximoJogoFuria = async () => {
    try {
      const res = await axios.get(
        'https://api.pandascore.co/csgo/matches/upcoming?filter[opponent_id]=124530&sort=begin_at',
        {
            headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );
  
      const jogos = res.data;
  
      const jogo = jogos.find(match =>
        match.opponents?.length === 2 &&
        match.opponents[0].opponent &&
        match.opponents[1].opponent &&
        match.begin_at
      );
  
      if (!jogo) return null;
  
      const time1 = jogo.opponents[0].opponent.name;
      const time2 = jogo.opponents[1].opponent.name;
  
      const data = new Date(jogo.begin_at).toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short'
      });
  
      return {
        time1,
        time2,
        data,
        serie: jogo.serie?.full_name || 'Campeonato não informado'
      };
    } catch (err) {
      console.error('Erro ao buscar próximo jogo da FURIA:', err);
      return null;
    }
  };
  

export const getUltimoResultadoFuria = async () => {
    try {
      const res = await axios.get(
        'https://api.pandascore.co/csgo/matches?filter[opponent_id]=124530&sort=-begin_at',
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );
  
      const jogos = res.data;
  
      // ✅ Filtro aprimorado: jogo com data válida e 2 oponentes definidos
      const jogo = jogos.find(match =>
        match.begin_at &&
        match.opponents?.length === 2 &&
        match.opponents[0].opponent &&
        match.opponents[1].opponent
      );
  
      if (!jogo) return null;
  
      const time1 = jogo.opponents[0].opponent.name;
      const time2 = jogo.opponents[1].opponent.name;
      const vencedor = jogo.winner ? jogo.winner.name : null;
      const resultado = vencedor
        ? (vencedor.toLowerCase().includes('furia') ? 'vitória' : 'derrota')
        : 'resultado não disponível';
  
      const data = jogo.begin_at
        ? new Date(jogo.begin_at).toLocaleDateString('pt-BR')
        : 'Data não disponível';
  
      return {
        time1,
        time2,
        resultado,
        data,
        serie: jogo.serie?.full_name || 'Campeonato não informado'
      };
    } catch (err) {
      console.error('Erro ao buscar jogo da FURIA:', err);
      return null;
    }
  };

  export const getTorneiosFuria = async () => {
    try {
      const res = await axios.get(
        'https://api.pandascore.co/csgo/matches?filter[opponent_id]=124530&sort=-begin_at',
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );
  
      const torneios = res.data
        .filter(match => match.serie && match.tournament)
        .map(match => ({
          nome: match.tournament.name,
          serie: match.serie.full_name,
          status: match.status
        }));
  
      // Remove duplicados por nome de torneio
      const unicos = [];
      const nomes = new Set();
  
      for (const t of torneios) {
        if (!nomes.has(t.nome)) {
          nomes.add(t.nome);
          unicos.push(t);
        }
      }
  
      return unicos.slice(0, 5); // Mostra os 5 mais recentes
    } catch (err) {
      console.error('Erro ao buscar torneios da FURIA:', err);
      return null;
    }
  };
  
  
  

export const getJogoAleatorio = async () => {
    try {
      const res = await axios.get(`${API_URL}/matches/upcoming`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      });
  
      // Filtrar jogos com dois times definidos
      const jogosValidos = res.data.filter(
        jogo => jogo.opponents.length === 2 &&
                jogo.opponents[0].opponent &&
                jogo.opponents[1].opponent
      );
  
      if (jogosValidos.length === 0) return null;
  
      // Sorteia um jogo entre os válidos
      const index = Math.floor(Math.random() * jogosValidos.length);
      const jogo = jogosValidos[index];
  
      return {
        time1: jogo.opponents[0].opponent.name,
        time2: jogo.opponents[1].opponent.name,
        data: new Date(jogo.begin_at).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }),
        serie: jogo.serie.full_name
      };
    } catch (err) {
      console.error('Erro ao buscar jogo aleatório:', err);
      return null;
    }
  };
  