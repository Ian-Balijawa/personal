import { Container, Flex, ScrollArea } from "@mantine/core"

import { Header } from "./Header"
import { GetInTouch } from './Contact'
import { Footer, data } from './Footer'
import { PortfolioHero } from './PortfolioHero'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

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
					<Container size={1700}>
						<Header />
					</Container>

					{
						location.pathname === ROUTES.PORTFOLIO ?
							<Container size={1700}>
								<PortfolioHero />
							</Container> : null
					}

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
