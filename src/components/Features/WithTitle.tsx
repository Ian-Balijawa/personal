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
	useMantineTheme,
} from '@mantine/core'
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react'
import { useInView, useAnimation, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const useStyles = createStyles( theme => ( {
	wrapper: {
		padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
	},

	btn: {
		background: 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
		filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr = "#833ab4", endColorstr = "#fcb045", GradientType = 1 )',
		'&:hover': {
			boxShadow: 'rgba(253,29,29, 100 ) 0px 22px 70px 4px'
		}
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem( 36 ),
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.white,
	},
} ) )

const features = [
	{
		icon: IconReceiptOff,
		title: 'Free and open source',
		description: 'All packages are published under MIT license, you can use Mantine in any project',
	},
	{
		icon: IconFileCode,
		title: 'TypeScript based',
		description: 'Build type safe applications, all components and hooks export types',
	},
	{
		icon: IconCircleDotted,
		title: 'No annoying focus ring',
		description: 'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
	},
	{
		icon: IconFlame,
		title: 'Flexible',
		description: 'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
	},
]

export function WithTitle() {
	const { classes } = useStyles()
	const theme = useMantineTheme()
	const ref = useRef( null )
	const isInView = useInView( ref, { once: true } )
	const controls = useAnimation()

	useEffect( () => {
		if ( isInView ) {
			controls.start( 'visible' )
		}
	}, [isInView, controls] )

	const items = features.map( feature => (
		<motion.div
			ref={ref}
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: { opacity: 1, y: 0 },
			}}
			initial={"hidden"}
			animate="visible"
			transition={{ duration: 1.5, delay: 0.25 }}
			key={feature.title}
		>
			<ThemeIcon
				size={44}
				radius="md"
				variant="gradient"
				gradient={{ deg: 133, from: theme.primaryColor, to: theme.colors.yellow[9] }}
			>
				<feature.icon size={rem( 26 )} stroke={1.5} />
			</ThemeIcon>
			<Text fz="lg" mt="sm" fw={500}>
				{feature.title}
			</Text>
			<Text fz="sm">
				{feature.description}
			</Text>
		</motion.div>
	) )

	return (
		<div className={classes.wrapper}>
			<Grid gutter={80}>
				<Col span={12} md={5}>
					<Title className={classes.title} order={2}>
						Accelerating your results with our comprehensive solutions
					</Title>
					<Text >
						Designing innovative products that exceed your expectations, focused on quality, user experience
						and customer satisfaction. And therefore speeding up your growth.
					</Text>

					<Button
						variant="gradient"
						className={classes.btn}
						gradient={{ deg: 133, from: theme.primaryColor, to: theme.colors.yellow[9] }}
						size="lg"
						radius="md"
						mt="xl"
					>
						View portfolio
					</Button>
				</Col>
				<Col span={12} md={7}>
					<SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
						{items}
					</SimpleGrid>
				</Col>
			</Grid>
		</div>
	)
}
