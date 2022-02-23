// EXAMPLE // our-domain.com/news/[news-articles]

// Imports
import { useRouter } from "next/router";

export default function DetailPage() {
	const routerObject = useRouter();

	// This Will Hold The Concrete Value In The URL For The Dynamic Segment Of The Page Visited
	const newsArticles = routerObject.query.newsArticles;
	// We Could Send A Request To The Backend API To Fetch The News Item With "newsArticles"

	return <h1>The Detail Page</h1>
};