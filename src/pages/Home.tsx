import { SimpleGrid, Stack } from '@mantine/core'
import { WithTitle } from '../components/Features/WithTitle'
import { Hero } from '../components/Hero'
import Layout from '../components/Layout'
import { WithCards } from '../components/Features/WithCards'
import { FeaturesAsymmetrical } from '../components/Features/WithIcons'
import {
	FeaturesGrid,
	featuresGridData,
} from '../components/Features/WithMonotonIcons'
import { FAQs } from '../components/FAQs'
import { Helmet } from 'react-helmet'
import { FeatureProject, FeaturedProjectProps } from '../components/FeaturedProject'
import { ProjectCardGrid } from '../components/ArticlesCardGrid'
import UserInfoAction from "../components/UserInfoAction"
import { PortfolioHero } from '../components/PortfolioHero'
import { DevelopmentApproach } from '../components/Approach'

const meta = (
	<Helmet>
		<meta charSet="utf-8" />
		<title>TLABS | Homepage</title>
		<link rel="canonical" href="https://balijawa.vercel.app" />
		<meta name="description" content="Ian balijawa's personal website" />
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

export default function Home() {

	const caseStudies = mockData.map( ( project, index ) => (
		<FeatureProject key={index.toString()} {...project} />
	) )
	return (
		<>
			{meta}
			<Layout>
				<Stack spacing={100}>
					<Hero />
					<WithTitle />
					<WithCards />
					<FeaturesAsymmetrical />
					<DevelopmentApproach />
					<FeaturesGrid {...featuresGridData} />
					<PortfolioHero />
					{caseStudies}
					<ProjectCardGrid />
					<FAQs />
					<Team />
				</Stack>
			</Layout>
		</>
	)
}


const Team = () => {

	const cards = Array.from( { length: 5 } ).map( ( _, index ) => (
		<UserInfoAction key={index.toString()} />
	) )
	return (
		<SimpleGrid
			cols={5}
			breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
			mb="xl"
			pb="xl"
		>
			{cards}
		</SimpleGrid>
	)
}
