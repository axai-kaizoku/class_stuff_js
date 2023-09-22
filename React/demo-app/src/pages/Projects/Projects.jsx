import Layout from '../../components/Layout';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

export default function Projects() {
	const projects = useLoaderData();
	return (
		<Layout>
			<div className="projects">
				<ul className="projects-list">
					{projects.map((project) => (
						<li key={project.id}>
							<Link to={`/projects/${project.id}`}>{project.name}</Link>
						</li>
					))}
				</ul>
				<Outlet />
			</div>
		</Layout>
	);
}
