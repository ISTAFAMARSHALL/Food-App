import Link from 'next/link'
import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

export async function  generateMetadata (props) {
    let mealmeta = getMeal(props.params.slug);

    if (!mealmeta) {
        notFound();
    }

    return {
        title: mealmeta.title,
        description: mealmeta.summary,
    }
};

export default function Plates (props) {

    const meal = getMeal(props.params.slug)


    
    let instructions = meal.instructions.replace(/\n/g, '<br />');


    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={`https://istafamarshall-nextjs-food-app-users-image.s3.us-east-2.amazonaws.com/${meal.image}`} alt={meal.name} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={ `mailto:${meal.creator_email}` }>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>

            <main>
                <p className={classes.instructions}
                    dangerouslySetInnerHTML={{__html: instructions}}
                ></p>
            </main>
        </>
        
    )
}