import { createStyles, Card, Image, Avatar, Text, Group } from '@mantine/core';

const useStyles = createStyles( ( theme ) => ( {
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        cursor: 'pointer',
        '&:hover': {
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
        },
    },

    title: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
    },

    body: {
        padding: theme.spacing.md,
    },
} ) );

interface SizeCardProps {
    image: string;
    category: string;
    title: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
}

export function SizeCard( {
    image,
    category,
    title,
    date,
    author,
}: SizeCardProps ) {
    const { classes } = useStyles();
    return (
        <Card withBorder radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0}>
                <Image src={image} height={140} width={140} />
                <div className={classes.body}>
                    <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                        {category}
                    </Text>
                    <Text className={classes.title} mt="xs" mb="md">
                        {title}
                    </Text>
                    <Group noWrap spacing="xs">
                        <Group spacing="xs" noWrap>
                            <Avatar size={20} src={author.avatar} />
                            <Text size="xs">{author.name}</Text>
                        </Group>
                        <Text size="xs" color="dimmed">
                            •
                        </Text>
                        <Text size="xs" color="dimmed">
                            {date}
                        </Text>
                    </Group>
                </div>
            </Group>
        </Card>
    );
}

export const data = {
    "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    "category": "technology",
    "title": "The best laptop for Frontend engineers in 2022",
    "date": "Feb 6th",
    "author": {
        "name": "Elsa Brown",
        "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
}
