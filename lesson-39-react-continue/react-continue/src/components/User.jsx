import './User.css'

export default function User({ id, name, email, phone, website }) {
  return (
    <div className="user">
      <div className="user-data">Id: {id}</div>
      <div className="user-data">Name: {name}</div>
      <div className="user-data">Email: <a href={`mailto:${email}`}>{email}</a></div>
      <div className="user-data">Phone: {phone}</div>
      <div className="user-data">
        <a href={website}>{website}</a>
      </div>
    </div>
  )
}