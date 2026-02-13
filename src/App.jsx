import { createRouter, RouterProvider } from '@tanstack/react-router'

// Import genTree
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

function App() {
  return <RouterProvider router={router} />
}

export default App