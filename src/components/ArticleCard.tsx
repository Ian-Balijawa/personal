import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    createStyles,
    rem,
} from '@mantine/core';

const useStyles = createStyles( ( theme ) => ( {
    card: {
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    rating: {
        position: 'absolute',
        top: theme.spacing.xs,
        right: rem( 12 ),
        pointerEvents: 'none',
    },

    title: {
        display: 'block',
        marginTop: theme.spacing.md,
        marginBottom: rem( 5 ),
    },

    action: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        ...theme.fn.hover( {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        } ),
    },

    footer: {
        marginTop: theme.spacing.md,
    },
} ) );

interface ArticleCardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    rating: string;
    author: {
        name: string;
        image: string;
    };
}

export function ArticleCard( {
    className,
    image,
    link,
    title,
    description,
    author,
    rating,
    ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps> ) {
    const { classes, cx, theme } = useStyles();
    const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };

    return (
        <Card withBorder radius="md" className={cx( classes.card, className )} {...others}>
            <Card.Section>
                <a {...linkProps}>
                    <Image src={image} height={180} />
                </a>
            </Card.Section>

            <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                {rating}
            </Badge>

            <Text className={classes.title} fw={500} component="a" {...linkProps}>
                {title}
            </Text>

            <Text fz="sm" color="dimmed" lineClamp={4}>
                {description}
            </Text>

            <Group position="apart" className={classes.footer}>
                <Center>
                    <Avatar src={author.image} size={24} radius="xl" mr="xs" />
                    <Text fz="sm" inline>
                        {author.name}
                    </Text>
                </Center>

                <Group spacing={8} mr={0}>
                    <ActionIcon className={classes.action}>
                        <IconHeart size="1rem" color={theme.colors.red[6]} />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconBookmark size="1rem" color={theme.colors.yellow[7]} />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconShare size="1rem" />
                    </ActionIcon>
                </Group>
            </Group>
        </Card>
    );
}

export const articles =
{
    "image": "/images/resident-evil.png" || "https://i.imgur.com/Cij5vdL.png",
    "link": "https://tlabs.net/",
    "title": "Resident Evil Village review",
    "rating": "outstanding",
    "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
    "author": {
        "name": "Bill Wormeater",
        "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
}
