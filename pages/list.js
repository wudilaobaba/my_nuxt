import styles from './l.module.css';

export default function list({data}) {
  return (
    <>
      <h2 className={styles.list}>{data.name}</h2>
    </>
  )
}

/**
 * getStaticProps 名称不要变
 * 项目构建时/开发环境下 才会执行
 * @returns {Promise<{props: {data: {name: string}}}>}
 */
export async function getStaticProps() {
  const data = {name:"Mike"};
  return{
    props: {data}
  }
}