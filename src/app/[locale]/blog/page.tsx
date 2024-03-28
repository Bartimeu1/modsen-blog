import { CategoryList } from '@components/CategoryList';
import { JoinUs } from '@components/JoinUs';

import { FeaturedPost, PostsSlider } from './components';

const BlogPage = () => {
  return (
    <main>
      <FeaturedPost />
      <div className="container">
        <PostsSlider />
        <CategoryList />
        <JoinUs />
      </div>
    </main>
  );
};

export default BlogPage;
