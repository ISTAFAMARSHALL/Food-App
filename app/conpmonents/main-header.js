import Link from 'next/link'
import Image from 'next/image'
import classes from './main-header.module.css' 
import MainHeaderBackground from './main-header-background'
import logoImg from '@/assets/logo.png'

export default function MainHeader () {
   return (
    <>
        <MainHeaderBackground/>
        <main className={classes.header} >
            <Link href='..' className={classes.logo} >
                <Image src={logoImg} alt='A Plate with Food on it' priority />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals' >Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community' >Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </main>
    </>
   ) 
}