import Link from 'next/link'
import { Suspense } from 'react'
import classes from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'

import { getMeals } from '../../lib/meals'

async function MealsDisplay() {
    const meals =  await getMeals();
    return <MealsGrid meals={meals} />
}

export default function Meals () {

    

    return (

        <>
            <header className={classes.header} >

                <h1>Delicious Meals, created{''}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite receipe and cook it yourself. It is easy</p>
                <p className={classes.cta}>
                <Link href='/meals/share' >Share your favorite receipe</Link>
                </p>
            </header>

            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>} >
                    <MealsDisplay/>
                </Suspense>    
            </main>
            
        </>
    )
}