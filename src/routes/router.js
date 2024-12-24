import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import TodoContainer from '../pages/todo/TodoContainer';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';
import Update from '../pages/update/Update';


const router = createBrowserRouter([
    {
        path: '/',
        element : <Layout/>,
        children: [
            {
                index: true,
                element: <Main/>,
            },
            {
                path: '/todo',
                element: <TodoContainer/>,
            },
            {
                path: '/sign-up',
                element: <SignUp/>,
            },
            {
                path: '/sign-in',
                element: <SignIn/>,
            },
            {
                path: '/update',
                element: <Update/>,
            }
        ]
    }
],
{
    future: {
        v7_startTransition: true,
        v7_fetcherPersist : true,
        v7_normalizeFormMethod : true,
        v7_partialHydration : true,
        v7_relativeSplatPath : true,
        v7_skipActionErrorRevalidation : true,
        v7_startTransition : true
    },
})

export default router;