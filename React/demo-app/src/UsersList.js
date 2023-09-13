import React from 'react';
import { WithFetch } from './WithFetch';

class UsersList extends React.Component {
	render() {
		console.log(this.props.users);
		const { users } = this.props;
		return (
			<div>
				{users.map((user) => {
					return (
						<div
							key={user.id}
							style={{ background: 'lightgrey' }}>
							<img
								src={user.avatar}
								alt={user.first_name}
							/>
							<p>{user.first_name}</p>
							<p>{user.last_name}</p>
							<p>{user.email}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default WithFetch(UsersList);
