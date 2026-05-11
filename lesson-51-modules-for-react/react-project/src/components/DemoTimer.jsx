import { useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';

const DemoTimer = () => {
  const onIdle = () => {
    console.log('Користувач бездіяльний. Виконуємо вихід...');
  };

  const onActive = () => {
    console.log('Користувач активний.');
  };

  const onAction = () => {
    console.log('Користувач виконав дію.');
  };

  // Використання хука useIdleTimer
  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 10 * 1000, // 10 секунд timeout
    throttle: 1000, // Троттлінг для оптимізації
  });

  // Оновлення часу, що залишився
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Залишилось часу: ${Math.ceil(getRemainingTime() / 1000)} секунд`);
    }, 1000);

    return () => clearInterval(interval); // Очищення інтервалу
  }, [getRemainingTime]);

  return (
    <div>
      <p>Додаток відстежує бездіяльність користувача.</p>
    </div>
  );
};

export default DemoTimer;