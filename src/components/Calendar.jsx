import styles from './styles/Calendar.module.css';

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const august2024 = [
  '', '', '', 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, ''
];

const eventDays = {
  10: 'Репетиция',
  14: 'Мальчишник',
  15: '💍 Свадьба',
  16: 'Медовый месяц',
};

const Calendar = () => {
  return (
    <section id="calendar" className={styles.section}>
      <div className="overlay">
        <div className={styles.container}>
          <h2 className={styles.title}>Календарь</h2>
          <p className={styles.subtitle}>День нашей свадьбы:</p>
          <p className={styles.date}>четверг, 15 августа 2024</p>

          <div className={styles.calendarGrid}>
            {daysOfWeek.map((day, i) => (
              <div key={i} className={styles.dayName}>{day}</div>
            ))}

            {august2024.map((day, i) => {
              const event = eventDays[day];
              const isWedding = day === 15;
              return (
                <div
                  key={i}
                  className={`${styles.dayCell} ${isWedding ? styles.weddingDay : ''}`}
                >
                  <span className={styles.dayNumber}>{day}</span>
                  {event && <div className={styles.eventText}>{event}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
