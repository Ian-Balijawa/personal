import { Container, Flex, ScrollArea, createStyles } from "@mantine/core"

import { Header } from "./Header"
import { GetInTouch } from './Contact'
import { Footer, data } from './Footer'

type PageProps = {
	children: React.ReactNode
}

const useStyles = createStyles( () => ( {
	root: {}
} ) )

export default function Layout( { children }: PageProps ) {
	const { classes } = useStyles()
	return (
		<div
			className={classes.root}
		>
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
