import React from 'react';
import Header from '../Header/Header';
import Banner from '../../assests/images/banner-4.svg';
import styles from '../../styles/Blog/Blog.module.scss';
import Gallery from '../Gallery/Gallery';
import BlogTileView from './BlogTileView/BlogTileView';

function Blog() {
  return (
    <div data-testid='Blog' className={styles.Blog}>
      <Header />

      <div className='pl-10 pr-10'>
        <div className={`${styles.bannerSection} lg:h-460 h-auto`}>
          <img src={Banner} />
        </div>
      </div>

      <div className='container mx-auto'>
        <div className={`${styles.BlogContent} lg:hdrAlign`}>
          <div className='text-center bg-white pt-14'>
            <div className={styles.header}>
              <h2 className='uppercase'>My Blog</h2>
            </div>
          </div>

          <BlogTileView />

        </div>
      </div>

      <Gallery />

    </div>
  )
}

export default Blog