import { Paper, Stack, TextInput, createStyles } from '@mantine/core'
import { HeroEstimator } from '../components/EstimatorHero'
import Layout from '../components/Layout'
import {
	UserGeneratedContent,
	UIUX,
	HourlyRate,
	ApplicationSize,
	PlatformSelection,
	UsersAndAccounts,
	SocialAndEngament,
	DatesAndLocations,
	BillingAndEcommerce,
	AdminFeedbackAndAnalytics,
	ExternalAPISAndIntergrationHours,
	SecurityHours,
	AppSpecificDevelopment,
} from '../containers/EstimatorContainer'
import { Helmet } from 'react-helmet'

const meta = (
	<Helmet>
		<meta charSet="utf-8" />
		<title>App Estimator</title>
		<link rel="canonical" href="https://balijawa.vercel.app/estimator" />
		<meta
			name="description"
			content="Ian balijawa's personal website | app estimator"
		/>
	</Helmet>
)

export default function Estimator() {
	return (
		<>
			{meta}
			<Layout>
				<HeroEstimator />

				<Stack>
					<HourlyRate />
					<PlatformSelection />
					<ApplicationSize />
					<UIUX />
					<UsersAndAccounts />
					<UserGeneratedContent />
					<DatesAndLocations />
					<SocialAndEngament />
					<BillingAndEcommerce />
					<AdminFeedbackAndAnalytics />
					<ExternalAPISAndIntergrationHours />
					<SecurityHours />
					<AppSpecificDevelopment />
				</Stack>
				<Widget />
			</Layout>
		</>
	)
}

const useStyles = createStyles(() => ({
	root: {
		position: 'fixed',
		background: 'transparent',
		zIndex: 1,
		top: '25%',
		right: 0,
	},
}))

const Widget = () => {
	const { classes } = useStyles()
	return (
		<Paper withBorder w={500} p="lg" m="md" className={classes.root}>
			<TextInput label="Name" placeholder="Your name" radius="md" />
			<TextInput
				required
				label="Email"
				placeholder="ib@ianbalijawa.net"
				radius="md"
			/>
		</Paper>
	)
}
