import {
	createStyles,
	ThemeIcon,
	Text,
	SimpleGrid,
	Box,
	Stack,
} from '@mantine/core'
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react'

type ContactIconVariant = 'white' | 'gradient'

interface ContactIconStyles {
	variant: ContactIconVariant
}

const useStyles = createStyles( ( theme, { variant }: ContactIconStyles ) => ( {
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		color: theme.white,
	},

	icon: {
		marginRight: theme.spacing.md,
		backgroundColor: 'transparent',
	},

	title: {
		color:
			variant === 'gradient'
				? theme.colors.gray[6]
				: theme.colors[theme.primaryColor][0],
	},

	description: {
		color: variant === 'gradient' ? theme.black : theme.white,
	},
} ) )

interface ContactIconProps
	extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: React.FC<any>
	title: React.ReactNode
	description: React.ReactNode
	variant?: ContactIconVariant
}

function ContactIcon( {
	icon: Icon,
	title,
	description,
	variant = 'gradient',
	className,
	...others
}: ContactIconProps ) {
	const { classes, cx } = useStyles( { variant } )
	return (
		<div className={cx( classes.wrapper, className )} {...others}>
			{variant === 'gradient' ? (
				<ThemeIcon size={40} radius="md" className={classes.icon}>
					<Icon size="1.5rem" />
				</ThemeIcon>
			) : (
				<Box mr="md">
					<Icon size="1.5rem" />
				</Box>
			)}

			<div>
				<Text size="xs" className={classes.title}>
					{title}
				</Text>
				<Text className={classes.description}>{description}</Text>
			</div>
		</div>
	)
}

interface ContactIconsListProps {
	data?: ContactIconProps[]
	variant?: ContactIconVariant
}

const MOCKDATA = [
	{ title: 'Email', description: 'hello@tlabs.net', icon: IconAt },
	{ title: 'Phone', description: '+256787444814', icon: IconPhone },
	{
		title: 'Address',
		description: 'Makerere University School of computing',
		icon: IconMapPin,
	},
	{ title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
]

export function ContactIconsList( {
	data = MOCKDATA,
	variant,
}: ContactIconsListProps ) {
	const items = data.map( ( item, index ) => (
		<ContactIcon key={index} variant={variant} {...item} />
	) )
	return <Stack>{items}</Stack>
}

export function ContactIcons() {
	return (
		<SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
			<Box
				sx={theme => ( {
					padding: theme.spacing.xl,
					borderRadius: theme.radius.md,
					backgroundColor: theme.white,
				} )}
			>
				<ContactIconsList />
			</Box>

			<Box
				sx={theme => ( {
					padding: theme.spacing.xl,
					borderRadius: theme.radius.md,
					background: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][1]
						} 0%, ${theme.colors[theme.primaryColor][1]} 100%)`,
				} )}
			>
				<ContactIconsList variant="white" />
			</Box>
		</SimpleGrid>
	)
}
