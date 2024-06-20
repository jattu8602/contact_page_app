import styles from "./Navigation.module.css";

const Navigation = () => {

// console.log(styles);

  return (
    <nav className={`${styles.navigation} container`} >
      <div className='logo'>
        <img src="/images/logo.png" alt="do some coding logo" />
      </div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>

      </ul>
    </nav>
  )
}

export default Navigation;
