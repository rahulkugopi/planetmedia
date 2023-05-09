import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Banner/Banner.module.scss';
import whiteLogo from '../../../assests/images/white-logo.svg';
import imgOne from '../../../assests/images/img-7.svg';
import imgTwo from '../../../assests/images/img-8.svg';
import imgThree from '../../../assests/images/img-9.svg';
import imgFour from '../../../assests/images/img-10.svg';

function Banner() {
    return (
        <div data-testid='Banner' className={styles.Banner}>
            <div className="grid lg:grid-cols-2 gap-0 banner-left">
                <div className={`${styles.BannerLeft} bg-no-repeat bg-cover flex flex-col justify-between`}>
                    <div className='w-full pt-10 pb-10 pr-10 pl-10'>
                        <div className={styles.logo}>
                            <img src={whiteLogo} />
                        </div>
                    </div>
                    <div className={styles.socialSection}>
                        <div className=' pt-10 pb-10 pr-10 pl-10 flex gap-3'>
                            <span className='p-3 bg-white flex justify-center items-center'>
                                <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.35657 4.52783L5.16576 6.61912H3.71953V12.686H1.54711V6.61912H0.4646V4.52783H1.54711V3.26878C1.54711 1.56791 2.15907 0.552246 3.89861 0.552246H5.34422V2.64353H4.43956C3.76461 2.64353 3.71953 2.93831 3.71953 3.4829V4.52783H5.35657Z" fill="#545454" />
                                </svg>
                            </span>

                            <span className='p-3 bg-white flex justify-center items-center'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.27716 2.95982C8.28296 3.05237 8.28296 3.14493 8.28296 3.23809C8.28296 6.06062 6.43741 9.31343 3.06479 9.31343C2.02569 9.31343 1.06028 8.96283 0.248047 8.35481C0.395964 8.37442 0.538091 8.38055 0.691272 8.38055C1.54877 8.38055 2.33731 8.04344 2.96793 7.46851C2.1615 7.4489 1.48613 6.83352 1.25346 5.98707C1.36664 6.00668 1.48034 6.02017 1.59878 6.02017C1.76407 6.02017 1.92883 5.99381 2.08201 5.94784C1.24188 5.74925 0.61126 4.88993 0.61126 3.85224C0.61126 3.8455 0.61126 3.83202 0.61126 3.82589C0.855508 3.98402 1.13924 4.08332 1.44033 4.0968C0.946574 3.71311 0.622841 3.0585 0.622841 2.3187C0.622841 1.92214 0.713907 1.55806 0.872879 1.24056C1.77565 2.5369 3.1327 3.38335 4.65451 3.47529C4.62556 3.31655 4.60871 3.15105 4.60871 2.98556C4.60871 1.80936 5.42673 0.850739 6.44267 0.850739C6.97065 0.850739 7.44756 1.10817 7.78288 1.52496C8.19715 1.43241 8.59406 1.25404 8.94674 1.00949C8.8104 1.50534 8.52089 1.92214 8.1403 2.18569C8.50983 2.13972 8.86725 2.02082 9.19678 1.85533C8.94674 2.27825 8.63459 2.65581 8.27716 2.95982Z" fill="#545454" />
                                </svg>
                            </span>

                            <span className='p-3 bg-white flex justify-center items-center'>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.148924 4.27063H2.28543V11.6855H0.148924V4.27063ZM1.23023 0.701477C0.505009 0.701477 0.0258789 1.25527 0.0258789 1.98146C0.0258789 2.69184 0.485744 3.26072 1.20413 3.26072H1.21718C1.96166 3.26072 2.42774 2.69184 2.42153 1.98146C2.41469 1.25527 1.96166 0.701477 1.23023 0.701477ZM7.51547 4.09824C6.37886 4.09824 5.873 4.81796 5.59274 5.32579V4.27063H3.46306C3.46306 4.27063 3.48916 4.96664 3.46306 11.6855H5.59274V7.54744C5.59274 7.32333 5.61262 7.10569 5.66358 6.94192C5.81956 6.50018 6.16819 6.04407 6.75856 6.04407C7.5279 6.04407 7.83862 6.725 7.83862 7.71983V11.6855H9.96891V7.43539C9.96891 5.16058 8.91992 4.09824 7.51547 4.09824Z" fill="#545454" />
                                </svg>
                            </span>

                            <span className='p-3 bg-white flex justify-center items-center'>
                                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.82621 4.64894C8.82621 7.35936 7.52262 9.37709 5.60501 9.37709C4.96089 9.37709 4.35545 8.97397 4.15282 8.5162C3.80405 10.1046 3.73406 10.409 3.73406 10.409C3.60941 10.9385 3.35397 11.4686 3.12924 11.881C2.4888 12.404 2.42924 11.5943 2.42924 11.5943C2.4145 11.1088 2.42187 10.5261 2.53117 10.0066C2.53117 10.0066 2.64722 9.44948 3.29871 6.25574C3.10529 5.81572 3.10529 5.16065 3.10529 5.16065C3.10529 4.13794 3.618 3.37499 4.25475 3.37499C4.79817 3.37499 5.06159 3.8505 5.06159 4.41615C5.06159 5.04425 4.71159 5.98676 4.53414 6.85687C4.38677 7.59285 4.8522 8.18476 5.47299 8.18476C6.6071 8.18476 7.36666 6.50769 7.36666 4.52403C7.36666 3.00736 6.48245 1.87748 4.88291 1.87748C3.07459 1.87748 1.94907 3.43887 1.94907 5.1791C1.94907 5.78094 2.1038 6.20251 2.3445 6.53466C2.4538 6.68725 2.46915 6.74048 2.42985 6.92004C2.39977 7.04566 2.33775 7.35084 2.30643 7.46723C2.26775 7.64679 2.1431 7.70925 2.0117 7.64679C1.18092 7.25077 0.792236 6.19258 0.792236 5.00806C0.792236 3.05207 2.21986 0.701477 5.04624 0.701477C7.32859 0.701477 8.82621 2.61204 8.82621 4.64894Z" fill="#545454" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.BannerRight}`}>
                    <div className={styles.topNav}>
                        <div className='pt-8 pb-8 pr-10 pl-10 flex gap-5 justify-end'>
                            <Link to='/' className='uppercase'>Home</Link>
                            <Link to='/blog' className='uppercase'>Blog</Link>
                        </div>
                    </div>

                    <div className=' pl-12 pt-12 pr-12 pb-12'>
                        <div className='flex gap-3'>
                            <h3 className='uppercase text-gray'>By Emma </h3>
                            <h3 className='uppercase text-gray text-center'><span>02 May <br /> 2021</span></h3>
                        </div>
                        <h2 className='font-serif font-light mt-4'>
                            Life is a flower of which
                            love is the honey.
                        </h2>
                        <p className='mt-5'>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees</p>

                        <div className={styles.readMore}>
                            <Link to='/' className='uppercase text-gray-special flex gap-3 font-medium mt-5 text-1xl items-center'>
                                Read More
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5171 6.55L5.92545 13.013L5.38788 12.3917L10.061 6.99029H0.334595V6.11145H10.0617L5.38788 0.708339L5.92545 0.086998L11.5171 6.55Z" fill="#606D59" />
                                </svg>
                            </Link>
                        </div>

                    </div>

                    <div className={`${styles.bottomThumbImg} grid lg:grid-cols-4 gap-0`}>
                        <div className=''>
                            <img src={imgOne} className='object-fill' />
                        </div>

                        <div className=''>
                            <img src={imgTwo} className='object-fill' />
                        </div>

                        <div className=''>
                            <img src={imgThree} className='object-fill' />
                        </div>

                        <div className=''>
                            <img src={imgFour} className='object-fill' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner