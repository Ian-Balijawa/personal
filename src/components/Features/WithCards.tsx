import {
	createStyles,
	Badge,
	Group,
	Title,
	Text,
	Card,
	SimpleGrid,
	Container,
	rem,
} from '@mantine/core'
import { IconBrandReactNative } from '@tabler/icons-react'
import { IconBrandApple, IconBrandAndroid } from '@tabler/icons-react'

const mockdata = [
	{
		title: 'Native IOS Development',
		description:
			'Swift and Objective-C are the technologies we use for native iPhone/iPad software development. We will assist you with the full process of iOS app development, starting from initial ideation to App Store submission.',
		icon: IconBrandApple,
	},
	{
		title: 'Native Android Development',
		description:
			'Native apps are popular in the mobile industry since they can access specific operating systems’ built-in features and perform them fast and smoothly. We use Kotlin and Java to deliver amazing Android apps.',
		icon: IconBrandAndroid,
	},
	{
		title: 'Hybrid Mobile Development',
		description:
			'Many businesses take advantage of hybrid apps, as the same code is used for various mobile platforms, such as iPhone, Android, etc. In addition, hybrid development reduces development time and cost. We use the most innovative technologies to build these apps.',
		icon: IconBrandReactNative,
	},
]

const useStyles = createStyles( theme => ( {
	title: {
		fontSize: rem( 34 ),
		fontWeight: 900,

		[theme.fn.smallerThan( 'sm' )]: {
			fontSize: rem( 24 ),
		},
	},

	description: {
		maxWidth: 600,
		margin: 'auto',

		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: rem( 45 ),
			height: rem( 2 ),
			marginTop: theme.spacing.sm,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},

	card: {
		border: `${rem( 1 )} solid ${theme.colorScheme === 'dark'
			? theme.colors.dark[5]
			: theme.colors.gray[1]
			}`,
	},

	cardTitle: {
		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: rem( 45 ),
			height: rem( 2 ),
			marginTop: theme.spacing.sm,
		},
	},
} ) )

export function WithCards() {
	const { classes, theme } = useStyles()
	const features = mockdata.map( feature => (
		<Card
			key={feature.title}
			shadow="md"
			radius="md"
			className={classes.card}
			padding="xl"
		>
			<feature.icon
				size={rem( 50 )}
				stroke={2}
				color={theme.fn.primaryColor()}
			/>
			<Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
				{feature.title}
			</Text>
			<Text fz="sm" c="dimmed" mt="sm">
				{feature.description}
			</Text>
		</Card>
	) )

	return (
		<Container size="xl" py="xl">
			<Group position="center">
				<Badge variant="filled" size="lg">
					Mobile App Development
				</Badge>
			</Group>

			<Title order={2} className={classes.title} ta="center" mt="sm">
				Custom Mobile Application Development Services We Provide
			</Title>

			<Text
				c="dimmed"
				className={classes.description}
				ta="center"
				mt="md"
			>
				Appearance and functionality — it’s a short list of demands for
				a good mobile application. No worries I’m a mobile app developer
				with 5+ years of experience in the field. I’ve worked with a
				variety of technologies and frameworks, and I’m ready to help
				you with your project.
			</Text>

			<SimpleGrid
				cols={3}
				spacing="xl"
				mt={50}
				breakpoints={[{ maxWidth: 'md', cols: 1 }]}
			>
				{features}
			</SimpleGrid>
		</Container>
	)
}
