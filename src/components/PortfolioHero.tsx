import { createStyles, Container, rem, Title, Text } from '@mantine/core';
import { Dots } from './Dots';

const useStyles = createStyles( ( theme ) => ( {
    wrapper: {
        position: 'relative',
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    dots: {
        position: 'absolute',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem( 50 ),
        letterSpacing: -1,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan( 'xs' )]: {
            fontSize: rem( 48 ),
            textAlign: 'center',
        },
    },

    highlight: {
        color: theme.primaryColor,
    },

    description: {
        textAlign: 'center',

        [theme.fn.smallerThan( 'xs' )]: {
            textAlign: 'left',
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
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
} ) );

export function PortfolioHero() {
    const { classes } = useStyles();

    return (
        <Container className={classes.wrapper} >
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: -100, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
            <Dots className={classes.dots} style={{ right: 100, top: 60 }} />
            <Dots className={classes.dots} style={{ right: 120, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Our Recent{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        Case Studies
                    </Text>{' '}
                </Title>
            </div>
        </Container>
    );
}
