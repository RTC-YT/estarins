import '../styles/globals.css'
import '../assets/fonts/gilroy/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const interval = setInterval(() => {
      let n;
      let a = document.querySelector('[data-cubie].active');
      if (a?.nextElementSibling) {
        n = a.nextElementSibling;
      } else {
        n = document.querySelector('[data-cubie="1"]');
      }
      a?.classList.remove('active');
      n?.classList.add('active');
    }, 4000);

    document.addEventListener("scroll", () => {
      let header = document.querySelector('.Header');
      (window.scrollY > 150) ? header?.classList.add('scrolled') : header?.classList.remove('scrolled');
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App '>
      <div >
        <Component {...pageProps} />
      </div>

      <div>
      </div>
      <div className='containers'>
        <div className='Footer'>
          <div className='socials'>
            <Link href='https://twitter.com/NFTLotteryTron' target='_blank' rel="noopener noreferrer">
              <Image src='/twitter.png' alt='Twitter' />
            </Link>
            <Link href='https://nftlotterytron.com' target='_blank' rel="noopener noreferrer">
              <Image src='/website.png' alt='Website' />
            </Link>
            <Link href='https://t.me/NFTLotteryTron' target='_blank' rel="noopener noreferrer">
              <Image src='/telegram.png' alt='Telegram' />
            </Link>
          </div>
          <div className='copyright'><strong>&copy; NFTLotteryTron 2023</strong></div>
        </div>
      </div>
    </div>
  )
}

export default MyApp
