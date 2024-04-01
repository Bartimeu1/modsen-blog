'use client';

import { useEffect, useState } from 'react';

import { AuthorsList } from '@components/AuthorsList';
import { CategoryList } from '@components/CategoryList';
import { JoinUs } from '@components/JoinUs';
import { Loader } from '@components/Loader';
import { IAuthorData, IPostData } from '@root/types/api';
import { getLimitedAuthors, getLimitedPosts } from '@services/api';
import { WithLazyLoad } from '@services/hocs/WithLazyLoad';

// import { useTranslations } from 'next-intl';
import { About, Banner, Logos, Posts, Reviews, Story } from './components';

const LazyPosts = WithLazyLoad(Posts);
const LazyAbout = WithLazyLoad(About);
const LazyCategoryList = WithLazyLoad(CategoryList);
const LazyStory = WithLazyLoad(Story);
const LazyAuthorsList = WithLazyLoad(AuthorsList);
const LazyLogos = WithLazyLoad(Logos);
const LazyReviews = WithLazyLoad(Reviews);
const LazyJoinUs = WithLazyLoad(JoinUs);

const HomePage = () => {
  const [postsData, setPostsData] = useState<IPostData[]>();
  const [authorsData, setAuthorsData] = useState<IAuthorData[]>();

  useEffect(() => {
    getLimitedPosts(5).then((data) => {
      setPostsData(data);
    });

    getLimitedAuthors(4).then((data) => {
      setAuthorsData(data);
    });
  }, []);
  // const t = useTranslations('Index');

  if (!postsData || !authorsData) {
    return <Loader />;
  }

  return (
    <main>
      {/* <Banner post={postsData[0]} />
      <div className="container">
        <LazyPosts featuredPost={postsData[1]} posts={postsData.slice(1)} />
        <LazyAbout />
        <LazyCategoryList />
        <LazyStory />
        <LazyAuthorsList authors={authorsData} />
        <LazyLogos />
        <LazyReviews />
        <LazyJoinUs />
      </div> */}
    </main>
  );
};

export default HomePage;
