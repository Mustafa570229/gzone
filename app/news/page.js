// import Card from 'react-bootstrap/Card';
import styles from "@/app/page.module.css"
import Link from "next/link";
export const metadata = {
  title: 'أخبار كر القدم',
  description: 'بث مباشر ميسي في انتر ميامي ورنالدو في النصر السعودي',
  keywords: ["yallakora live, بث مباشر, koora ,libe koora ,koora goal live,live shoot ,انتر ميامي,ميسي في انتر ميامي,alnasser"],
  icons: {
    icon: '/6.ico',
  }
}
const page = async () => {
  const data = await getData()
  const filtereddata = [];
  await data?.find((item) => {
    if (item.newCollection === "news") {
      filtereddata.push(item)
    }
  });
  const months = [
    "يناير", "فبراير", "مارس", "ابريل", "مايو", "حزيران", "تموز",
    "اغسطس", "سبتمبر", "اوكتوبر", "نوفمبر", "ديسمبر"
  ];

  return (
    <div className={styles.news}>
      {filtereddata?.map((item) => {

        const createdAtDate = new Date(item.createdAt);

        const day = createdAtDate.getDate();
        const monthIndex = createdAtDate.getMonth();
        const year = createdAtDate.getFullYear();

        const formattedDate = `${day} ${months[monthIndex]} ${year}`;

        return (
          <Link href={`/news/${item._id}`} style={{ textDecoration: "none" }} key={item._id}>
            <div className={styles.card}>
              <img variant="top" src={item.images} className={styles.cardImg} alt={item.newTitle} />
              <div>
                <h1 className={styles.cardText} style={{ color: "#111" }}>
                  {item.newTitle}
                </h1>
                <span style={{ color: "#777" }}> تم النشر :<span >{formattedDate}</span></span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  )
}
export default page

export async function getData() {
  const res = await fetch('https://greenzone-eight.vercel.app/api/mydata',

    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}