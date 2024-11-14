import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';


const router = createBrowserRouter([
    {
        path: '/',
        element : <Layout/>,
        children: [
            {
                index: true,
                element: <Main/>,
            }
        ]
    }
])

export default router;