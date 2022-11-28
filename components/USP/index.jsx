import React from 'react'
import styles from './usp.module.css'

const index = () => {
  return (
    <section className={styles['usp']}>
      <div className={styles['usp__block']}>

        <article className={styles['usp__article']}>
          {/* image */}
          <svg width="90" height="90" className={styles['ups__article-image']} alt='image check' viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_21_234)">
              <path d="M53.9814 31.8749L39.3751 46.4437L36.0189 43.1249C34.9071 42.0503 33.4214 41.4497 31.8751 41.4497C30.3289 41.4497 28.8432 42.0503 27.7314 43.1249C26.6345 44.225 26.0186 45.7151 26.0186 47.2687C26.0186 48.8222 26.6345 50.3123 27.7314 51.4124C34.1814 57.8624 35.4564 59.9437 39.3751 59.9437C43.2939 59.9437 43.3314 59.0812 62.2689 40.1624C63.2716 39.0448 63.8078 37.5853 63.7671 36.0844C63.7265 34.5834 63.1121 33.1551 62.0504 32.0934C60.9887 31.0317 59.5604 30.4173 58.0594 30.3767C56.5585 30.336 55.099 30.8722 53.9814 31.8749ZM59.6064 37.4999L42.0189 55.0874C41.3163 55.7858 40.3658 56.1779 39.3751 56.1779C38.3845 56.1779 37.434 55.7858 36.7314 55.0874C30.2626 48.6374 29.7751 48.5062 29.7751 47.2687C29.7766 46.8544 29.9005 46.4498 30.1314 46.1058C30.3622 45.7618 30.6897 45.4938 31.0725 45.3354C31.4553 45.1771 31.8764 45.1355 32.2828 45.2159C32.6892 45.2964 33.0627 45.4952 33.3564 45.7874L38.0439 50.4749C38.2182 50.6506 38.4256 50.7901 38.6541 50.8853C38.8826 50.9805 39.1276 51.0295 39.3751 51.0295C39.6227 51.0295 39.8677 50.9805 40.0962 50.8853C40.3247 50.7901 40.5321 50.6506 40.7064 50.4749L56.6439 34.5374C57.0451 34.189 57.5635 34.0057 58.0946 34.0243C58.6257 34.043 59.1299 34.2624 59.5057 34.6381C59.8814 35.0139 60.1008 35.5181 60.1195 36.0492C60.1381 36.5803 59.9548 37.0987 59.6064 37.4999Z" fill="#FB8500"/>
              <path d="M45 15C39.0666 15 33.2664 16.7595 28.3329 20.0559C23.3994 23.3524 19.5543 28.0377 17.2836 33.5195C15.013 39.0013 14.4189 45.0333 15.5765 50.8527C16.734 56.6721 19.5912 62.0176 23.7868 66.2132C27.9824 70.4088 33.3279 73.266 39.1473 74.4236C44.9667 75.5811 50.9987 74.987 56.4805 72.7164C61.9623 70.4458 66.6477 66.6006 69.9441 61.6671C73.2405 56.7336 75 50.9334 75 45C75 37.0435 71.8393 29.4129 66.2132 23.7868C60.5871 18.1607 52.9565 15 45 15ZM45 71.25C39.8083 71.25 34.7331 69.7105 30.4163 66.8261C26.0995 63.9417 22.735 59.842 20.7482 55.0454C18.7614 50.2489 18.2415 44.9709 19.2544 39.8789C20.2673 34.7869 22.7673 30.1096 26.4385 26.4384C30.1096 22.7673 34.7869 20.2672 39.8789 19.2544C44.9709 18.2415 50.2489 18.7614 55.0455 20.7482C59.842 22.735 63.9417 26.0995 66.8261 30.4163C69.7105 34.7331 71.25 39.8082 71.25 45C71.25 51.9619 68.4844 58.6387 63.5616 63.5616C58.6387 68.4844 51.9619 71.25 45 71.25Z" fill="#008059"/>
              <path d="M89.5125 43.7437L81.75 35.1562L84.1875 23.9062C84.2894 23.4498 84.2171 22.9717 83.9846 22.5658C83.7522 22.1599 83.3765 21.8556 82.9312 21.7125L71.9062 18.0937L68.3625 7.06872C68.2194 6.62344 67.915 6.24771 67.5091 6.01529C67.1033 5.78287 66.6252 5.71053 66.1687 5.81247L54.9187 8.24997L46.2562 0.487467C45.9117 0.176518 45.4641 0.00439453 45 0.00439453C44.5359 0.00439453 44.0883 0.176518 43.7437 0.487467L35.1562 8.24997L23.9062 5.81247C23.4498 5.71053 22.9717 5.78287 22.5658 6.01529C22.1599 6.24771 21.8556 6.62344 21.7125 7.06872L18.0937 18.0937L7.06872 21.6375C6.62344 21.7806 6.24771 22.0849 6.01529 22.4908C5.78287 22.8967 5.71053 23.3748 5.81247 23.8312L8.24997 35.0812L0.487467 43.7437C0.176518 44.0882 0.00439453 44.5359 0.00439453 45C0.00439453 45.4641 0.176518 45.9117 0.487467 46.2562L8.24997 54.8437L5.81247 66.0937C5.71053 66.5502 5.78287 67.0283 6.01529 67.4341C6.24771 67.84 6.62344 68.1444 7.06872 68.2875L18.0937 71.8312L21.6375 82.8562C21.7806 83.3015 22.0849 83.6772 22.4908 83.9096C22.8967 84.1421 23.3748 84.2144 23.8312 84.1125L35.0812 81.675L43.6687 89.4375C44.0133 89.7484 44.4609 89.9205 44.925 89.9205C45.3891 89.9205 45.8367 89.7484 46.1812 89.4375L54.7687 81.675L66.0187 84.1125C66.4752 84.2144 66.9533 84.1421 67.3591 83.9096C67.765 83.6772 68.0694 83.3015 68.2125 82.8562L71.7562 71.8312L82.7812 68.2875C83.2265 68.1444 83.6022 67.84 83.8346 67.4341C84.0671 67.0283 84.1394 66.5502 84.0375 66.0937L81.6 54.8437L89.3625 46.2562C89.6947 45.9306 89.894 45.4932 89.9217 45.0289C89.9494 44.5646 89.8036 44.1065 89.5125 43.7437ZM78.2625 53.1187C77.4 54.0937 77.6437 53.9062 80.1375 65.3812C69.3562 68.85 69.0187 68.6437 68.6062 69.9187L65.2875 80.2312L54.675 77.9625C53.2125 77.6625 52.8 78.5812 44.9812 85.6687C36.2625 77.7937 36.6562 77.925 35.6062 77.925C35.3062 77.925 36.1125 77.775 24.6 80.2312C21.1312 69.45 21.3562 69.1125 20.0625 68.7L9.82497 65.3062L12.1125 54.6937C12.3937 53.4187 12.2437 53.6625 4.40622 45C12.3187 36.225 12.3937 36.5625 12.1125 35.3062L9.82497 24.6937L20.1562 21.375C21.5812 20.925 21.45 19.9125 24.6937 9.84372C36.2437 12.3187 35.9437 12.5437 36.9562 11.7187L45 4.40622L53.0437 11.6812C54.0187 12.5437 53.8312 12.3 65.3062 9.80622C68.775 20.5875 68.55 20.925 69.8437 21.3375L80.1562 24.6562L77.8875 35.2687C77.6062 36.5437 77.7375 36.2625 85.5937 44.9625L78.2625 53.1187Z" fill="#008059"/>
            </g>
            <defs>
              <clipPath id="clip0_21_234">
                <rect width="90" height="90" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          {/* text */}
          <h2>Authenticity</h2>
          <p>We verify each network participant to guarantee transparency, safety, and real nature restoration when trading valuable assets on a global scale.</p>
        </article>

        <article className={styles['usp__article']}>
          {/* image */}
          <svg width="90" height="90" className={styles['ups__article-image']} alt='image security' viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.4361 18.8723L46.4361 18.8724L46.4412 18.8763C51.2738 22.5463 57.2276 24.4306 63.2917 24.2093C63.6178 24.2079 63.9406 24.2755 64.2388 24.4077C64.5391 24.5409 64.8076 24.7365 65.0264 24.9816C65.2452 25.2266 65.4093 25.5155 65.5077 25.8289C65.6061 26.1424 65.6366 26.4732 65.5972 26.7993C63.7693 41.5196 60.1185 55.8111 45.9936 62.5629C45.6831 62.7106 45.3436 62.7873 44.9998 62.7873C44.656 62.7873 44.3165 62.7106 44.0061 62.5629C29.8809 55.811 26.2302 41.5191 24.4024 26.7985C24.3631 26.4726 24.3936 26.1421 24.492 25.8289C24.5904 25.5155 24.7545 25.2266 24.9733 24.9816C25.1921 24.7365 25.4606 24.5409 25.7609 24.4077C26.0612 24.2746 26.3864 24.2069 26.715 24.2093V24.2093H26.7186H26.8793C32.8954 24.402 38.7948 22.5189 43.5868 18.8761L43.5868 18.8761L43.5917 18.8723C43.998 18.5554 44.4986 18.3833 45.0139 18.3833C45.5292 18.3833 46.0297 18.5554 46.4361 18.8723ZM45.2748 23.7417L45.0004 23.561L44.7256 23.7412C40.2894 26.6506 35.1734 28.3576 29.879 28.6947L29.338 28.7292L29.416 29.2656C31.1052 40.8931 34.4626 52.1341 44.7602 57.7575L44.9998 57.8884L45.2395 57.7575C55.5371 52.1341 58.8945 40.8648 60.5836 29.294L60.6619 28.7581L60.1214 28.7229C54.8244 28.3774 49.7083 26.6609 45.2748 23.7417Z" fill="#FB8500" stroke="white"/>
            <path d="M84.875 73.1233C84.8745 72.2454 84.5256 71.4035 83.9048 70.7827C83.2835 70.1615 82.441 69.8125 81.5625 69.8125H64.6875H64.1875V70.3125V71.7188C64.1875 72.3321 63.9438 72.9203 63.5101 73.3539C63.0765 73.7876 62.4883 74.0312 61.875 74.0312H28.125C27.5116 74.0312 26.9235 73.7876 26.4898 73.3539C26.0561 72.9203 25.8125 72.3321 25.8125 71.7188V70.3125V69.8125H25.3125H8.43746C7.55893 69.8125 6.71638 70.1615 6.09517 70.7827C5.47395 71.4039 5.12496 72.2465 5.12496 73.125C5.12496 74.0035 5.47395 74.8461 6.09516 75.4673C6.71638 76.0885 7.55893 76.4375 8.43746 76.4375L81.5596 76.4375C81.56 76.4375 81.5605 76.4375 81.5609 76.4375C82.0004 76.4399 82.4359 76.3548 82.8421 76.1872C83.2487 76.0194 83.6179 75.7723 83.928 75.4603L83.9309 75.4574C84.5405 74.8339 84.8797 73.9952 84.875 73.1233ZM84.875 73.1233C84.875 73.1239 84.875 73.1244 84.875 73.125H84.375M84.875 73.1233C84.875 73.1229 84.875 73.1225 84.875 73.1221L84.375 73.125M84.375 73.125C84.3793 73.8657 84.0913 74.5782 83.5734 75.1078L8.43746 75.9375C7.69154 75.9375 6.97616 75.6412 6.44872 75.1137C5.92127 74.5863 5.62496 73.8709 5.62496 73.125C5.62496 72.3791 5.92127 71.6637 6.44872 71.1363C6.97616 70.6088 7.69154 70.3125 8.43746 70.3125H24.8125H25.3125V70.8125V71.7188C25.3125 72.4647 25.6088 73.18 26.1362 73.7075C26.6637 74.2349 27.379 74.5312 28.125 74.5312H61.875C62.6209 74.5312 63.3363 74.2349 63.8637 73.7075C64.3911 73.18 64.6875 72.4647 64.6875 71.7188V70.8125V70.3125H65.1875H81.5625C82.3084 70.3125 83.0238 70.6088 83.5512 71.1363C84.0786 71.6637 84.375 72.3791 84.375 73.125ZM86.6875 66.8531V67.0758L86.853 67.2248C88.0453 68.2977 88.8846 69.7067 89.2602 71.2661C89.6359 72.8254 89.5303 74.462 88.9574 75.9602C88.3844 77.4583 87.3711 78.7478 86.0508 79.6586C84.7305 80.5694 83.1653 81.0589 81.5613 81.0625H8.43789C6.87061 81.0611 5.3388 80.5958 4.03557 79.7252L3.75782 80.1409L4.03557 79.7252C2.73234 78.8546 1.71602 77.6176 1.11473 76.1703C0.513433 74.7229 0.354076 73.1299 0.656744 71.5921C0.959413 70.0544 1.71056 68.6406 2.8155 67.5291L2.81555 67.5291L2.82166 67.5228C2.91765 67.4227 3.01977 67.3288 3.12744 67.2414L3.31246 67.0914V66.8531V16.875C3.31246 14.7698 4.14873 12.7509 5.6373 11.2623C7.12587 9.77377 9.1448 8.9375 11.25 8.9375H78.75C80.8551 8.9375 82.874 9.77377 84.3626 11.2623C85.8512 12.7509 86.6875 14.7698 86.6875 16.875V66.8531ZM81.5625 65.1875H82.0625V64.6875V16.875C82.0625 15.9965 81.7135 15.1539 81.0923 14.5327C80.471 13.9115 79.6285 13.5625 78.75 13.5625H11.25C10.3714 13.5625 9.52888 13.9115 8.90767 14.5327C8.28645 15.1539 7.93746 15.9965 7.93746 16.875V64.6875V65.1875H8.43746H28.125C28.7383 65.1875 29.3265 65.4311 29.7601 65.8648C30.1938 66.2985 30.4375 66.8867 30.4375 67.5V68.9062V69.4062H30.9375H59.0625H59.5625V68.9062V67.5C59.5625 66.8867 59.8061 66.2985 60.2398 65.8648C60.6735 65.4311 61.2616 65.1875 61.875 65.1875H81.5625Z" fill="#008059" stroke="white"/>
          </svg>
          {/* texts */}
          <h2>Trust</h2>
          <p>We provide the right tools to help you create trusted relationships with clients and partners of the network with reliable market data and immutable proof of existence for assets. </p>
        </article>
        
        <article className={styles['usp__article']}>
          {/* image */}
          <svg width="90" height="90" className={styles['ups__article-image']} alt='image layer' viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_21_219)">
              <path d="M67.4916 81.5455H67.4888C52.4644 81.5455 37.4372 81.5933 22.41 81.5455C15.1425 81.478 8.46 75.1696 8.4375 67.4886V22.4943C8.54156 20.3314 11.3709 18.8774 13.0922 20.368C13.5647 20.7786 13.8909 21.3468 14.0119 21.9627C14.0569 22.1961 14.0512 22.2552 14.0625 22.4943C14.0625 37.5271 13.9219 52.5599 14.0625 67.5899C14.13 71.9408 17.8959 75.8783 22.4438 75.9205C33.7106 75.9571 44.9747 75.9205 56.2416 75.9205C56.1881 75.853 56.1375 75.7827 56.0869 75.7096C54.3628 73.3049 53.4375 70.408 53.4291 67.4886V14.0568H11.25C11.25 14.0568 8.53875 13.438 8.44031 11.3793C8.37 9.87176 9.68625 8.5077 11.25 8.43457H56.2416C57.7519 8.50207 58.9809 9.70019 59.0541 11.2443C59.0541 30.0261 58.8797 48.8108 59.0541 67.5899C59.1216 71.893 62.8256 75.808 67.32 75.9205C67.5422 75.8952 67.4747 75.9346 67.9809 75.9064C72.2053 75.6533 75.9122 71.8902 75.9263 67.4802V42.1789H67.4888C67.4888 42.1789 66.1275 42.0299 65.4272 41.2789C64.0856 39.8305 64.8703 36.9168 67.0697 36.5849C67.2553 36.5568 67.3031 36.5596 67.4888 36.5539H78.7388C78.8063 36.5568 78.8766 36.5596 78.9469 36.5624C79.5909 36.6327 79.6922 36.703 79.9566 36.8324C80.9044 37.288 81.5091 38.3033 81.5484 39.3664C81.5484 48.7686 81.5794 58.1736 81.5484 67.5758C81.4809 74.8996 75.0656 81.5202 67.4944 81.5455H67.4916Z" fill="#008059"/>
              <path d="M28.1223 64.6732H39.3695C39.8252 64.6648 40.2639 64.5635 40.6605 64.3582C43.1833 63.0532 41.9373 59.1973 39.482 59.051C39.4455 59.051 39.4061 59.051 39.3695 59.0482H28.1223C27.3264 59.0651 26.5614 59.3941 26.0383 59.9735C24.4633 61.7144 25.9342 64.631 28.1223 64.6732Z" fill="#FB8500"/>
              <path d="M22.4974 53.426H44.9945C46.0239 53.3979 46.5611 53.0773 47.0898 52.4866C48.648 50.7429 47.222 47.981 45.152 47.8066C45.0986 47.8038 45.0452 47.8038 44.9945 47.801H22.4974C22.3399 47.8066 22.1823 47.8151 22.0277 47.8404C21.6114 47.9107 21.2149 48.0766 20.8717 48.3213C19.187 49.5138 19.5527 52.3151 21.2767 53.1476C21.6395 53.322 21.8533 53.4063 22.4974 53.426Z" fill="#FB8500"/>
              <path d="M22.4974 42.1788H44.9945C46.0239 42.1479 46.5611 41.8301 47.0898 41.2395C48.603 39.5463 47.2305 36.7338 45.152 36.5566C45.0986 36.5566 45.0452 36.5538 44.9945 36.5538H22.4974C21.468 36.582 20.928 36.8998 20.402 37.4904C18.8074 39.2735 20.3458 42.117 22.4974 42.1788Z" fill="#FB8500"/>
              <path d="M22.4974 30.9288H44.9945C45.152 30.926 45.3095 30.9148 45.4642 30.8895C45.8805 30.8191 46.277 30.6532 46.6202 30.4113C48.2711 29.2413 47.973 26.5526 46.353 25.6554C46.0014 25.4613 45.7961 25.3629 45.152 25.3095C45.0986 25.3095 45.0452 25.3066 44.9945 25.3066H22.4974C21.468 25.3348 20.928 25.6526 20.402 26.2432C18.8186 28.0123 20.3514 30.8698 22.4974 30.9288Z" fill="#FB8500"/>
            </g>
            <defs>
              <clipPath id="clip0_21_219">
                <rect width="90" height="90" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          {/* texts */}
          <h2>Connectivity</h2>
          <p>We offer a secure transactional hub where you choose your partners to perform the goals of the modern merchant. Whether is financial, legal, or logistics service. You will find it here.</p>
        </article>
      </div>
    </section>
  )
}

export default index
