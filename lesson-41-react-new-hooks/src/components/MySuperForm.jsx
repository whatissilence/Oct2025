import { useActionState } from "react";
import SubmitButton from './SubmitButton.jsx';

// Функція, яка виконується при відправленні форми
const increment = async (previousState, formData) => {

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Імітація затримки

  return {
    clientName: formData.get("userName") || previousState.clientName,
    likes: previousState.likes + (Number(formData.get("addLikes")) || 1),
  }; // Повертаємо нове значення стану
};

// Компонент форми
export default function MySuperForm () {
  const [state, formAction, isPending] = useActionState(increment, { clientName: 'defaultName', likes: 0});

  return (
    <form action={formAction}>
      <p>Current name: {state.clientName}</p>
      <p>Current likes: {state.likes}</p>
      <input name="userName" type="text" defaultValue={state.clientName} />
      <input name="addLikes" type="number" />
      <SubmitButton isPending={isPending} />
    </form>
  );
};