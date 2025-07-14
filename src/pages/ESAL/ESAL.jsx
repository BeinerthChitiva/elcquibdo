// pages/ESAL.jsx
import './ESAL.css'; // para los estilos

const documentos = [

  {
    label: "Certificación Numeral 3",
    url: "https://drive.google.com/file/d/1VBgakoQndbg_A8c8GCYDPEuCO1HBrJSd/view"
  },
  {
    label: "Certificación Numeral 13",
    url: "https://drive.google.com/file/d/1UydmmML3Ynx5O-lpgyXdwm2A57fyzDBX/view"
  },
  {
    label: "ESTADOS FINANCIEROS 2024",
    url: "https://drive.google.com/file/d/1scHSxCY2DgmxCbuuuZa6bHaSHoe-YAMx/view"
  },
  {
    label: "Formulario 2530 100066005790354",
    url: "https://drive.google.com/file/d/1mc40mEk5BGPf0VRAZDY0b11VWM7P0p37/view"
  },
  {
    label: "Formulario 2531 100066005790379",
    url: "https://drive.google.com/file/d/1eCvasQa63rSavPeCrxPsKLBwYTITqws4/view"
  },
  {
    label: "Formulario 52451002729541",
    url: "https://drive.google.com/file/d/1VX6EEfC4tDuVtMp8fa3gEL2wL06lZ0_d/view"
  },
  {
    label: "Informe de Gestión 2024",
    url: "https://drive.google.com/file/d/17e3lwiPRdKh1ZHtuDuxkutPABqSCo4qW/view"
  }

];

const Redirect = () => {
  return (
    <div className="redirect-container">
      <h1>Documentos ESAL</h1>
      <div className="button-grid">
        {documentos.map((doc, index) => (
          <a
            key={index}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="redirect-button"
          >
            {doc.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Redirect;
