import { SimpleGrid, Stack } from '@mantine/core'
import { ProjectCardGrid } from '../components/ArticlesCardGrid'
import Layout from '../components/Layout'
import UserInfoAction from '../components/UserInfoAction'
import { PortfolioHero } from '../components/PortfolioHero'
import { Helmet } from 'react-helmet'
import {
	FeatureProject,
	FeaturedProjectProps,
} from '../components/FeaturedProject'

const meta = (
	<Helmet>
		<meta charSet="utf-8" />
		<title>Ian | Portfolio</title>
		<link rel="canonical" href="https://balijawa.vercel.app/portfolio" />
		<meta name="description" content="Ian balijawa's portfolio page" />
	</Helmet>
)

const mockData: FeaturedProjectProps[] = [
	{
		title: 'Case Study 1',
		description:
			'We have ompleted many projects on time and budget in different domains for dynamic small to medium businesses and startups',
		image: 'https://iyn.vercel.app/images/theme.png',
		link: 'https://marketplace.visualstudio.com/items?itemName=ianbalijawa.dark-night-rises',
		direction: 'left',
		github: 'https://github.com/Ian-Balijawa/my-site.git',
	},
	{
		title: 'Case Study 2',
		description:
			'We have ompleted many projects on time and budget in different domains for dynamic small to medium businesses and startups',
		image: 'https://iyn.vercel.app/images/silverlight.png',
		link: 'https://marketplace.visualstudio.com/items?itemName=ianbalijawa.silver-light',
		direction: 'right',
		github: 'https://github.com/Ian-Balijawa/my-site.git',
	},
	{
		title: 'Case Study 3',
		description:
			'We have ompleted many projects on time and budget in different domains for dynamic small to medium businesses and startups',
		image: 'https://iyn.vercel.app/images/mysite.png',
		link: 'https://iyn.vercel.app/',
		direction: 'left',
		github: 'https://github.com/Ian-Balijawa/my-site.git',
	},
]
export default function Portfolio() {
	const cards = Array.from( { length: 9 } ).map( ( _, index ) => (
		<UserInfoAction key={index.toString()} />
	) )

	const featuredProjects = mockData.map( ( project, index ) => (
		<FeatureProject key={index.toString()} {...project} />
	) )

	return (
		<>
			{meta}
			<Layout>
				<PortfolioHero />
				<Stack>
					{featuredProjects}
					<ProjectCardGrid />
					<SimpleGrid
						cols={3}
						breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
						my="xl"
					>
						{cards}
					</SimpleGrid>
				</Stack>
			</Layout>
		</>
	)
}
