import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <header className="homepage-header">
          <h1>Welcome to Project Master</h1>
          <p>Your one-stop destination for managing all your projects</p>
        </header>

        <main className="homepage-content">
          <section className="introduction">
            <h2>What can you do with Project Master?</h2>
            <p>Track your project status, manage your team, view detailed sales data, all in one place!</p>
          </section>

          <section className="features">
            <h2>Features</h2>
            <ul>
              <li>Check Project Status</li>
              <li>Sales data analysis</li>
              <li>Employee management</li>
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  );
}
