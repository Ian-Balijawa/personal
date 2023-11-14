import { Text, SimpleGrid, Paper, Flex, ThemeIcon, Badge, Group, Title, createStyles, rem, useMantineTheme } from '@mantine/core';
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

const useStyles = createStyles( theme => ( {
    wrapper: {
        cursor: "pointer",
        color: "white",
        background: 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr = "#833ab4", endColorstr = "#fcb045", GradientType = 1 )',
        '&:hover': {
            boxShadow: 'rgba(253,29,29, 100 ) 0px 22px 70px 4px'
        }
    },
    title: {
        fontSize: rem( 44 ),
        fontWeight: 900,

        [theme.fn.smallerThan( 'sm' )]: {
            fontSize: rem( 24 ),
        },
        color: theme.white,
    },
} ) )

export function DevelopmentApproach() {
    const { classes } = useStyles()
    const theme = useMantineTheme()

    const approach = data.map( ( stat ) => {
        return (
            <Paper className={classes.wrapper} radius="md" p="md" key={stat.label}>
                <Flex justify={"space-between"} align={"flex-start"} gap={"lg"}>
                    <ThemeIcon
                        size={44}
                        radius="md"
                        variant="gradient"
                        gradient={{ deg: 133, from: theme.primaryColor, to: theme.colors.yellow[9] }}
                    >
                        <IconChairDirector />
                    </ThemeIcon>

                    <div>
                        <Text size="xs" fw="bold" mb="xs" tt="uppercase">
                            {stat.label}
                        </Text>
                        <Text fw="lighter">
                            {stat.description}
                        </Text>
                    </div>
                </Flex>
            </Paper>
        );
    } );

    return (

        <>
            <Group position="center" mt="xl">
                <Badge variant="filled" size="lg">
                    Development Approach
                </Badge>
            </Group>

            <Title my="lg" order={5} className={classes.title} ta="center" >
                Our design approach that ships your product
            </Title>


            <SimpleGrid cols={2}
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
            >{approach}</SimpleGrid>
        </>
    )
}
