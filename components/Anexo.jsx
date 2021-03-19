/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const Anexo = ({ anexo }) => (
  <a
    href={anexo.urlAnexo}
    className="m-2 px-4 py-1 rounded-full bg-gray-400 hover:bg-gray-600 text-white text-sm font-semibold"
  >
    <AttachFileIcon />
    {anexo.nomeArquivo}
  </a>
);

Anexo.propTypes = {
  anexo: PropTypes.any.isRequired,
};

export default Anexo;
