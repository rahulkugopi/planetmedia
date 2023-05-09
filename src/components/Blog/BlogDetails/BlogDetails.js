import React, { useEffect, useState } from 'react';
import styles from '../../../styles/BlogDetails/BlogDetails.module.scss';
import Header from '../../Header/Header';
import Banner from '../../../assests/images/banner-5.svg';
import { useParams } from 'react-router-dom';
import User from '../../../assests/images/user.svg';
import PopularImgOne from '../../../assests/images/img-11.svg';
import PopularImgTwo from '../../../assests/images/img-12.svg';
import PopularImgThree from '../../../assests/images/img-13.svg';
import Gallery from '../../Gallery/Gallery';
import searchIcon from '../../../assests/images/search.svg';
import ThumbImageOne from '../../../assests/images/thumb-img-1.svg'
import ThumbImageTwo from '../../../assests/images/thumb-img-2.svg'
import ThumbImageThree from '../../../assests/images/thumb-img-3.svg'
import SideImg from '../../../assests/images/img-14.svg';
import CategoryImgOne from '../../../assests/images/img-15.svg';
import CategoryImgTwo from '../../../assests/images/img-16.svg';
import CategoryImgThree from '../../../assests/images/img-17.svg';
import CategoryImgFour from '../../../assests/images/img-18.svg';
import api from '../../../constants/Api';

