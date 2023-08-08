import { Container, Flex, ScrollArea } from "@mantine/core"

import { Header } from "./Header"
import { GetInTouch } from './Contact'
import { Footer, data } from './Footer'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { HeroBlog } from './HeroBlog'

type PageProps = {
	children: React.ReactNode
}

export default function Layout( { children }: PageProps ) {

	const location = useLocation()

	return (
		<>
			<Flex>
				<ScrollArea
					type="never"
					h="100vh"
					w="100vw"
				>
					{
						location.pathname === ROUTES.BLOG
							?
							<Container size={1700}>
								<HeroBlog />
							</Container> : null
					}

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
		</>
	)

}
