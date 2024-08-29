export default function Page404(): JSX.Element {
  return (
    <main>
      <div style={{ textAlign: 'center' }}>
        <p className="title--size-l title--uppercase">404</p>
        <p className="title--size-s">Кажется вы заблудился. Вернемся в начало?</p>
        <a className="btn btn--accent" href="#">
          <p className="title--size-s">На Главную</p>
        </a>
      </div>
    </main>
  );
}
