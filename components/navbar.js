import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

  
  const NavBar = () => (
    <div className={styles.navBar}>
      <h2 className={utilStyles.navHead}>Nydia's Portfolio</h2>
      <Link href="/posts/first-post">
            <a className={utilStyles.navHead}>Projects</a>
       </Link>
    </div>
  );
  
  export default NavBar;