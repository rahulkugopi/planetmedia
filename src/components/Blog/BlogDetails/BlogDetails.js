import React from 'react';
import styles from '../../../styles/BlogDetails/BlogDetails.module.scss';
import Header from '../../Header/Header';
import Banner from '../../../assests/images/banner-5.svg';

function BlogDetails() {
  return (
    <div data-testid='BlogDetails' className={styles.BlogDetails}>
      <Header />

      <div className='pl-10 pr-10'>
        <div className={styles.bannerSection}>
          <img src={Banner} className='object-fill' />
        </div>

        <div className='container mx-auto'>
          <div className={styles.BlogContent}>
            <div className='text-center bg-white pt-14'>
              <div className={styles.header}>
                <h2 className='uppercase'>My Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails