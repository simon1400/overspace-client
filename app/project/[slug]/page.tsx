import Container from '@/components/Container'
import styles from './project.module.scss'
import Slider from '@/components/Slider'

const Project = () => {
  return (
    <main className={styles.main}>
      <Container>
        <Slider />
        <div className="content">
          <div>
            <h1>RD TREBIC</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet, <a href="/">consectetuer</a> adipiscing elit. Nulla quis diam. Curabitur bibendum justo non orci. Nulla quis diam. Vivamus luctus egestas leo. Maecenas aliquet accumsan leo. Proin in tellus sit amet nibh dignissim sagittis. Nulla pulvinar eleifend sem. Pellentesque ipsum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Etiam commodo dui eget wisi. In dapibus augue non sapien. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.
                <ul>
                  <li>sfdgfhdhff</li>
                  <li>sfdgfhdhff</li>
                  <li>sfdgfhdhff</li>
                  <li>sfdgfhdhff</li>
                </ul>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </main>
  )
}

export default Project
