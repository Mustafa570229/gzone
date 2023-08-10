
import MainNav from './component/MainNav';
import Footer from './component/Footer';

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export const metadata = {
  title: 'greenzone بث مباشر',
  description: 'مرحبًا بكم في موقعنا الإلكتروني لبث المباريات المباشرة! نحن فخورون بتقديم أفضل تجربة مشاهدة لمحبي كرة القدم حول العالم. انضم إلينا للاستمتاع بأحدث الأحداث الرياضية وأكثرها إثارة.',
  keywords: ["live, kora live, match live,بث مباشر,برشلونة,بث مباشر ميسي,بث مباشر انتر ميامي,الدوري الامريكي,ترتيب الدوري الامريكي,ترتيب انتر ميامي,لايف كورة,كورة لايف"],
  icons: {
    icon: '/1.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8531563006408715"
     crossorigin="anonymous"></script>
     
      </Head>
      <body className="">
        <MainNav/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
