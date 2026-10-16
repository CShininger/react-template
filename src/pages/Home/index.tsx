import styles from './index.less'

const STACK = ['React', 'Umi Max', 'TypeScript', 'Less', 'Tailwind', 'Prettier']

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <span className={styles.eyebrow}>Starter</span>
        <h1 className={styles.title}>Hello Umi Max</h1>
        <p className={styles.desc}>
          基于 Umi Max 的干净前端骨架，Less 样式通过 import styles 自动启用 CSS
          Modules。
        </p>
        <div className={styles.tags}>
          {STACK.map((item) => (
            <span key={item} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
