import './css/loader.css';

export default function Loader(): JSX.Element {
  return (
    <div className='container-loader'>
      <h1 className='loader-title'>Загрузка Квестов</h1>
      <div className='loader'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
    </div>
  );
}
