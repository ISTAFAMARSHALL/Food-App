import Link from 'next/link'

export default function Plates (props) {
    return (
        <main>
            <h1>Plate</h1>
            <p>{props.params.slug}</p>
            <p>
                <Link href='..' >Home Page</Link>
            </p>
        </main>
    )
}