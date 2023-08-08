import { SimpleGrid } from '@mantine/core';
import Layout from '../components/Layout';
import { ArticleCard, articles } from '../components/ArticleCard';

export default function Academy() {
    return (
        <Layout>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {Array.from( { length: 12 } ).map( ( _, index ) => <ArticleCard key={index.toString()} {...articles} /> )}
            </SimpleGrid>
        </Layout>
    )
}
