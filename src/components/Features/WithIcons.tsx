import {
	createStyles,
	Text,
	SimpleGrid,
	Container,
	rem,
	Paper,
	Badge,
	Group,
	Title,
} from '@mantine/core'
import { IconHexagonNumber3 } from '@tabler/icons-react'
import { IconHexagonNumber1, IconHexagonNumber2 } from '@tabler/icons-react'

const useStyles = createStyles(theme => ({
	feature: {
		position: 'relative',
		paddingTop: theme.spacing.xl,
		paddingLeft: theme.spacing.xl,
	},
	title: {
		fontSize: rem(54),
		fontWeight: 900,

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(24),
		},
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	overlay: {
		position: 'absolute',
		height: rem(100),
		width: rem(160),
		top: 0,
		left: 0,
		backgroundColor: theme.fn.variant({
			variant: 'light',
			color: theme.primaryColor,
		}).background,
		zIndex: 1,
	},

	content: {
		position: 'relative',
		zIndex: 2,
	},

	icon: {
		color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
			.color,
	},
}))

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
	icon: React.FC<any>
	title: string
	description: string
	iconSrv: React.FC<any>[]
}

function Feature({
	icon: Icon,
	title,
	description,
	className,
	iconSrv,
	...others
}: FeatureProps) {
	const { classes, cx } = useStyles()

	return (
		<Paper
			withBorder
			radius="md"
			className={cx(classes.feature, className)}
			{...others}
		>
			<div className={classes.overlay} />

			<div className={classes.content}>
				<Icon size={rem(38)} className={classes.icon} stroke={1.5} />
				<Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
					{title}
				</Text>
				<Text c="dimmed" fz="sm">
					{description}
				</Text>
			</div>
			<SimpleGrid cols={3} spacing={2} py={20}>
				{iconSrv.map((Icon, index) => (
					<Icon key={index} size={rem(38)} className={classes.icon} />
				))}
			</SimpleGrid>
		</Paper>
	)
}

const mockdata: FeatureProps[] = [
	{
		icon: IconHexagonNumber1,
		title: 'DevOps Support Services',
		iconSrv: [IconHexagonNumber1, IconHexagonNumber2, IconHexagonNumber3],
		description:
			'We are always on the lookout for the perfect uptime for your system. Fifteen minutes of production time to provide emergency support will save customer satisfaction and reduce your IT-related cost.',
	},
	{
		icon: IconHexagonNumber2,
		iconSrv: [IconHexagonNumber1, IconHexagonNumber2, IconHexagonNumber3],
		title: 'Development Support and Maintenance',
		description:
			'We’ll provide daily monitoring of web and mobile performance and security scans, backup copies and databases with further storage, tech support, and interactions and follow-ups with third-party services, suppliers, and vendors.',
	},
	{
		icon: IconHexagonNumber3,
		title: 'UX/UI App Design',
		description:
			'Our specialists create the product, knowing exactly how it should work specifically for your audience. We get deep insights into your target audience using specialized analytics tools, such as:',
		iconSrv: [IconHexagonNumber1, IconHexagonNumber2, IconHexagonNumber3],
	},
]

export function FeaturesAsymmetrical() {
	const items = mockdata.map(item => <Feature {...item} key={item.title} />)
	const { classes } = useStyles()
	return (
		<Container size="xl">
			<Group position="center">
				<Badge variant="filled" size="lg">
					Mobile App Maintenance
				</Badge>
			</Group>

			<Title order={2} className={classes.title} ta="center" my="sm">
				We can offer you 360° support with
			</Title>
			<SimpleGrid
				cols={3}
				breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
				spacing={'sm'}
			>
				{items}
			</SimpleGrid>
		</Container>
	)
}
