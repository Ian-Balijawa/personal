import { Avatar, Text, Button, Paper, Flex, createStyles } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';

const useStyles = createStyles( () => ( {
    root: {
        background: 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        '&:hover': {
            boxShadow: 'rgba(253,29,29, 100 ) 0px 22px 70px 4px'
        }
    },
} ) )


export default function UserInfoAction( { name, role, email, image }: { name: string, role: string, email: string, image?: string } ) {
    const { classes } = useStyles()

    return (
        <Paper className={classes.root} radius="md" shadow='xl' p="lg">
            <Avatar
                src={image || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}
                size={120}
                radius={120}
                mx="auto"
            />
            <Text c="white" ta="center" fz="lg" fw={500} mt="md">
                {name}
            </Text>
            <Text c="white" ta="center" fz="sm">
                {email} • {role}
            </Text>

            <Flex direction={"row"} mt="lg" justify={"space-between"} w="100%" align={"center"} gap={"xs"}>
                <Button variant="light" fullWidth>
                    <IconBrandLinkedin color="white" />
                    <IconExternalLink color="white" />
                </Button>
                <Button variant="light" fullWidth>
                    <IconBrandLinkedin color="white" />
                    <IconExternalLink color="white" />
                </Button>
                <Button variant="light" fullWidth>
                    <IconBrandLinkedin color="white" />
                    <IconExternalLink color="white" />
                </Button>
            </Flex>
        </Paper >
    );
}
