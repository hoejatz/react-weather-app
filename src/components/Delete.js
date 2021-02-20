import React, { useState, useEffect } from 'react';

export default function Delete(props) {
	const [didDelete, setDidDelete] = useState(false);

	// useEffect(() => {
	//     (async () => {
	//         try {
	//             const response = await fetch(`/api/favlocations/${props.match.params.id}`);
	//             const data = await response.json();
	//         } catch {}
	//     })
	// })

	const handleDelete = async event => {
		try {
			const response = await fetch(
				`/api/favlocations/${props.match.params.id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		}
	};

	return <button onClick={handleDelete}>Delete Location</button>;
}
