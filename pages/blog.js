// EXAMPLE // our-domain.com/blog

// Imports
import Link from "next/link"
import { Fragment } from "react"

// List Could Normally Be Generated Dynamically By Maping Some Array Of Data Into JSX Elements
export default function BlogPage() {
	return (
		<Fragment>
			<h1>Blog Page</h1>

			<ul>
				<li>
					<Link href="/blog/article-that-loads-the-proper-way">
						Article that loads the proper 'Next.js' way
					</Link>
				</li>
				
				<li>
					<a href="/blog/article-that-loads-the-wrong-way">
						Article that loads the "wrong/old" way
					</a>
				</li>
			</ul>
		</Fragment>
	)
}