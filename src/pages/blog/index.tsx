import Link from "next/link";
import Head from "next/head";

import { motion as m } from "framer-motion";

import { basicFade } from "@/lib/animations";

export default function Blog() {
	return (
		<>
			<Head>
				<title>Atelier Floar | Blog</title>
				<meta name="description" content="Noticias sobre moda sustentável" />
			</Head>

			<m.div
				variants={basicFade}
				initial="hidden"
				animate="visible"
				exit="hidden"
				key="Blog"
			>
				<h1>Blog</h1>
				<Link href="/">Home</Link>
			</m.div>
		</>
	);
}
