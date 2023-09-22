import Layout from './Layout';
import { useAuth } from '../utils/authService';
import { Navigate, Outlet } from 'react-router-dom';

export default function Protected() {
	const { isLoading, user } = useAuth();
	if (isLoading) {
		<Layout>
			<h3>Please wait...</h3>
		</Layout>;
	}

	return user?.username ? <Outlet /> : <Navigate to="/login" />;
}
