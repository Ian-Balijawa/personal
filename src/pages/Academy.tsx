import { SimpleGrid } from '@mantine/core'
import Layout from '../components/Layout'
import { ArticleCard, articles } from '../components/ArticleCard'
import { Helmet } from 'react-helmet'

const meta = (
	<Helmet>
		<meta charSet="utf-8" />
		<title>Ian Balijawa | Academy</title>
		<link rel="canonical" href="https://balijawa.vercel.app/academy" />
		<meta
			name="description"
			content="Ian balijawa's personal website. The academy blog page"
		/>
	</Helmet>
)

export default function Academy() {
	return (
		<>
			{meta}
			<Layout>
				<SimpleGrid
					cols={2}
					breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
				>
					{Array.from({ length: 12 }).map((_, index) => (
						<ArticleCard key={index.toString()} {...articles} />
					))}
				</SimpleGrid>
			</Layout>
		</>
	)
}
