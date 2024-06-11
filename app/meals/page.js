import Link from 'next/link'

export default function Meals () {
    return (
        <main>
            <h1>Meals</h1>

            <p>
                <Link href='/meals/share' >Share</Link>
            </p>
            <p>
                <Link href='/community' >Community</Link>
            </p>
            <p>
                < Link href='/meals/plate-1' >Meal 1</Link>
            </p> 
            <p>
                <Link Link href='/meals/plate-2' >Meal 2</Link>
            </p>
            <p>
                <Link href='/..' >Home Page</Link>
            </p>
        </main>
    )
}