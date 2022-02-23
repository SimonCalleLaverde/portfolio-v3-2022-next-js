// EXAMPLE // our-domain.com/news

// Imports
import Link from "next/link";
import { Fragment } from "react";

// List Could Normally Be Generated Dynamically By Maping Some Array Of Data Into JSX Elements
export default function NewsPage() {
	return (
		<Fragment>
			<h1>News Page</h1>

			<ul>
				<li>
					<Link href="/news/nextjs-is-a-great-framework-article">
						NextJS Is A Great Framework Article
					</Link>
				</li>
				
				<li>
					<a href="/news/something-else-article">
						Something Else Article
					</a>
				</li>
			</ul>
		</Fragment>
	);
};