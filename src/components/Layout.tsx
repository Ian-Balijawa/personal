import { Container, Flex, ScrollArea, createStyles } from "@mantine/core"

import { Header } from "./Header"
import { GetInTouch } from './Contact'
import { Footer, data } from './Footer'
import { Dots } from './Dots'

type PageProps = {
	children: React.ReactNode
}

const useStyles = createStyles( ( theme ) => ( {
	root: {

	},

	dots: {
		position: 'absolute',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
		[theme.fn.smallerThan( 'sm' )]: {
			display: 'none',
		},
	}
} ) )

export default function Layout( { children }: PageProps ) {
	const { classes } = useStyles()
	return (
		<div className={classes.root}>
			<Dots className={classes.dots} style={{ left: 0, top: 100 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 100 }} />
			<Dots className={classes.dots} style={{ right: 60, top: 0 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 400 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 400 }} />
			<Flex>
				<ScrollArea
					type="never"
					h="100vh"
					w="100vw"
				>
					<Container size={1700}>
						<Header />
					</Container>

					<Container size="xl">
						{children}
						<GetInTouch />
						<Footer {...data} />
					</Container>
				</ScrollArea>
			</Flex>
		</div>
	)

}
