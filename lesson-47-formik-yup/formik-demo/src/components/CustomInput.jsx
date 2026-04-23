import { useField } from 'formik';

export default function CustomInput({id, label, ...props}) {
  const [field, meta] = useField(props);
  return (
    <div className="field-container">
      <label htmlFor={id}>{label}</label>
      <input
        className={meta.error && meta.touched ? 'field-error' : ''}
        id={id}
        {...props}
        {...field}
      />
      {meta.error && meta.touched && (<span className="error">{meta.error}</span>)}
    </div>
  )
}