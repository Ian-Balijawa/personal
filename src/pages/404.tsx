import {
    createStyles,
    Image,
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    rem,
} from '@mantine/core';
import image from '../assets/image.svg';
import { ROUTES } from '../constants/routes';
import { Link } from 'react-router-dom';

const useStyles = createStyles( ( theme ) => ( {
    root: {
        paddingTop: rem( 80 ),
        paddingBottom: rem( 80 ),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh"
    },

    title: {
        fontWeight: 900,
        fontSize: rem( 34 ),
        marginBottom: theme.spacing.md,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan( 'sm' )]: {
            fontSize: rem( 32 ),
        },
    },

    control: {
        [theme.fn.smallerThan( 'sm' )]: {
            width: '100%',
        },
        textDecoration: "none",
        textTransform: "capitalize"

    },

    mobileImage: {
        [theme.fn.largerThan( 'sm' )]: {
            display: 'none',
        },
    },

    desktopImage: {
        [theme.fn.smallerThan( 'sm' )]: {
            display: 'none',
        },
    },
} ) );

export default function NotFound() {
    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
                <Image src={image} className={classes.mobileImage} />
                <div>
                    <Title className={classes.title}>Something is not right...</Title>
                    <Text color="dimmed" size="lg">
                        Page you are trying to open does not exist. You may have mistyped the address, or the
                        page has been moved to another URL. If you think this is an error contact support.
                    </Text>
                    <Link to={ROUTES.HOME}>
                        <Button radius="xl" variant="outline" fullWidth size="md" mt="xl" className={classes.control}>
                            Get back to home page
                        </Button>
                    </Link>
                </div>
                <Image src={image} className={classes.desktopImage} />
            </SimpleGrid>
        </Container>
    );
}
