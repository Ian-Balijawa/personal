import { Avatar, Text, Button, Paper, Flex } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';

export default function UserInfoAction() {
    return (
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
            <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                size={120}
                radius={120}
                mx="auto"
            />
            <Text ta="center" fz="lg" fw={500} mt="md">
                Jane Fingerlicker
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
                jfingerlicker@me.io • Art director
            </Text>

            <Flex direction={"row"} mt="lg" justify={"space-between"} w="100%" align={"center"} gap={"xs"}>
                <Button variant="light" fullWidth>
                    <IconBrandLinkedin />
                </Button>
                <Button variant="light" fullWidth>
                    <IconBrandLinkedin />
                </Button>
                <Button variant="light" fullWidth>
                    <IconBrandLinkedin />
                </Button>
            </Flex>
        </Paper >
    );
}
