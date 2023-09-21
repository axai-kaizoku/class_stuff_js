import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="about">
        <header className="aboutpage-header">
          <h1>About Project Master</h1>
          <p>Learn more about Project Master and how it can help your project management efforts</p>
        </header>

        <main className="aboutpage-content">
          <section className="about-introduction">
            <h2>Our Vision</h2>
            <p>
              Project Master was created with a vision to simplify project management. Our aim is to provide a comprehensive, easy-to-use tool for
              managers to track their project progress, manage their team, and analyze sales data, all in one place.
            </p>
          </section>

          <section className="about-features">
            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Project Status Tracking:</strong> Keep an eye on your project's progress at all times.
              </li>
              <li>
                <strong>Sales Data Analysis:</strong> Understand your project's financial performance with detailed sales data analysis.
              </li>
              <li>
                <strong>Employee Management:</strong> Assign tasks and manage your team members efficiently.
              </li>
            </ul>
          </section>

          <section className="about-team">
            <h2>Our Team</h2>
            <p>
              We are a team of dedicated developers and designers committed to making project management easier for everyone. Our diverse backgrounds
              and experiences help us bring a unique perspective to project management.
            </p>
          </section>
        </main>
      </div>
    </Layout>
  );
}
