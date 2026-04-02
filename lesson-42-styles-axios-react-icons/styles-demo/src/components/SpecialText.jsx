import styles from './SpecialText.module.scss'

export default function SpecialText({ children }) {

  console.log(styles)

  return (
    <div className={styles.text}>
      I'm <span className={styles.my} >Special</span> Text Component:::: {children}
    </div>
  )
}