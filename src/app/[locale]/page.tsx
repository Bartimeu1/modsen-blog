import { AuthorsList } from '@components/AuthorsList';
import { CategoryList } from '@components/CategoryList';
import { JoinUs } from '@components/JoinUs';
import { getLimitedAuthors, getLimitedPosts } from '@services/api';

// import { useTranslations } from 'next-intl';
import { About, Banner, Logos, Posts, Reviews, Story } from './components';

const HomePage = async () => {
  // const t = useTranslations('Index');
  const postsData = await getLimitedPosts(5);
  const authorsData = await getLimitedAuthors(4);

  return (
    <main>
      <Banner post={postsData[0]} />
      <div className="container">
        <Posts featuredPost={postsData[1]} posts={postsData.slice(1)} />
        <About />
        <CategoryList />
        <Story />
        <AuthorsList authors={authorsData} />
        <Logos />
        <Reviews />
        <JoinUs />
      </div>
    </main>
  );
};

export default HomePage;
