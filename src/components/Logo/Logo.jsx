import { SiThemoviedatabase } from 'react-icons/si';

const Logo = ({ color, bgr }) => {
  const iconStyle = {
    color: color, // Используем значение пропа color напрямую
    backgroundColor: bgr,
    fontSize: '56px',
    padding: '5px',
    marginRight: '25px',
  };

  return (
    <div>
      <SiThemoviedatabase style={iconStyle} />
    </div>
  );
};

export default Logo;