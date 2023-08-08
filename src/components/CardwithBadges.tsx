import { IconHeart } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    createStyles,
    rem, getStylesRef
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles( ( theme ) => ( {
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            zIndex: 1,
            boxShadow: theme.shadows.xl,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },

    section: {
        borderBottom: `${rem( 1 )} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.red[6],
    },

    label: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },
    carousel: {
        '&:hover': {
            [`& .${getStylesRef( 'carouselControls' )}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getStylesRef( 'carouselControls' ),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    carouselIndicator: {
        width: rem( 4 ),
        height: rem( 4 ),
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: rem( 16 ),
        },
    },
} ) );

interface BadgeCardProps {
    images: string[];
    title: string;
    country: string;
    description: string;
    badges: {
        emoji: string;
        label: string;
    }[];
}

export function BadgeCard( { images, title, description, country, badges }: BadgeCardProps ) {
    const { classes, theme } = useStyles();

    const features = badges.map( ( badge ) => (
        <Badge
            color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
            key={badge.label}
            leftSection={badge.emoji}
        >
            {badge.label}
        </Badge>
    ) );

    const slides = images.map( ( image ) => (
        <Carousel.Slide key={image}>
            <Image src={image} height={220} />
        </Carousel.Slide>
    ) );

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Carousel
                    withIndicators
                    loop
                    classNames={{
                        root: classes.carousel,
                        controls: classes.carouselControls,
                        indicator: classes.carouselIndicator,
                    }}
                >
                    {slides}
                </Carousel>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group position="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                    <Badge size="sm">{country}</Badge>
                </Group>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Perfect for you, if you enjoy
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                    Show details
                </Button>
                <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    );
}

export const data = {
    "images": [
        "/images/image.svg" || 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        "/images/image.svg" || 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        "/images/image.svg" || 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        "/images/image.svg" || 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        "/images/image.svg" || 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ],
    "title": "Verudela Beach",
    "country": "Croatia",
    "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    "badges": [
        {
            "emoji": "☀️",
            "label": "Sunny weather"
        },
        {
            "emoji": "🦓",
            "label": "Onsite zoo"
        },
        {
            "emoji": "🌊",
            "label": "Sea"
        },
        {
            "emoji": "🌲",
            "label": "Nature"
        },
        {
            "emoji": "🤽",
            "label": "Water sports"
        }
    ]
}
