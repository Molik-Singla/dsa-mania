// import QuestionOperationModal from "./components/home/QuestionOperationModal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Login } from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
        index: true, // it means that this route is the default route
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const App = () => {
    return (
        <section className="h-full min-h-screen w-full bg-primary-bg font-primary">
            <RouterProvider router={router} />
        </section>
    );
};

export default App;
