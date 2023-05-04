import MainLogo from '../../components/header/mainlogo';

const ErrorPage = () => {
  return (
    <>
      <h1>404 NOT FOUND</h1>
      <h5>페이지를 찾을 수 없는 오류입니다.</h5>
      <MainLogo props={{ width: '97px', height: '20px' }} />
    </>
  );
};

export default ErrorPage;
