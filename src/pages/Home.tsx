import { Stack } from '@mantine/core'
import { WithTitle } from '../components/Features/WithTitle'
import { Hero } from '../components/Hero'
import Layout from '../components/Layout'
import { WithCards } from '../components/Features/WithCards'
import { FeaturesAsymmetrical } from '../components/Features/WithIcons'
import { FeaturesImages, data } from '../components/Features/WithImageIcons'
import {
	FeaturesGrid,
	featuresGridData,
} from '../components/Features/WithMonotonIcons'
import { FAQs } from '../components/FAQs'
import { Helmet } from 'react-helmet'

const meta = (
	<Helmet>
		<meta charSet="utf-8" />
		<title>Ian | Balijawa</title>
		<link rel="canonical" href="https://balijawa.vercel.app" />
		<meta name="description" content="Ian balijawa's personal website" />
	</Helmet>
)

export default function Home() {
	return (
		<>
			{meta}
			<Layout>
				<Stack spacing={100}>
					<Hero />
					<WithTitle />
					<WithCards />
					<FeaturesAsymmetrical />
					<FeaturesImages {...data} />
					<FeaturesGrid {...featuresGridData} />
					<FAQs />
				</Stack>
			</Layout>
		</>
	)
}
