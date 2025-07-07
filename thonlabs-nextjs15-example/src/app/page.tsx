import {getAccessToken, getSession} from "@thonlabs/nextjs/server";
import Link from "next/link";

export default async function Home() {
	const {user} = await getSession();
	const accessToken = await getAccessToken();

	return (
		<>
			<div>
				<h1>Server Side: Collect session using "getSession" (Backend)</h1>

				<ul>
					<li>ID: {user?.id}</li>
					<li>Nome: {user?.fullName}</li>
					<li>Email: {user?.email}</li>
					<li>JWT token: {accessToken}</li>

					<Link href="/auth/logout">Logout from Link</Link>
				</ul>
			</div>
		</>
	);
}
