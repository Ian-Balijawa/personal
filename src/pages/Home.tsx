import { Badge, Group, SimpleGrid, Stack, Title, createStyles, rem } from '@mantine/core'
import { WithTitle } from '../components/Features/WithTitle'
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
import { Hero } from '../components/Hero'
import Motion from '../components/MotionDiv'
import { motion } from 'framer-motion'

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
				<Stack>
					<Hero />
					<WithTitle />
					<WithCards />
					<Motion>
						<FeaturesAsymmetrical />
					</Motion>
					<Motion>
						<DevelopmentApproach />
					</Motion>
					<FeaturesGrid {...featuresGridData} />
					<Motion>
						<PortfolioHero />
					</Motion>
					{caseStudies}
					<ProjectCardGrid />
					<Motion>
						<FAQs />
					</Motion>
					<Team />
				</Stack>
			</Layout>
		</>
	)
}

const team = [
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
	{
		name: 'Ian Balijawa',
		email: 'ianbalijawa16@gmail.com',
		role: "CEO",
		image: "https://iyn.vercel.app/images/about-me.png",
	},
]


const useStyles = createStyles( theme => ( {
	wrapper: {
		cursor: "pointer",
		color: "white",
		background: 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
		filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr = "#833ab4", endColorstr = "#fcb045", GradientType = 1 )',
		'&:hover': {
			boxShadow: 'rgba(253,29,29, 100 ) 0px 22px 70px 4px'
		}
	},
	title: {
		fontSize: rem( 44 ),
		fontWeight: 900,

		[theme.fn.smallerThan( 'sm' )]: {
			fontSize: rem( 24 ),
		},
		color: theme.white,
	},
} ) )


const Team = () => {

	const { classes } = useStyles()

	const cards = team.map( ( member, index ) => (
		<motion.div whileHover={{ scale: 1.1 }}>
			<Motion duration={1.3} delay={.4}>
				<UserInfoAction {...member} key={index.toString()} />
			</Motion>
		</motion.div>
	) )

	return (
		<>
			<Group mt={100} pt="xl" position="center">
				<Badge variant="filled" size="lg">
					Development Team
				</Badge>
			</Group>
			<Title c="white" py={50} order={5} className={classes.title} ta="center" >
				Meet our development team
			</Title>

			<SimpleGrid
				cols={4}
				breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
				mb="xl"
				pb="xl"
			>
				{cards}
			</SimpleGrid>
		</>
	)
}
