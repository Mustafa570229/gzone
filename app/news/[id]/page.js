
import styles from "@/app/page.module.css"

export default async function ({ params }) {
  const { id } = params
  const data = await getData()
  const element = data.find(item => item._id === id);

  const months = [
    "يناير", "فبراير", "مارس", "ابريل", "مايو", "حزيران", "تموز",
    "اغسطس", "سبتمبر", "اوكتوبر", "نوفمبر", "ديسمبر"
  ];

  
  return (
    <>

    <div className={styles.singlenews} >
      <h1 
      style={{textAlign:"right", background: "hsla(120, 100%, 87%, 0.392)",
      lineHeight:"2",paddingRight:"30px",fontSize:"30px",fontWeight:"500"}}
      >{element.newTitle}</h1>
      <div><img src={element.images} alt={element.newTitle} style={{width:"500px",marginBottom:"20px"}}/></div>
      <div style={{padding:"20px", background: "hsla(120, 100%, 87%, 0.392)",lineHeight:"2.5"}}>{element.newContent}</div>
      <div style={{textAlign:"left",color:"green",fontSize:"16px"}}>{element.createdAt}</div>
    </div>
    </>
    )
}

export async function getData(params) {
  const res = await fetch('https://greenzone-eight.vercel.app/api/mydata',

    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}