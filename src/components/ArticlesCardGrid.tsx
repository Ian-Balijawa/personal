import { SimpleGrid, Container } from '@mantine/core'
import { BadgeCard, data } from './CardwithBadges'

interface MockData {
	title: string
	image: string
	date: string
}

export const mockdata: MockData[] = [
	{
		title: 'Top 10 places to visit in Norway this summer',
		image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
		date: 'August 18, 2022',
	},
	{
		title: 'Best forests to visit in North America',
		image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
		date: 'August 27, 2022',
	},
	{
		title: 'Hawaii beaches review: better than you think',
		image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
		date: 'September 9, 2022',
	},
	{
		title: 'Mountains at night: 12 best locations to enjoy the view',
		image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
		date: 'September 12, 2022',
	},
]

export function ProjectCardGrid() {
	const cards = data.map( ( _, index ) => (
		<BadgeCard key={index} {...data[index]} />
	) )

	return (
		<Container py={'xl'} size="xl">
			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Container>
	)
}
