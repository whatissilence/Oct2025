import { useFormStatus } from 'react-dom';
import './SubmitButton.css'

export default function SubmitButton({ isPending }) {
  const { pending } = useFormStatus()

  return (
    <button className="super-submit" type="submit" disabled={pending}>
      {pending ? "Loading..." : "Like"}
    </button>
  )
}