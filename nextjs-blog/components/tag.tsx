import styles from "./tag.module.css";

export default function Tag({ tagString }: { tagString: string }) {
  const tag = tagString;
  return <p className={styles.tagElement}>{tagString}</p>;
}
