import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "@/routes/LandingPage"
import Register from "@/routes/Register"
import Login from "@/routes/Login"
import Root from "@/routes/Root"
import Dashboard from "@/routes/Dashboard"
import ManageAccess from "@/routes/ManageAccess"
import Posts from "@/routes/Posts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/app",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "posts",
        element: <Posts />
      },
      {
        path: "access",
        element: <ManageAccess />
      }
    ]
  }
])

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.01]">
      <RouterProvider router={router} />
    </main>
  )
}

export default App
