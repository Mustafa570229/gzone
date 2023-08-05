import Link from 'next/link';
import styles from "@/app/component/Footer.module.css";


const Footer = () => {

  return (
    <div className={styles.footterDiv}>

      <div className={styles.footterLinks}>
        <Link href="/">Greenzone | المنطقة الخضراء</Link>
        <Link href="/live">بث مباشر</Link>
        <Link href="/news">أخبار الرياضة</Link>
        <Link href="https://mustafaalabohasne.online/">تواصل معنا</Link>

      </div>
      <div className={styles.myWeb} >
        <Link href="https://mustafaalabohasne.online/" target="_blank" >
          Designed by | mustafa </Link>

      </div>

    </div>
  )
}

export default Footer