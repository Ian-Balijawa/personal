import { SimpleGrid, Container } from '@mantine/core'
import { BadgeCard, data } from './CardwithBadges'
import Motion from './MotionDiv'

export function ProjectCardGrid() {
	const cards = Array.from( { length: 6 } ).map( ( _, index ) => (
		<Motion duration={2 + ++index / 2}>
			<BadgeCard key={index} {...data[0]} />
		</Motion>
	) )

	return (
		<Container py={"xl"} my="xl" size="xl">
			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Container>
	)
}
