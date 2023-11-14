import {
    createStyles,
    Title,
    Text,
    Container,
    rem,
    Center,
    Group,
    SegmentedControl,
    Box,
} from '@mantine/core'
import { Dots } from './Dots'
import { useToggle } from '@mantine/hooks'
import { IconCurrencyDollar, IconCurrencyDollarOff } from '@tabler/icons-react'

const useStyles = createStyles( theme => ( {
    wrapper: {
        position: 'relative',
        paddingTop: rem( 200 ),
        paddingBottom: rem( 120 ),

        [theme.fn.smallerThan( 'sm' )]: {
            paddingTop: rem( 80 ),
            paddingBottom: rem( 60 ),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
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

    title: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem( 80 ),
        letterSpacing: -1,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan( 'xs' )]: {
            fontSize: rem( 28 ),
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][
            theme.colorScheme === 'dark' ? 4 : 6
        ],
    },

    description: {
        textAlign: 'center',
        fontSize: theme.fontSizes.lg,

        [theme.fn.smallerThan( 'xs' )]: {
            textAlign: 'left',
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: 'flex',
        justifyContent: 'center',

        [theme.fn.smallerThan( 'xs' )]: {
            flexDirection: 'column',
        },
    },

    control: {
        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan( 'xs' )]: {
            height: rem( 42 ),
            fontSize: theme.fontSizes.md,

            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
} ) )

export function HeroEstimator() {
    const { classes } = useStyles()
    const [currency, toggleCurrency] = useToggle<'USD' | 'Local Currency'>( [
        'USD',
        'Local Currency',
    ] )

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Calucate{' '}
                    <Text
                        component="span"
                        className={classes.highlight}
                        inherit
                    >
                        Your
                    </Text>{' '}
                    Application
                </Title>

                <Container p={0} size={600}>
                    <Text
                        size="lg"
                        fz={20}
                        mt={20}

                        className={classes.description}
                    >
                        My Estimator is a free and open-source tool for
                        calculating the cost of your app. It will help you to
                        estimate the cost of your app in USD or Local Currency
                        as well as a budget for the development of your app
                        including it's expected time based on my experience
                        working with software products.
                    </Text>
                </Container>

                <Center my="xl">
                    <Text fw="bold" fz="xl">
                        Select Prefered Currency
                    </Text>
                </Center>

                <Group position="center">
                    <SegmentedControl
                        size="xl"
                        value={currency}
                        onChange={( value: typeof currency ) =>
                            toggleCurrency( value )
                        }
                        data={[
                            {
                                value: 'USD',
                                label: (
                                    <Center>
                                        <IconCurrencyDollar
                                            size="1rem"
                                            stroke={1.5}
                                        />
                                        <Box ml={10}>USD</Box>
                                    </Center>
                                ),
                            },
                            {
                                value: 'Local Currency',
                                label: (
                                    <Center>
                                        <IconCurrencyDollarOff
                                            size="1rem"
                                            stroke={1.5}
                                        />
                                        <Box ml={10}>Local Currency</Box>
                                    </Center>
                                ),
                            },
                        ]}
                    />
                </Group>
            </div>
        </Container>
    )
}


