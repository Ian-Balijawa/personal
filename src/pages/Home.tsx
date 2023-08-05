import { Stack } from '@mantine/core';
import { WithTitle } from '../components/Features/WithTitle';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import { WithCards } from '../components/Features/WithCards';
import { FeaturesAsymmetrical } from '../components/Features/WithIcons';
import { FeaturesImages, data } from '../components/Features/WithImageIcons';
import { FeaturesGrid, featuresGridData } from '../components/Features/WithMonotonIcons';
import { FAQs } from '../components/FAQs';

export default function Home() {
    return (
        <Layout>
            <Stack spacing={100}>
                <Hero />
                <WithTitle />
                <WithCards />
                <FeaturesAsymmetrical />
                <FeaturesImages {...data} />
                <FeaturesGrid {...featuresGridData} />
                <FAQs />
            </Stack>
        </Layout>
    )
}
