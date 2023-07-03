import { FC } from "react"
import styles from './Container.module.scss'

const Container: FC<{children: React.ReactNode}> = ({children}) => {
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container