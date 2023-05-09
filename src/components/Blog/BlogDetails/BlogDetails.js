import React from 'react';
import styles from '../../../styles/BlogDetails/BlogDetails.module.scss';
import Header from '../../Header/Header';
import Banner from '../../../assests/images/banner-5.svg';
import { useParams } from 'react-router-dom';

function BlogDetails() {

  const { id } = useParams();

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

            <div className="grid lg:grid-cols-3 gap-6 pt-20 pl-10 pr-10">
              <div className={`${styles.grid} col-span-2`}>
                <div className={styles.topHeader}>
                  <h3>Lifestyle</h3>
                  <h2 className='mt-5'>Minstry are many variations of passages available not the majority</h2>
                  <p className='mt-5'>By Emma Jacson / 02 May 2021</p>
                </div>

                <div className={styles.contentMain}>
                  <div className={`${styles.imgView} pt-10`}>
                    <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${id}`} className='object-cover' />
                  </div>

                  <div className={styles.textView}>
                    <p><b className='font-bold'>E</b> xistence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now Face of the impenetrable foliage</p>
                    <p className='mt-5'>Sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now</p>
                    <p className='mt-5'>Face of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies</p>
                  </div>

                  <div className="grid lg:grid-cols-5 gap-6 pt-10">
                    <div className='flex items-center'>
                      <svg width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1025 1.96785C14.9827 9.01929 12.5399 20.1704 15.3084 20.4984C18.8912 20.8264 22.6368 21.9743 25.5682 24.7621C31.5937 30.6656 31.5937 40.5048 25.731 46.5723C19.8683 52.4759 10.0971 52.4759 4.2344 46.5723C-4.88538 37.2251 2.76872 20.9904 8.14287 12.955C10.4228 9.51125 14.9827 4.26367 22.6368 0L24.1025 1.96785ZM66.9329 1.96785C57.976 9.01929 55.3703 20.1704 58.1388 20.4984C61.8844 20.8264 65.4672 21.9743 68.3986 24.7621C74.4241 30.6656 74.587 40.5048 68.5614 46.5723C62.6987 52.4759 53.0904 52.4759 47.2276 46.5723C37.945 37.2251 45.762 20.9904 50.9733 12.955C53.4161 9.51125 57.976 4.26367 65.4672 0L66.9329 1.96785Z" fill="#A4BC96" fill-opacity="0.55" />
                      </svg>
                    </div>

                    <div className='col-span-4'>
                      <div className={styles.notify}>
                        <p className='mb-5'>Mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created</p>
                        <span className='pt-5'>- Lynda jacson</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.textView} mt-10`}>
                    <h2>Familiar with the countless indescribable</h2>
                    <p className='mt-2'>Dorizon the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 pt-10">
                    <div className={`${styles.imgThumbView} pt-10`}>
                      <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${id}`} className='object-cover' />
                    </div>

                    <div className={`${styles.imgThumbView} pt-10`}>
                      <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${id}`} className='object-cover' />
                    </div>
                  </div>

                  <div className={`${styles.textView} mt-10`}>
                    <h3>Serenity has taken possession</h3>
                    <p className='mt-2'>Dorizon the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little</p>
                  </div>


                </div>
              </div>

              <div>
                asdfwq
              </div>

            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails