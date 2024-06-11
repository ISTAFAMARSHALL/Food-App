import Link from 'next/link'

export default function MealsShare () {
    return (
        <main>
            <h1>Meal Share</h1>

            <p>
                <Link href='/community' >Community</Link>
            </p>
            <p>
                <Link href='/..' >Home Page</Link>
            </p>
        </main>
    )
}