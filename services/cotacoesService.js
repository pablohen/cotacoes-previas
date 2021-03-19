import axios from 'axios';

const apiURL = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://serv42.limeira.sp.gov.br/requisicaoCompras/dadosCotacoes/dadosCotacoes.php';
  }
  return 'http://localhost:3009/cotacoes';
};

const cotacoesApi = axios.create({
  baseURL: apiURL(),
});

const getCotacoes = async () => {
  try {
    const res = await cotacoesApi.get('/');
    const cotacoes = await res.data;
    return cotacoes;
  } catch (error) {
    throw new Error(error.message);
  }
};

const cotacoesService = {
  getCotacoes,
};

export default cotacoesService;
