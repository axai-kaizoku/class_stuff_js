import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-nav">
          <Nav />
        </div>
      </header>
      <main className="app-main">{children}</main>
    </div>
  );
}
