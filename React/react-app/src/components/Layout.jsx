import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="app">
      <h1 className="logo">
        <Link to="/">StoreFront</Link>
      </h1>
      <div className="main">{children}</div>
    </div>
  );
}
