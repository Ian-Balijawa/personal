import {
    createStyles,
    Image, Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Dots } from './Dots';
import { ROUTES } from '../constants/routes';
import { Link } from 'react-router-dom';

const useStyles = createStyles( ( theme ) => ( {
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
        maxWidth: rem( 480 ),
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan( 'md' )]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
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

    image: {
        flex: 1,
        [theme.fn.smallerThan( 'md' )]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant( { variant: 'light', color: theme.primaryColor } ).background,
        borderRadius: theme.radius.sm,
        padding: `${rem( 4 )} ${rem( 12 )}`,
    },
} ) );

export function Hero() {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>modern</span> React <br /> components library
                    </Title>
                    <Text color="dimmed" mt="md">
                        Build fully functional accessible web applications faster than ever – Mantine includes
                        more than 120 customizable components and hooks to cover you in any situation
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
                            <b>TypeScript based</b> – build type safe applications, all components and hooks
                            export types
                        </List.Item>
                        <List.Item>
                            <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                            any project
                        </List.Item>
                        <List.Item>
                            <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                            keyboard
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control}>
                            Get started
                        </Button>
                        <Link to={ROUTES.PORTFOLIO}>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Portfolio
                            </Button>
                        </Link>
                    </Group>
                </div>
                <Image withPlaceholder placeholder="" src={"/images/image.svg"} className={classes.image} />
            </div>
        </div>
    );
}
