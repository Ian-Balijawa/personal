// import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

// const useStyles = createStyles( ( theme ) => ( {
//     wrapper: {
//         position: 'relative',
//         paddingTop: rem( 180 ),
//         paddingBottom: rem( 130 ),
//         backgroundImage:
//             'url(https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',

//         [theme.fn.smallerThan( 'xs' )]: {
//             paddingTop: rem( 80 ),
//             paddingBottom: rem( 50 ),
//         },
//     },

//     inner: {
//         position: 'relative',
//         zIndex: 1,
//     },

//     title: {
//         fontWeight: 800,
//         fontSize: rem( 40 ),
//         letterSpacing: rem( -1 ),
//         paddingLeft: theme.spacing.md,
//         paddingRight: theme.spacing.md,
//         color: theme.white,
//         marginBottom: theme.spacing.xs,
//         textAlign: 'center',
//         fontFamily: `Greycliff CF, ${theme.fontFamily}`,

//         [theme.fn.smallerThan( 'xs' )]: {
//             fontSize: rem( 28 ),
//             textAlign: 'left',
//         },
//     },

//     highlight: {
//         color: theme.colors[theme.primaryColor][4],
//     },

//     description: {
//         color: theme.colors.gray[0],
//         textAlign: 'center',

//         [theme.fn.smallerThan( 'xs' )]: {
//             fontSize: theme.fontSizes.md,
//             textAlign: 'left',
//         },
//     },

//     controls: {
//         marginTop: `calc(${theme.spacing.xl} * 1.5)`,
//         display: 'flex',
//         justifyContent: 'center',
//         paddingLeft: theme.spacing.md,
//         paddingRight: theme.spacing.md,

//         [theme.fn.smallerThan( 'xs' )]: {
//             flexDirection: 'column',
//         },
//     },

//     control: {
//         height: rem( 42 ),
//         fontSize: theme.fontSizes.md,

//         '&:not(:first-of-type)': {
//             marginLeft: theme.spacing.md,
//         },

//         [theme.fn.smallerThan( 'xs' )]: {
//             '&:not(:first-of-type)': {
//                 marginTop: theme.spacing.md,
//                 marginLeft: 0,
//             },
//         },
//     },

//     secondaryControl: {
//         color: theme.white,
//         backgroundColor: 'rgba(255, 255, 255, .4)',

//         '&:hover': {
//             backgroundColor: 'rgba(255, 255, 255, .45) !important',
//         },
//     },
// } ) );

// export function PortfolioHero() {
//     const { classes, cx } = useStyles();

//     return (
//         <div className={classes.wrapper}>
//             <Overlay color="#000" opacity={0.65} zIndex={1} />

//             <div className={classes.inner}>
//                 <Title className={classes.title}>
//                     Automated AI code reviews for{' '}
//                     <Text component="span" inherit className={classes.highlight}>
//                         any stack
//                     </Text>
//                 </Title>

//                 <Container size={640}>
//                     <Text size="lg" className={classes.description}>
//                         Build more reliable software with AI companion. AI is also trained to detect lazy
//                         developers who do nothing and just complain on Twitter.
//                     </Text>
//                 </Container>

//                 <div className={classes.controls}>
//                     <Button className={classes.control} variant="white" size="lg">
//                         Get started
//                     </Button>
//                     <Button className={cx( classes.control, classes.secondaryControl )} size="lg">
//                         Live demo
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { Dots } from './Dots';

const useStyles = createStyles( ( theme ) => ( {
    wrapper: {
        position: 'relative',
        paddingTop: rem( 120 ),
        paddingBottom: rem( 80 ),

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
        color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

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
        fontSize: rem( 70 ),
        letterSpacing: -1,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan( 'xs' )]: {
            fontSize: rem( 28 ),
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    },

    description: {
        textAlign: 'center',

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
} ) );

export function PortfolioHero() {
    const { classes } = useStyles();

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Automated AI{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        code reviews
                    </Text>{' '}
                    for any stack
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" color="dimmed" className={classes.description}>
                        Build more reliable software with AI companion. AI is also trained to detect lazy
                        developers who do nothing and just complain on Twitter.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} size="lg" variant="default" color="gray">
                        Book a demo
                    </Button>
                    <Button className={classes.control} size="lg">
                        Purchase a license
                    </Button>
                </div>
            </div>
        </Container>
    );
}
