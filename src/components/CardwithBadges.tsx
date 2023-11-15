import {
	Card,
	Image,
	Text,
	Group,
	Badge,
	Button,
	ActionIcon,
	createStyles,
	rem,
	getStylesRef,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import {
	IconBrandGithub,
	IconExternalLink,
	IconListDetails,
} from '@tabler/icons-react'
import { IconBrandNodejs } from '@tabler/icons-react'
import { IconBrandReact } from '@tabler/icons-react'
import { getFirstMinimalDescription } from '../utils/minimise-description'
import { IconBrandTypescript } from '@tabler/icons-react'

const useStyles = createStyles( theme => ( {
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		transition: 'transform 150ms ease, box-shadow 150ms ease',
		background: "transparent",
		'&:hover': {
			transform: 'scale(1.01)',
			zIndex: 1,
			boxShadow: theme.shadows.xl,
		},
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
		fontWeight: 600,
	},

	section: {
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		paddingBottom: theme.spacing.md,
	},

	like: {
		color: theme.colors.red[6],
	},

	label: {
		textTransform: 'uppercase',
		fontSize: theme.fontSizes.xs,
		fontWeight: 700,
	},
	carousel: {
		'&:hover': {
			[`& .${getStylesRef( 'carouselControls' )}`]: {
				opacity: 1,
			},
		},
	},

	carouselControls: {
		ref: getStylesRef( 'carouselControls' ),
		transition: 'opacity 150ms ease',
		opacity: 0,
	},

	carouselIndicator: {
		width: rem( 4 ),
		height: rem( 4 ),
		transition: 'width 250ms ease',

		'&[data-active]': {
			width: rem( 16 ),
		},
	},
} ) )

interface BadgeCardProps {
	images: string[]
	title: string
	type: string
	description: string
	badges: {
		icon: React.ReactNode
		label: string
	}[]
}

export function BadgeCard( {
	images,
	title,
	description,
	type,
	badges,
}: BadgeCardProps ) {
	const { classes, theme } = useStyles()

	const features = badges.map( badge => (
		<Button
			variant="light"
			radius="xl"
			key={badge.label}
			color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
			leftIcon={badge.icon}
			size="xs"
		>
			{badge.label}
		</Button>
	) )

	const slides = images.map( image => (
		<Carousel.Slide key={image}>
			<Image src={image} height={220} />
		</Carousel.Slide>
	) )

	return (
		<Card shadow='xl' radius="md" p="md" className={classes.card}>
			<Card.Section>
				<Carousel
					withIndicators
					loop
					classNames={{
						root: classes.carousel,
						controls: classes.carouselControls,
						indicator: classes.carouselIndicator,
					}}
				>
					{slides}
				</Carousel>
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group position="apart">
					<Text c="white" fz="lg" fw={500}>
						{title}
					</Text>
					<Badge size="sm">{type}</Badge>
				</Group>
				<Text c="white" fz="sm" mt="xs">
					{getFirstMinimalDescription( description )}
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text c="white" mt="md" className={classes.label} >
					Technology stack used
				</Text>
				<Group spacing={7} mt={5}>
					{features}
				</Group>
			</Card.Section>

			<Group mt="xs">
				<Button
					className={classes.btn}
					rightIcon={<IconListDetails />}
					radius="md"
					style={{ flex: 1 }}
				>
					Show details
				</Button>

				<Button
					variant="outline"
					rightIcon={<IconBrandGithub />}
					radius="md"
					style={{ flex: 1 }}
				>
					Source code
				</Button>

				<ActionIcon variant="default" radius="md" size={36}>
					<IconExternalLink className={classes.like} />
				</ActionIcon>
			</Group>
		</Card>
	)
}

export const data = [
	{
		images: [
			'https://iyn.vercel.app/images/cefs.png',
			'https://iyn.vercel.app/images/mysite.png',
			'https://iyn.vercel.app/images/delv.png',
			'https://iyn.vercel.app/images/dissertation.png',
			'https://iyn.vercel.app/images/gol.png',
		],
		title: 'CEFS',
		type: 'WEB APP',
		description:
			'The Complaint Evaluation Feedback System is a web application designed to help students learn about managing customer complaints more effectively. The system allows students to submit complaints online, which are then evaluated and assigned to the appropriate team members for resolution. Students can track the progress of their complaints and provide feedback on the resolution process!',
		badges: [
			{
				icon: <IconBrandNodejs />,
				label: 'NodeJS',
			},
			{
				icon: <IconBrandReact />,
				label: 'ReactJS',
			},
			{
				icon: <IconBrandTypescript />,
				label: 'Typescript',
			},
			{
				icon: '🌲',
				label: 'Nature',
			},
			{
				icon: '🤽',
				label: 'Water sports',
			},
		],
	},
]
