import {
	createStyles,
	Header as Wrapper, Group, Box,
	Burger, rem, Image
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

const useStyles = createStyles( theme => ( {
	wrapper: {
		borderBottom: 'none',
		position: 'fixed',
		background: "transparent"
	},

	link: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: 'none',
		color: theme.white,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan( 'sm' )]: {
			height: rem( 42 ),
			display: 'flex',
			alignItems: 'center',
			width: '100%',
		},

		...theme.fn.hover( {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		} ),
	},

	subLink: {
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,

		...theme.fn.hover( {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.gray[0],
		} ),

		'&:active': theme.activeStyles,
	},

	dropdownFooter: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[7]
				: theme.colors.gray[0],
		margin: `calc(${theme.spacing.md} * -1)`,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem( 1 )} solid ${theme.colorScheme === 'dark'
			? theme.colors.dark[5]
			: theme.colors.gray[1]
			}`,
	},

	hiddenMobile: {
		[theme.fn.smallerThan( 'sm' )]: {
			display: 'none',
		},
	},

	hiddenDesktop: {
		[theme.fn.largerThan( 'sm' )]: {
			display: 'none',
		},
	},
} ) )

export function Header() {
	const [drawerOpened, { toggle: toggleDrawer, }] =
		useDisclosure( false )
	const { classes } = useStyles()

	return (
		<Box>
			<Wrapper className={classes.wrapper} height={60} px="md">
				<Group position="apart" sx={{ height: '100%' }}>
					<Link to={ROUTES.HOME}>
						<Image width={100} src={"/images/logo.png"} />
					</Link>
					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						className={classes.hiddenDesktop}
					/>
				</Group>
			</Wrapper>
		</Box>
	)
}
