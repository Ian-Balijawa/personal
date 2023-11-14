import { createStyles, Image, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core'
import { IconCheck, IconEye } from '@tabler/icons-react'
import { Dots } from './Dots'

const useStyles = createStyles( theme => ( {
	wrapper: {
		position: 'relative',
	},
	dots: {
		position: 'absolute',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

		[theme.fn.smallerThan( 'sm' )]: {
			display: 'none',
		},
	},

	dotsLeft: {
		left: 0,
		top: 0,
	},
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		position: 'relative',
		zIndex: 1,
	},

	content: {
		maxWidth: rem( 580 ),
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan( 'md' )]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem( 60 ),
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan( 'xs' )]: {
			fontSize: rem( 28 ),
		},
	},

	control: {
		[theme.fn.smallerThan( 'xs' )]: {
			flex: 1,
		},

	},

	btn: {
		background: 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
		filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr = "#833ab4", endColorstr = "#fcb045", GradientType = 1 )',
		'&:hover': {
			boxShadow: 'rgba(253,29,29, 100 ) 0px 22px 70px 4px'
		}
	},
	image: {
		flex: 1,
		[theme.fn.smallerThan( 'md' )]: {
			display: 'none',
		},
	},

	highlight: {
		position: 'relative',
		backgroundColor: theme.fn.variant( {
			variant: '',
			color: theme.primaryColor,
		} ).background,
		borderRadius: theme.radius.sm,
		textTransform: 'uppercase',
		padding: `${rem( 2 )} ${rem( 6 )}`,
		color: theme.white
	},
	highlightInner: {
		textTransform: 'uppercase',
		borderRadius: theme.radius.md,
		padding: `${rem( 4 )} ${rem( 12 )}`,
		fontWeight: 600,
		lineHeight: 2.2,
		backgroundColor: theme.fn.variant( {
			variant: 'light',
			color: theme.primaryColor,
		} ).background,
		color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 1 : 6],
	},
} ) )

export function Hero() {
	const { classes } = useStyles()
	return (
		<div
			className={classes.wrapper}>
			<Dots className={classes.dots} style={{ left: 0, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />

			<div className={classes.inner}>
				<div className={classes.content}>
					<Title className={classes.title}>
						Build <span className={classes.highlight}>and scale</span> <br />
						with us in your domain
					</Title>
					<Text fz="xl" className={classes.highlightInner} mt="md">
						Great software is built by great teams
					</Text>
					<Text c="white" fw={700} mt="md">
						We help build and manage a team of world-class developers to bring your vision to life.
					</Text>

					<List
						mt={30}
						spacing="sm"
						size="sm"
						icon={
							<ThemeIcon size={20} radius="xl">
								<IconCheck size={rem( 12 )} stroke={1.5} />
							</ThemeIcon>
						}
					>
						<List.Item>
							<b>Web Apps</b> – We prototype, build, deliver, and support all web solutions from single
							POC and MVP to enterprise.
						</List.Item>
						<List.Item>
							<b>Mobile Applications</b> – all packages have MIT license, you can use Mantine in any
							project
						</List.Item>
						<List.Item>
							<b>Machine Learning and AI</b> – focus ring will appear only when user navigates with
							keyboard
						</List.Item>
					</List>

					<Group mt={30}>
						<Button radius="md" fullWidth size="md" leftIcon={<IconEye />} className={classes.btn}>
							View portfolio
						</Button>
					</Group>
				</div>
				<Image withPlaceholder placeholder="" src={'/images/image.svg'} className={classes.image} />
			</div>
		</div>
	)
}
