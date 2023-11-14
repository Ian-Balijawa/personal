import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem, Paper } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';

export const MOCKDATA = [
    {
        icon: IconGauge,
        title: 'Extreme performance',
        description:
            'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    },
    {
        icon: IconUser,
        title: 'Privacy focused',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    },
    {
        icon: IconCookie,
        title: 'No third parties',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    },
    {
        icon: IconLock,
        title: 'Secure by default',
        description:
            'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
    },
    {
        icon: IconMessage2,
        title: '24/7 Support',
        description:
            'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
    },
];

interface FeatureProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature( { icon: Icon, title, description }: FeatureProps ) {
    return (
        <Paper sx={{
            cursor: "pointer",
            '&:hover': {
                boxShadow: 'rgba(253,29,29, 100 ) 0px 22px 70px 4px'
            }
        }} bg={'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} shadow='xl' p="md" radius={"lg"}>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size="1.1rem" stroke={1.5} />
            </ThemeIcon>
            <Text c="white" mt="sm" mb={7}>
                {title}
            </Text>
            <Text c="white" size="sm" sx={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </Paper>
    );
}

const useStyles = createStyles( ( theme ) => ( {
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 4)`,
        paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        marginBottom: theme.spacing.md,
        textAlign: 'center',

        [theme.fn.smallerThan( 'sm' )]: {
            fontSize: rem( 28 ),
            textAlign: 'left',
        },
    },

    description: {
        textAlign: 'center',

        [theme.fn.smallerThan( 'sm' )]: {
            textAlign: 'left',
        },
    },
} ) );

interface FeaturesGridProps {
    title: React.ReactNode;
    description: React.ReactNode;
    data?: FeatureProps[];
}

export function FeaturesGrid( { title, description, data = MOCKDATA }: FeaturesGridProps ) {
    const { classes } = useStyles();
    const features = data.map( ( feature, index ) => <Feature {...feature} key={index} /> );

    return (
        <Container size='xl' className={classes.wrapper}>
            <Title c="white" className={classes.title}>{title}</Title>

            <Container size={560} p={0}>
                <Text size="sm" className={classes.description}>
                    {description}
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={3}
                spacing={50}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}

export const featuresGridData = {
    "title": "Integrate effortlessly with any technology stack",
    "description": "Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon."
}
