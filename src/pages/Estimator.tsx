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

export default function Estimator() {
	return (
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
	)
}

const useStyles = createStyles(() => ({
	root: {
		position: 'fixed',
		zIndex: 1,
		top: '25%',
		right: 0,
	},
}))

const Widget = () => {
	const { classes } = useStyles()
	return (
		<Paper
			w={500}
			shadow="lg"
			p="lg"
			m="md"
			withBorder
			className={classes.root}
		>
			<TextInput label="Name" placeholder="Your name" radius="md" />
			<TextInput
				required
				label="Email"
				placeholder="hello@mantine.dev"
				radius="md"
			/>
		</Paper>
	)
}
