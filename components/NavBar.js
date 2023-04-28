import Link from "next/link";
import styles from '@/styles/NavBar.module.css';

const NavBar = () => {
    return (
        <>
            <header>
                <Link href="/">home</Link>
                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href="/members">members</Link>
                        </li>
                        <li>
                            <Link href="/catalog">Catalog</Link>
                        </li>
                        <li>
                            <Link href="/manage">Manage Library</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar;