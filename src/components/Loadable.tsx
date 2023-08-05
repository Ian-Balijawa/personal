import { Box, Flex } from '@mantine/core'
import { Suspense } from 'react'
import Layout from './Layout'

export const Loadable = <P extends object>( WrappedComponent: React.FunctionComponent<P> ) => {
	const Component: React.FC<P> = props => {
		return (
			<Suspense
				fallback={
					<Layout>
						<Flex align="center" justify="center" h="100vh">
							<Box className="loader" />
						</Flex>
					</Layout>
				}
			>
				<WrappedComponent {...props} />
			</Suspense>
		)
	}
	return Component
}
