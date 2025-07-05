import styles from './styles/Story.module.css';

const storyItems = [
  {
    title: 'Наша первая встреча',
    image: 'https://i.pinimg.com/736x/be/7b/ca/be7bca6f167ed17cf8bc021ddb3ba278.jpg',
  },
  {
    title: 'Предложение руки и сердца',
    image: 'https://i.pinimg.com/736x/85/9e/ae/859eaebaf71c3fc226ce35091f1e121c.jpg',
  },
  {
    title: 'Помолвка',
    image: 'https://i.pinimg.com/736x/8c/6c/a9/8c6ca942a9a514caaa94bf3316a9e954.jpg',
  },
  {
    title: 'Подготовка к свадьбе',
    image: 'https://i.pinimg.com/736x/a7/08/8b/a7088bd76a1237b6cd1b6c0184f83fbb.jpg',
  },
  {
    title: 'Love story фотосессия',
    image: 'https://i.pinimg.com/736x/4e/92/6f/4e926fae3cded78ad207d608272f8b03.jpg',
  },
  {
    title: 'Выбор колец',
    image: 'https://i.pinimg.com/736x/ef/e0/1c/efe01c1ce684ba1c3b4cb9f4f7e0522a.jpg',
  },
];

const Story = () => {
  return (
    <section className={styles.section} id="story">
      <div className={styles.container}>
        <h2 className={styles.title}>Наша история в фотографиях</h2>
        <p className={styles.subtitle}>Каждый момент нашей любви запечатлен в этих особенных снимках</p>

        <div className={styles.grid}>
          {storyItems.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <p className={styles.caption}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
