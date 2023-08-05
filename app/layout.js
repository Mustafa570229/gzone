
import MainNav from './component/MainNav';
import Footer from './component/Footer';

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'kyoo page',
  description: 'The series begins by addressing fundamental questions that often arise in the minds of Muslims and non-Muslims alike.Questions such as Why am I a Muslim? and Is Islam the religion of truth?',
  keywords: ["islam, muslim, keyword3"],

}

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <body className="">
        <MainNav/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
