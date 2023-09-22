import { useEffect } from 'react';
import { useAuth } from '../utils/authService';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const { logout } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		logout();
		navigate('/');
	}, [logout, navigate]);

	return null;
}
