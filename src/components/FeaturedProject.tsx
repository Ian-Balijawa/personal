import {
	createStyles,
	Image,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
	rem,
	Paper,
} from '@mantine/core'
import { IconCheck, IconExternalLink } from '@tabler/icons-react'
import { ROUTES } from '../constants/routes'
import { Link } from 'react-router-dom'
import { IconBrandGithub } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const useStyles = createStyles( theme => ( {
	wrapper: {
		position: 'relative',
		background: "transparent"
	},
	dots: {
		position: 'absolute',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[1],

		[theme.fn.smallerThan( 'sm' )]: {
			display: 'none',
		},
	},

	dotsLeft: {
		left: 0,
		top: 0,
	},
	innerRight: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		position: 'relative',
		zIndex: 1,
		[theme.fn.smallerThan( 'md' )]: {
			flexDirection: 'column',
			marginBottom: rem( 20 ),
		},
	},
	innerLeft: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row-reverse',
		alignItems: 'flex-start',
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		position: 'relative',
		gap: rem( 40 ),
		zIndex: 1,
		[theme.fn.smallerThan( 'md' )]: {
			flexDirection: 'column',
			marginBottom: rem( 20 ),
		},
	},

	content: {
		maxWidth: rem( 480 ),
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan( 'md' )]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.primaryColor,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem( 44 ),
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
			marginTop: rem( 20 ),
		},
	},
} ) )

export interface FeaturedProjectProps {
	image: string
	title: string
	description: string
	link: string
	direction: 'left' | 'right'
	github: string
}

export function FeatureProject( {
	image,
	title,
	description,
	link,
	direction,
	github,
}: FeaturedProjectProps ) {
	const { classes } = useStyles()
	return (
		<Paper className={classes.wrapper}>
			<div
				className={
					direction === 'left'
						? classes.innerLeft
						: classes.innerRight
				}
			>
				<div className={classes.content}>
					<Title className={classes.title}>{title}</Title>
					<Text mt="md" color="white" fw="bold" >
						{description}
					</Text>

					<List
						mt={30}
						spacing="sm"
						size="sm"
						c="white"
						sx={{ zIndex: 999 }}
						icon={
							<ThemeIcon size={20} radius="xl">
								<IconCheck size={rem( 12 )} stroke={1.5} />
							</ThemeIcon>
						}
					>
						<List.Item>
							<b>Web Apps</b> – We prototype, build, deliver, and
							support all web solutions from single POC and MVP to
							enterprise.
						</List.Item>
						<List.Item>
							<b>Mobile Applications</b> – all packages have MIT
							license, you can use Mantine in any project
						</List.Item>
						<List.Item>
							<b>Machine Learning and AI</b> – focus ring will
							appear only when user navigates with keyboard
						</List.Item>
					</List>

					<Group mt={30}>
						<Button
							radius="lg"
							size="md"
							className={classes.btn}
							component="a"
							href={link}
							rightIcon={<IconExternalLink />}
						>
							See demo
						</Button>
						<Link to={ROUTES.PORTFOLIO}>
							<Button
								radius="lg"
								size="md"
								className={classes.control}
								component="a"
								href={github}
								rightIcon={<IconBrandGithub />}
							>
								Source code
							</Button>
						</Link>
					</Group>
				</div>
				<motion.div
					whileHover={{ scale: 1.3 }}
				>
					<Image
						withPlaceholder
						placeholder=""
						src={
							image || 'https://iyn.vercel.app/images/silverlight.png'
						}
						className={classes.image}
					/>
				</motion.div>
			</div>
		</Paper>
	)
}
