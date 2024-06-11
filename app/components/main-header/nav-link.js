import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink() {
    const path = usePathname();
    return (
        <>
            <Link href='/meals' className={
                path.startsWith('/meals') ? classes.active : undefined
            } >Browse Meals</Link>
        </>
    )
}