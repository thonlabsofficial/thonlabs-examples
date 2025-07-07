"use client";

import {getAccessToken, useSession} from "@thonlabs/nextjs";

export default function ClientSession() {
	const {user, logout, isLoggingOut} = useSession();
  const accessToken = getAccessToken();

  if (!user) {
    return <div>Loading user session...</div>
  }

	return (
		<div>
			<h1>Client Side: Collect session using "useSession" (Frontend)</h1>

			<ul>
				<li>ID: {user?.id}</li>
				<li>Nome: {user?.fullName}</li>
				<li>Email: {user?.email}</li>
        <li>JWT token: {accessToken}</li>

				<button
					type="button"
					onClick={() => {
						logout();
					}}
				>
					{isLoggingOut ? "Logging out..." : "Logout from onClick"}
				</button>
			</ul>
		</div>
	);
}
