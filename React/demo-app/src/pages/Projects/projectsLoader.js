export async function getAllProjects() {
	const getProjects = await fetch('/projects');
	const projects = await getProjects.json();
	return projects;
}

export async function getProject({ params }) {
	const getProject = await fetch(`/projects/${params.projectId}`);
	const project = await getProject.json();
	return project;
}

// export async function getAllProjects() {
// 	try {
// 		const response = await fetch('/projects');
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}
// 		const projects = await response.json();
// 		console.log(projects);
// 		return projects;
// 	} catch (error) {
// 		console.error(
// 			'There was a problem with the fetch operation:',
// 			error.message,
// 		);
// 		return null; // This ensures you return something, as the error suggests
// 	}
// }

// export async function getProject({ params }) {
// 	try {
// 		const response = await fetch(`/projects/${params.projectId}`);
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}
// 		const project = await response.json();
// 		console.log(project);
// 		return project;
// 	} catch (error) {
// 		console.error(
// 			'There was a problem with the fetch operation:',
// 			error.message,
// 		);
// 		return null; // Again, ensure a value is returned, even in case of an error
// 	}
// }
