import { Text, SimpleGrid, Paper, Flex, ThemeIcon } from '@mantine/core';
import { IconChairDirector } from '@tabler/icons-react';


const data = [
    { label: 'UX Driven Engineering', description: 'Unlike other companies, we are a development company. Projects are driven by designers and they make sure design and experiences translate to code', progress: 65, color: 'teal', icon: 'up' },
    { label: 'Developing Shared Understanding', description: 'Unlike other companies, we are a development company. Projects are driven by designers and they make sure design and experiences translate to code', progress: 72, color: 'blue', icon: 'up' },
    { label: 'Proven Experience and Expertise', description: 'Unlike other companies, we are a development company. Projects are driven by designers and they make sure design and experiences translate to code', progress: 72, color: 'blue', icon: 'up' },
    { label: 'Security & Intellectual Property (IP)', description: 'Unlike other companies, we are a development company. Projects are driven by designers and they make sure design and experiences translate to code', progress: 72, color: 'blue', icon: 'up' },
    { label: 'Code Reviews', description: 'Unlike other companies, we are a development company. Projects are driven by designers and they make sure design and experiences translate to code', progress: 72, color: 'blue', icon: 'up' },
    {
        label: 'Quality Assurance & Testing',
        description: 'Unlike other companies, we are a development company. Projects are driven by designers and they make sure design and experiences translate to code',
        progress: 52,
        color: 'red',
        icon: 'down',
    },
] as const;

export function DevelopmentApproach() {
    const approach = data.map( ( stat ) => {
        return (
            <Paper withBorder sx={( theme ) => ( {
                cursor: "pointer",
                '&:hover': {
                    boxShadow: theme.shadows.lg
                }
            } )} radius="md" p="md" key={stat.label}>
                <Flex justify={"space-between"} align={"flex-start"} gap={"lg"}>
                    <ThemeIcon
                        size={44}
                        radius="md"
                        variant="gradient"
                        gradient={{ deg: 133, from: 'red', to: 'yellow' }}
                    >
                        <IconChairDirector />
                    </ThemeIcon>

                    <div>
                        <Text size="xs" mb="xs" tt="uppercase" fw={700}>
                            {stat.label}
                        </Text>
                        <Text c="dimmed">
                            {stat.description}
                        </Text>
                    </div>
                </Flex>
            </Paper>
        );
    } );

    return <SimpleGrid cols={2}>{approach}</SimpleGrid>;
}
