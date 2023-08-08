import { SimpleGrid, Stack } from '@mantine/core';
import { ArticlesCardsGrid } from '../components/ArticlesCardGrid';
import Layout from '../components/Layout';
import { TaskCard } from '../components/TaskCard';
import { PortfolioHero } from '../components/PortfolioHero';


export default function Portfolio() {

    const cards = Array.from( { length: 9 } ).map( ( _, index ) => <TaskCard key={index.toString()} /> )

    return (
        <Layout>
            <PortfolioHero />
            <Stack spacing={6} >
                <ArticlesCardsGrid />
                <SimpleGrid
                    cols={3}
                    breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                    my="xl"
                >
                    {cards}
                </SimpleGrid>
            </Stack>
        </Layout >
    )
}
