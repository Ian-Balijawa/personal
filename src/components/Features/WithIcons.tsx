/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createStyles,
	Text,
	SimpleGrid, rem,
	Paper,
	Badge,
	Group,
	Title,
	useMantineTheme,
	Box
} from '@mantine/core'
import { IconHexagonNumber3 } from '@tabler/icons-react'
import { IconHexagonNumber1, IconHexagonNumber2 } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React from 'react'

const useStyles = createStyles( theme => ( {
	feature: {
		position: 'relative',
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		paddingLeft: theme.spacing.xl,
		cursor: "pointer",
		background: 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
		filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr = "#833ab4", endColorstr = "#fcb045", GradientType = 1 )',
		boxShadow: 'rgba(253,29,29, 100 ) 0px 22px 70px 4px'
	},
	title: {
		fontSize: rem( 54 ),
		fontWeight: 900,

		[theme.fn.smallerThan( 'sm' )]: {
			fontSize: rem( 30 ),
		},
	},

	overlay: {
		position: 'absolute',
		height: rem( 100 ),
		width: rem( 160 ),
		top: 0,
		left: 0,
		zIndex: 1,
	},

	content: {
		position: 'relative',
		zIndex: 2,
	},

	icon: {
		color: theme.fn.variant( { variant: 'light', color: theme.primaryColor } )
			.color,
	},
} ) )

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
	icon: React.FC<any>
	title: string
	description: string
	iconSrv: React.FC<any>[]
}

function Feature( {
	icon: Icon,
	title,
	description,
	className,
	iconSrv,
	...others
}: FeatureProps ) {
	const { classes, cx } = useStyles()
	const theme = useMantineTheme()


	return (
		<motion.div whileHover={{ scale: 1.1, zIndex: 999 }} >

			<Paper
				radius="md"
				className={cx( classes.feature, className )}
				{...others}
			>
				<div className={classes.overlay} />

				<div className={classes.content}>
					<Icon size={rem( 38 )} color={theme.white} className={classes.icon} stroke={1.5} />
					<Text fw={700} c="white" fz="lg" mb="xs" mt={5} className={classes.title}>
						{title}
					</Text>
					<Text color={theme.white}
						fz="sm">
						{description}
					</Text>
				</div>
				<SimpleGrid cols={3} spacing={2} py={20}>
					{iconSrv.map( ( Icon, index ) => (
						<Icon key={index} size={rem( 38 )} className={classes.icon} color={theme.white} />
					) )}
				</SimpleGrid>
			</Paper>
		</motion.div>
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
	const items = mockdata.map( item => <Feature {...item} key={item.title} /> )
	const { classes } = useStyles()

	return (
		<Box
			sx={( theme ) => ( {
				padding: `calc(${theme.spacing.xl} * 2) 0px}`,
			} )}
		>
			<Group position="center">
				<Badge variant="filled" size="lg">
					Mobile App Maintenance
				</Badge>
			</Group>

			<Title order={2} c="white" className={classes.title} ta="center" my="sm">
				We can offer you 360° support with
			</Title>
			<SimpleGrid
				cols={3}
				breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
				spacing={'sm'}
			>
				{items}
			</SimpleGrid>
		</Box>
	)
}
