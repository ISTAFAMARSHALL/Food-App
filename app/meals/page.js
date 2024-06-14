import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'

import { getMeals } from '../../lib/meals'

export default function Meals () {

    const meals =  getMeals();

    console.log(meals)

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
                <MealsGrid meals={meals} />
            </main>
            
        </>
    )
}