import { Link } from 'react-router-dom';

const MainLogo = ({ props }) => {
  return (
    <div className="flex items-center">
      <Link to={'/'}>
        <img
          src="/Assets/img/mainLogo.png"
          alt="메인로고"
          width={props.width}
          height={props.height}
        />
      </Link>
    </div>
  );
};

export default MainLogo;
