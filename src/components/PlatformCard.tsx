import { createStyles, rem, Center, Card, Group, Button, Text, Image } from '@mantine/core';
import { IconUsers, IconGauge, IconManualGearbox, IconGasStation } from '@tabler/icons-react';

const useStyles = createStyles( ( theme ) => ( {
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: rem( -0.25 ),
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `${rem( 1 )} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: rem( 5 ),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
} ) );

const mockdata = [
    { label: 'Xcode', icon: IconUsers },
    { label: 'Cocoa Touch Frameworks', icon: IconManualGearbox },
    { label: 'NodeJS-Backend', icon: IconGasStation },
    { label: 'Swift', icon: IconGauge },
];

export interface PlatformCardProps {
    mockdata: typeof mockdata;
    image: string;
}

export function PlatformCard( { mockdata, image }: PlatformCardProps ) {
    const { classes } = useStyles();
    const features = mockdata.map( ( feature ) => (
        <Center key={feature.label}>
            <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
            <Text size="xs">{feature.label}</Text>
        </Center>
    ) );

    return (
        <Card miw={100} withBorder radius="md" className={classes.card}>
            <Image src={image} alt="app of your choosing" />

            <Card.Section className={classes.section} mt="md">
                <Text fz="sm" className={classes.label}>
                    Basic build tools
                </Text>

                <Group spacing={8} mb={-8}>
                    {features}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                            {"IOS"}
                        </Text>
                        <Text fz="sm" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                            Native app for Iphone
                        </Text>
                    </div>

                    <Button variant='outline' radius="xl" style={{ flex: 1 }}>
                        Select
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}
