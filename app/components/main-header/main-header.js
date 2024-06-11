import Link from 'next/link'
import Image from 'next/image'
import classes from './main-header.module.css' 
import MainHeaderBackground from './main-header-background'
import logoImg from '@/assets/logo.png'
import NavLink from './nav-link'

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
                        <NavLink href='/meals'  >Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community' >Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </main>
    </>
   ) 
}