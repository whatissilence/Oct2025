import { use } from 'react';
import './User.css'

export default function User({ fetchUserPromise }) {
  const user = use(fetchUserPromise)

  return (
    <div>
      User # {user.id}<br/>
      Name: {user.name}<br/>
      Email: {user.email}<br/>
      Username: {user.username}<br/>
      Phone: {user.phone}<br/>
      Website: {user.website}<br/>
    </div>
  )
}