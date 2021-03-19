/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import Anexo from './Anexo';

const Cotacao = ({ cotacao, searchTerm }) => {
  const tableRow = useRef('');

  const toggleVisibility = () => {
    if (tableRow.current.innerHTML) {
      const rowContent = tableRow?.current.innerHTML.toLowerCase();
      const searchTermLowercase = searchTerm.toLowerCase();

      if (!rowContent.includes(searchTermLowercase)) {
        return 'hidden';
      }
    }

    return 'visible';
  };

  return (
    <tr
      ref={tableRow}
      className={`${toggleVisibility()} ${
        cotacao.oficial ? 'bg-green-200' : ''
      }`}
    >
      <td className="border p-4">
        <a href={cotacao.urlCotacao}>
          <div className="flex flex-col justify-center items-center bg-blue-400 hover:bg-blue-600 m-2 p-2 rounded-lg">
            <DownloadIcon className="text-white" />
            <span className="text-white font-semibold">
              {cotacao.numeroAno}
            </span>
          </div>
        </a>
      </td>
      <td className="border p-4">
        <p dangerouslySetInnerHTML={{ __html: cotacao.objetoRequisicao }} />
        <div className="flex items-center flex-wrap">
          {cotacao.anexos?.map((anexo) => (
            <Anexo key={anexo.nomeArquivo} anexo={anexo} />
          ))}
        </div>
      </td>
      <td className="border p-4">
        <span>{cotacao.oficial ? 'Oficial' : 'Prévia'}</span>
      </td>
    </tr>
  );
};

Cotacao.propTypes = {
  cotacao: PropTypes.any.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Cotacao;
