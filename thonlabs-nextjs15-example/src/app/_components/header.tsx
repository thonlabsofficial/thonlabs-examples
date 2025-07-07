import Link from "next/link";

export default async function Header() {
	return (
		<nav>
			<Link href="/">Server side</Link> |{" "}
			<Link href="/client">Client side</Link>
		</nav>
	);
}
