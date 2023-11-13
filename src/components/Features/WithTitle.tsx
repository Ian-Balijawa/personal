import {
	createStyles,
	Title,
	SimpleGrid,
	Text,
	Button,
	ThemeIcon,
	Grid,
	Col,
	rem,
} from '@mantine/core'
import {
	IconReceiptOff,
	IconFlame,
	IconCircleDotted,
	IconFileCode,
} from '@tabler/icons-react'

const useStyles = createStyles( theme => ( {
	wrapper: {
		padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem( 36 ),
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},
} ) )

const features = [
	{
		icon: IconReceiptOff,
		title: 'Free and open source',
		description:
			'All packages are published under MIT license, you can use Mantine in any project',
	},
	{
		icon: IconFileCode,
		title: 'TypeScript based',
		description:
			'Build type safe applications, all components and hooks export types',
	},
	{
		icon: IconCircleDotted,
		title: 'No annoying focus ring',
		description:
			'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
	},
	{
		icon: IconFlame,
		title: 'Flexible',
		description:
			'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
	},
]

export function WithTitle() {
	const { classes } = useStyles()

	const items = features.map( feature => (
		<div key={feature.title}>
			<ThemeIcon
				size={44}
				radius="md"
				variant="gradient"
				gradient={{ deg: 133, from: 'red', to: 'yellow' }}
			>
				<feature.icon size={rem( 26 )} stroke={1.5} />
			</ThemeIcon>
			<Text fz="lg" mt="sm" fw={500}>
				{feature.title}
			</Text>
			<Text c="dimmed" fz="sm">
				{feature.description}
			</Text>
		</div>
	) )

	return (
		<div className={classes.wrapper}>
			<Grid gutter={80}>
				<Col span={12} md={5}>
					<Title className={classes.title} order={2}>
						Accelerating your results with our comprehensive
						solutions
					</Title>
					<Text c="dimmed">
						Designing innovative products that exceed your expectations, focused on quality, user experience and customer satisfaction. And therefore speeding up your growth.
					</Text>

					<Button
						variant="gradient"
						gradient={{ deg: 133, from: 'red', to: 'yellow' }}
						size="lg"
						radius="md"
						mt="xl"
					>
						View portfolio
					</Button>
				</Col>
				<Col span={12} md={7}>
					<SimpleGrid
						cols={2}
						spacing={30}
						breakpoints={[{ maxWidth: 'md', cols: 1 }]}
					>
						{items}
					</SimpleGrid>
				</Col>
			</Grid>
		</div>
	)
}
