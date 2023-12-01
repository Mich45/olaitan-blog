import { useParams, useRoutes } from 'react-router-dom';
import Landing from './components/pages/landing/HomePage';
import Academy from './components/pages/academy/Academy';
import Courses from './components/pages/academy/Courses';
import Layout from './components/layouts/MyLayout';
import Glossary from './components/pages/academy/Glossary';
import SingleCourseDetails from './components/pages/academy/SingleCourseDetails';
import Blog from './components/pages/blog/Blog';
import BlogId from './components/blogPost/singleBlog/SingleBlog';
import SingleBlog from './components/blogPost/singleBlog/SingleBlog';
import Event from './components/pages/event/Event';
function App() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Landing key="landing" />,
        },
        {
          path: '/academy',
          element: <Academy key="academy" />,
        },
        {
          path: '/courses',
          element: <Courses key="courses" />,
        },
        {
          path: '/glossary',
          element: <Glossary key="glossary" />,
        },
        {
          path: '/course-details',
          element: <SingleCourseDetails key="singlecoursedetails" />,
        },
        {
          path: '/single',
          element: <SingleBlog/>
        },
        {
          path: '/events',
          element: <Event/>
        },

      ],
    },
    {
      path: '/blog',
      element: <Blog key="blog" />,
    },
    {
      path: '/blog/:id',
      element: <SingleBlog/>
    }
  ]);
}

export default App;
