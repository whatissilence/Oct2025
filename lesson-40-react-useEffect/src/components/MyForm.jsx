import { useInput } from '../utils/hooks.js';

export default function MyForm() {
  const username = useInput('qwerty');
  const email = useInput('');
  const password = useInput('', 'password');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit', username.value, email.value, password.value);
  }

  console.log('username', username)

  return (
    <form onSubmit={handleSubmit}>
      <div>{username.value} ======= {email.value} ======== {password.value}</div>
      <div>
        Username:
        <input name='username' {...username} />
      </div>
      <div>
        Email:
        <input name='email' {...email} />
      </div>
      <div>
        Name:
        <input name='name' {...password} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}