import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Loader from 'react-loader-spinner';

import cotacoesService from '../services/cotacoesService';
import Cotacao from '../components/Cotacao';
import MainMenu from '../components/MainMenu';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const appName = 'Cotações Prévias';

  const [cotacoes, setCotacoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const getResults = () => {
    const currentResults = document.querySelectorAll('.visible').length;
    setResults(currentResults);
  };

  const getCotacoes = async () => {
    const cotacoesData = await cotacoesService.getCotacoes();
    setCotacoes(cotacoesData);
    setLoading(false);
  };

  const tableCaption = () => `${results} ${
    results === 1 ? 'item encontrado ' : 'itens encontrados '
  } 
  ${searchTerm ? `contendo '${searchTerm}'` : ''}`;

  useEffect(() => {
    getCotacoes();
  }, []);

  useEffect(() => {
    getResults();
  }, [loading, searchTerm]);

  return (
    <>
      <Head>
        <title>{`${appName} | Prefeitura de Limeira`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loading && (
        <>
          <MainMenu title={appName} />
          <div className="bg-blue-500">
            <div className="container mx-auto">
              <div className="pb-4 space-y-4">
                <p className="text-white text-lg">
                  Caros Fornecedores e Prestadores de Serviço, na tabela abaixo
                  serão disponibilizados arquivos com as descrições dos produtos
                  e serviços que poderão entrar em processo licitatório. Caso
                  sua empresa tenha interesse, selecione o arquivo com o produto
                  ou serviço condizente com o ramo de atividade da sua empresa,
                  preencha, carimbe, assine, escaneie e envie para o email
                  descrito no formulário ou entregue pessoalmente no
                  departamento solicitante.
                </p>
                <p className="text-white text-lg">
                  As cotações prévias auxiliam em maior publicidade e
                  concorrência das compras públicas, além de estimular o
                  comércio local a vender seus produtos e serviços para a
                  Prefeitura Municipal de Limeira.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <main className="m-4 space-y-4">
              <SearchBar
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />

              <p className="mb-4 text-center">{tableCaption()}</p>
              <div className="flex flex-col overflow-x-auto">
                <table className="border w-full">
                  <thead>
                    <tr>
                      <th className="border p-2 bg-gray-200">
                        <span className="text-gray-500">Cotação</span>
                      </th>
                      <th className="border p-2 bg-gray-200 w-full">
                        <span className="text-gray-500">Descrição</span>
                      </th>
                      <th className="border p-2 bg-gray-200">
                        <span className="text-gray-500">Status</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {cotacoes?.map((cotacao) => (
                      <Cotacao
                        key={cotacao.numeroAno}
                        cotacao={cotacao}
                        searchTerm={searchTerm}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </>
      )}

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <Loader type="Bars" color="#00BFFF" height={100} width={100} />
        </div>
      )}
    </>
  );
};
export default Home;