function BlogDetails() {

  const { id } = useParams();

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    featchData();
  }, []);

  const featchData = () => {
    api.get(`posts/${id}`).then((res) => setBlogData(res.data))
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div data-testid='BlogDetails' className={styles.BlogDetails}>
      <Header />

      <div className='pl-10 pr-10'>
        <div className={`${styles.bannerSection} lg:h-460 h-auto`}>
          <img src={Banner} className='object-fill' />
        </div>

        <div className='container mx-auto'>
          <div className={`${styles.BlogContent} lg:hdrAlign`}>
            <div className='text-center bg-white pt-10 lg:pt-14'>
              <div className={styles.header}>
                <h2 className='uppercase'>My Blog</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 pt-20 pl-0 pr-0 lg:pl-10 lg:pr-10">
              <div className={`${styles.grid} lg:col-span-2`}>
                <div className={styles.topHeader}>
                  <h3>Lifestyle</h3>
                  <h2 className='mt-4'>{blogData.title}</h2>
                  <p className='mt-4'>By Emma Jacson / 02 May 2021</p>
                </div>

                <div className={styles.contentMain}>
                  <div className={`${styles.imgView} lg:h-360 pt-10  flex justify-center`}>
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

                  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-10">
                    <div className={`${styles.imgThumbView} lg:imgThumbViewAlign`}>
                      <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${id}`} className='object-cover' />
                    </div>

                    <div className={`${styles.imgThumbView}`}>
                      <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${id}`} className='object-cover' />
                    </div>
                  </div>

                  <div className={`${styles.textView} mt-10`}>
                    <h3>Serenity has taken possession</h3>
                    <p className='mt-2'>Dorizon the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 pt-10">
                    <div className='flex items-center gap-5'>
                      <div className={styles.socialLabel}>
                        <p>Shares:</p>
                      </div>
                      <div className='col-span-4'>
                        <div className='flex gap-3'>
                          <span className={`${styles.socialItems} ${styles.faceBook} flex justify-center items-center`}>
                            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.126 4.307L5.887 6.573H4.076V13.146H1.356V6.573H0V4.307H1.356V2.943C1.356 1.1 2.122 0 4.3 0H6.11V2.266H4.978C4.133 2.266 4.078 2.585 4.078 3.175V4.307H6.128H6.126Z" fill="white" />
                            </svg>
                          </span>

                          <span className={`${styles.socialItems} ${styles.twitter} flex justify-center items-center`}>
                            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.563 2.60922C11.571 2.72322 11.571 2.83822 11.571 2.95322C11.5778 3.94208 11.388 4.92243 11.0127 5.83732C10.6374 6.75221 10.084 7.5834 9.38469 8.2826C8.6854 8.9818 7.85414 9.53507 6.9392 9.91027C6.02426 10.2855 5.04388 10.4751 4.05502 10.4682C2.61705 10.4715 1.20869 10.0597 -0.000976562 9.28222C0.210897 9.30515 0.423918 9.31583 0.637023 9.31422C1.82569 9.31715 2.98073 8.9198 3.91602 8.18622C3.3649 8.17619 2.83068 7.99424 2.38801 7.66578C1.94535 7.33733 1.61636 6.87878 1.44702 6.35422C1.61243 6.38035 1.77957 6.39406 1.94702 6.39522C2.18317 6.39507 2.41835 6.36517 2.64702 6.30622C2.04761 6.18641 1.50825 5.86254 1.12079 5.38975C0.733332 4.91696 0.521732 4.32449 0.522023 3.71322V3.68022C0.888259 3.88394 1.29727 3.9987 1.71602 4.01522C1.15538 3.64124 0.758634 3.06736 0.606796 2.41076C0.454958 1.75416 0.559481 1.06436 0.899023 0.482218C1.56213 1.29948 2.38982 1.96803 3.32827 2.4444C4.26672 2.92078 5.29492 3.19431 6.34602 3.24722C6.30301 3.04806 6.28089 2.84496 6.28002 2.64122C6.28048 2.11133 6.44015 1.5938 6.73831 1.15576C7.03648 0.717714 7.45938 0.379367 7.95218 0.184598C8.44498 -0.0101709 8.98493 -0.0523751 9.502 0.0634594C10.0191 0.179294 10.4894 0.447822 10.852 0.834218C11.4434 0.720002 12.0104 0.504139 12.528 0.196218C12.3312 0.806739 11.9179 1.32422 11.366 1.65122C11.891 1.59187 12.404 1.454 12.888 1.24222C12.5261 1.76894 12.0782 2.23105 11.563 2.60922Z" fill="white" />
                            </svg>
                          </span>

                          <span className={`${styles.socialItems} ${styles.pinterst} flex justify-center items-center`}>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.72401 1.03914e-06C5.4096 -0.000790717 4.13498 0.45089 3.11435 1.27914C2.09372 2.10738 1.3893 3.26171 1.11946 4.54812C0.849624 5.83454 1.03082 7.17463 1.63261 8.34319C2.23439 9.51175 3.22008 10.4375 4.42401 10.965C4.39946 10.5245 4.43309 10.0827 4.52401 9.651L5.26001 6.533C5.13555 6.24737 5.07317 5.93855 5.07701 5.627C5.07701 4.779 5.56901 4.146 6.17701 4.146C6.28634 4.14435 6.39475 4.16613 6.49497 4.20986C6.59518 4.2536 6.68486 4.31828 6.758 4.39956C6.83113 4.48084 6.88602 4.57684 6.91897 4.68109C6.95191 4.78535 6.96216 4.89545 6.94901 5.004C6.83825 5.69413 6.66897 6.37358 6.44301 7.035C6.40952 7.16894 6.4078 7.30886 6.43797 7.44358C6.46815 7.57831 6.5294 7.70412 6.61682 7.81097C6.70425 7.91783 6.81544 8.00278 6.94152 8.05903C7.06761 8.11529 7.20509 8.14131 7.34301 8.135C8.42801 8.135 9.15801 6.743 9.15801 5.092C9.16676 4.78623 9.10994 4.48214 8.99138 4.20015C8.87282 3.91817 8.69527 3.66483 8.47066 3.45718C8.24604 3.24953 7.97958 3.09236 7.68918 2.99626C7.39877 2.90015 7.09116 2.86733 6.78701 2.9C6.41952 2.88545 6.05291 2.94585 5.70951 3.07753C5.36611 3.20921 5.05311 3.40941 4.78957 3.66594C4.52602 3.92247 4.31745 4.22996 4.17655 4.56968C4.03566 4.9094 3.96538 5.27425 3.97001 5.642C3.9525 6.04977 4.08682 6.44954 4.34701 6.764C4.39264 6.80169 4.42515 6.85286 4.43988 6.91017C4.45461 6.96748 4.45081 7.02799 4.42901 7.083C4.40201 7.188 4.33801 7.442 4.31201 7.542C4.30657 7.5726 4.29406 7.6015 4.2755 7.62643C4.25693 7.65135 4.23281 7.6716 4.20505 7.68558C4.17729 7.69955 4.14666 7.70687 4.11558 7.70694C4.08451 7.70702 4.05384 7.69985 4.02601 7.686C3.63348 7.48176 3.31166 7.16389 3.10258 6.77391C2.8935 6.38394 2.80687 5.93997 2.85401 5.5C2.88069 4.99417 3.00855 4.49883 3.23003 4.04327C3.4515 3.58772 3.76209 3.18122 4.14343 2.84781C4.52476 2.5144 4.96909 2.26085 5.45013 2.10218C5.93117 1.9435 6.43915 1.88291 6.94401 1.924C7.39801 1.89677 7.85287 1.96034 8.28201 2.11099C8.71114 2.26164 9.10593 2.49635 9.44328 2.80139C9.78062 3.10643 10.0538 3.47567 10.2467 3.88752C10.4397 4.29937 10.5486 4.74557 10.567 5.2C10.567 7.446 9.31901 9.122 7.47901 9.122C7.20457 9.12952 6.93262 9.0681 6.68805 8.94337C6.44347 8.81863 6.23407 8.63457 6.07901 8.408C6.07901 8.408 5.74701 9.727 5.67901 9.981C5.54566 10.4163 5.35104 10.8305 5.10101 11.211C5.88817 11.4438 6.71619 11.5046 7.5289 11.3891C8.34161 11.2737 9.11997 10.9848 9.81117 10.542C10.5024 10.0993 11.0902 9.51296 11.5349 8.82295C11.9795 8.13294 12.2705 7.35536 12.3881 6.54296C12.5057 5.73057 12.4472 4.90238 12.2165 4.11461C11.9858 3.32683 11.5883 2.5979 11.0511 1.97728C10.5138 1.35666 9.84935 0.858876 9.10274 0.51771C8.35614 0.176545 7.54488 -1.91086e-05 6.72401 1.03914e-06Z" fill="white" />
                            </svg>
                          </span>

                          <span className={`${styles.socialItems} ${styles.v} flex justify-center items-center`}>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.749 1.56708C12.4592 1.311 12.111 1.12981 11.735 1.03934C11.359 0.948867 10.9666 0.951866 10.592 1.04808C9.87955 1.24673 9.2265 1.61654 8.68968 2.1253C8.15286 2.63405 7.74856 3.26633 7.51198 3.96708C8.64298 3.87408 9.24098 4.04807 9.12598 5.29408C9.03027 5.8769 8.8268 6.43679 8.52598 6.94508C8.17898 7.57807 7.54698 8.82507 6.70298 7.92407C5.95398 7.11707 6.00298 5.57108 5.83898 4.54508C5.74421 3.90742 5.61299 3.27572 5.44598 2.65308C5.37827 2.38534 5.25495 2.13487 5.08403 1.91795C4.91312 1.70103 4.69844 1.52253 4.45398 1.39408C3.94684 1.30671 3.4253 1.40924 2.98898 1.68208C1.85598 2.35208 1.10798 3.29408 0.000976562 4.08208V4.16408C0.369977 4.34908 0.254977 4.64808 0.542977 4.69508C1.22398 4.78608 1.86798 4.05908 2.31998 4.82108C2.54782 5.28959 2.72516 5.78102 2.84898 6.28708C3.08998 6.95508 3.26598 7.68708 3.46098 8.44408C3.78398 9.74407 4.17698 11.6861 5.30598 12.1601C5.62305 12.2331 5.95178 12.24 6.27164 12.1803C6.59149 12.1206 6.8956 11.9956 7.16498 11.8131C8.29829 11.1023 9.27869 10.1728 10.049 9.07908C11.3899 7.28231 12.3873 5.25325 12.991 3.09408C13.0636 2.83721 13.0796 2.56763 13.0378 2.30397C12.9961 2.04032 12.8975 1.78889 12.749 1.56708Z" fill="white" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.subSection}>
                    <div className={`${styles.userView} flex justify-center mt-12 flex-col flex-wrap`}>
                      <div className="grid lg:grid-cols-5 gap-6">
                        <div className='flex items-center w-full justify-center'>
                          <img src={User} />
                        </div>

                        <div className='lg:col-span-4 flex flex-col items-center'>
                          <h2 className='mt-0 font-serif text-xl'>Emma Jacson</h2>
                          <h3 className='uppercase text-gray mt-1'>Blogger</h3>
                          <p className='mt-5'>Hello, I am in his into a horrible lay on his armour-like back horrible vermin. He lay on his armour</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.BtnView} grid lg:grid-cols-2 gap-6 pt-12 `}>
                    <div className='lg:text-left'>
                      <p>Previous post</p>
                      <h2>Describable forms of the insects</h2>
                    </div>

                    <div className='lg:text-right'>
                      <p>Next post</p>
                      <h2>Noticed by me when hear buzz</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.rightSide}>
                <div className={`${styles.form} pt-2`}>
                  <input type='text' placeholder='Search....' />
                  <img src={searchIcon} className={styles.searchIcon} />
                </div>


                <div className={styles.popularPosts}>
                  <div className={`${styles.SubHeader}`}>
                    <h2>Popular Posts</h2>
                  </div>

                  <div className={`${styles.sidePostView} grid lg:grid-cols-4 gap-6 pt-8`}>
                    <div className={styles.thumbImage}>
                      <img src={ThumbImageOne} className='object-fill' />
                    </div>
                    <div className='lg:col-span-3 flex flex-col justify-center'>
                      <h2>Meridian sun strikes the upper surface of the impenetrable</h2>
                      <p>02 May 2021</p>
                    </div>
                  </div>

                  <div className={`${styles.sidePostView} grid lg:grid-cols-4 gap-6 pt-8`}>
                    <div className={styles.thumbImage}>
                      <img src={ThumbImageTwo} className='object-fill' />
                    </div>
                    <div className='lg:col-span-3 flex flex-col justify-center'>
                      <h2>Meridian sun strikes the upper surface of the impenetrable</h2>
                      <p>02 May 2021</p>
                    </div>
                  </div>

                  <div className={`${styles.sidePostView} grid lg:grid-cols-4 gap-6 pt-8`}>
                    <div className={styles.thumbImage}>
                      <img src={ThumbImageThree} className='object-fill' />
                    </div>
                    <div className='lg:col-span-3 flex flex-col justify-center'>
                      <h2>Meridian sun strikes the upper surface of the impenetrable</h2>
                      <p>02 May 2021</p>
                    </div>
                  </div>
                </div>

                <div className='mt-20 flex justify-center'>
                  <img src={SideImg} />
                </div>

                <div className={styles.popularPosts}>
                  <div className={`${styles.SubHeader}`}>
                    <h2>Categories</h2>
                  </div>

                  <div className={`${styles.sidePostView} grid sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-8`}>
                    <div className={`${styles.CategorySection} flex justify-center flex-col lg:justify-normal`}>
                      <img src={CategoryImgOne} />
                      <h3 className='pt-5 text-center'>Lifestyle</h3>
                    </div>

                    <div className={`${styles.CategorySection} flex justify-center flex-col lg:justify-normal`}>
                      <img src={CategoryImgTwo} />
                      <h3 className='pt-5 text-center'>Lifestyle</h3>
                    </div>

                    <div className={`${styles.CategorySection} flex justify-center flex-col lg:justify-normal`}>
                      <img src={CategoryImgThree} />
                      <h3 className='pt-5 text-center'>Lifestyle</h3>
                    </div>

                    <div className={`${styles.CategorySection} flex justify-center flex-col lg:justify-normal`}>
                      <img src={CategoryImgFour} />
                      <h3 className='pt-5 text-center'>Lifestyle</h3>
                    </div>
                  </div>
                </div>

                <div className={styles.popularPosts}>
                  <div className={`${styles.SubHeader}`}>
                    <h2>Tags</h2>
                  </div>

                  <div className={`${styles.sidePostView} ${styles.tags} mt-8`}>
                    <div className='flex gap-4'>
                      <span>Art & Design</span>
                      <span>Interior</span>
                      <span>Modern</span>
                    </div>
                    <div className='flex gap-4 mt-4'>
                      <span>Travel</span>
                      <span>Home decor</span>
                      <span>Fashion</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className={styles.stories}>
              <div className={`${styles.hdr} flex justify-center`}>
                <h1 className='uppercase'><span>Related posts</span></h1>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pb-0">
                <div className={styles.grid}>
                  <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                    <img src={PopularImgOne} className='object-fill' />
                  </div>

                  <div className='pt-0 pb-0 pl-5 pr-5'>
                    <div className={`${styles.gridContent} text-center`}>
                      <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                      <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                      <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                    </div>
                  </div>
                </div>

                <div className={styles.grid}>
                  <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                    <img src={PopularImgTwo} className='object-fill' />
                  </div>

                  <div className='pt-0 pb-0 pl-5 pr-5'>
                    <div className={`${styles.gridContent} text-center`}>
                      <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Fashion</h3>
                      <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                      <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                    </div>
                  </div>
                </div>

                <div className={styles.grid}>
                  <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                    <img src={PopularImgThree} className='object-fill' />
                  </div>

                  <div className='pt-0 pb-0 pl-5 pr-5'>
                    <div className={`${styles.gridContent} text-center`}>
                      <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Lifestyle</h3>
                      <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                      <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery />

    </div>
  )
}

export default BlogDetails