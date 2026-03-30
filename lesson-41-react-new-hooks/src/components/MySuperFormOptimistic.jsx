import { useActionState, useOptimistic } from "react";
import SubmitButton from './SubmitButton.jsx';

// Функція, яка виконується при відправленні форми
const increment = async (previousState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Імітація затримки

  return {
    clientName: (formData.get("userName") || previousState.clientName) + ' - saved', // тут я додав щоб типу було видно, що на сервері
    likes: previousState.likes + (Number(formData.get("addLikes")) || 1),
  };
};

// Компонент форми
export default function MySuperFormOptimistic () {
  const [state, formAction, isPending] = useActionState(increment, { clientName: 'defaultName', likes: 0});

  // useOptimistic друга функція потрібна, щоб коли ми йому передамо частину стану, він його не замінив, а додав
  // тут за допомогою оператору spread ми зливаємо кілька обʼектів в один. Двоюрідний брат вашої любимої дестркутурізації
  const [optimisticState, setOptimisticState] = useOptimistic(state, (current, newState) => ({ ...current, ...newState }));

  // Заміняємо екшн форми на наш, щоб ми могли втрутитися і зробити наш оптимізм
  const handleFormAction = (formData) => {
    const addLikes = Number(formData.get("addLikes")) || 1;
    // встановлюємо оптимістичний стан
    setOptimisticState({
      ...optimisticState,
      clientName: formData.get("userName") || optimisticState.clientName,
      likes: optimisticState.likes + addLikes,
    });

    // запускаємо основний форм екшн, щоб форма таки відправилася на сервер
    return formAction(formData);
  };

  // Тут ми замінили реальний стан оптимістичним і читаємо з нього.
  // Коли прийде реальний стан, реакт автоматично оновить оптимістичний стан на нього, щоб вони співпадали
  return (
    <form action={handleFormAction}>
      <p>Current name: {optimisticState.clientName}</p>
      <p>Current likes: {optimisticState.likes}</p>
      <input name="userName" type="text" />
      <input name="addLikes" type="number" />
      <SubmitButton isPending={isPending} />
    </form>
  );
};