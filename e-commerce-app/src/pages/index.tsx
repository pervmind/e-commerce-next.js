import HeadComponent from '../components/Head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeadComponent />
      <main>
        <div className={styles.background}>
          <Image src="/homeWalpaper.jpg"alt="wallpaper" layout='responsive' width={1920} height={1080} className='home-background'/>
        </div>
      </main>
    </>
  )
}
