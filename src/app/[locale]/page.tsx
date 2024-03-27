import { AuthorsList } from '@components/AuthorsList';
import { CategoryList } from '@components/CategotyList';

// import { useTranslations } from 'next-intl';
import {
  About,
  Banner,
  JoinUs,
  Logos,
  Posts,
  Reviews,
  Story,
} from './components';
import { authors } from './config';

const HomePage = () => {
  // const t = useTranslations('Index');

  return (
    <main>
      <Banner />
      <div className="container">
        <Posts />
        <About />
        <CategoryList />
        <Story />
        <AuthorsList authors={authors} />
        <Logos />
        <Reviews />
        <JoinUs />
      </div>
    </main>
  );
};

export default HomePage;
