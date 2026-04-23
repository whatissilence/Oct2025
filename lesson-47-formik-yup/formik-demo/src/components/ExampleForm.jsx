import { useFormik } from 'formik';
import { schema } from '../schemas/formSchema.js';

export default function ExampleForm() {
  const { values, errors, touched, handleSubmit, resetForm, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      email: '',
      age: 0,
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (values) => {
      console.log('Submitting...', values);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Submitted');
      resetForm();
    },
    validationSchema: schema,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field-container">
          <label htmlFor="jUsername">Username</label>
          <input
            id="jUsername"
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username && (<span className="error">{errors.username}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jEmail">Email</label>
          <input
            id="jEmail"
            type="text"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (<span className="error">{errors.email}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jAge">Age</label>
          <input
            id="jAge"
            type="number"
            name="age"
            placeholder="Age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.age && touched.age && (<span className="error">{errors.age}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jPassword">Password</label>
          <input
            id="jPassword"
            type="text"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (<span className="error">{errors.password}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jRepeat">Repeat Password</label>
          <input
            id="jRepeat"
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.repeatPassword && touched.repeatPassword && (<span className="error">{errors.repeatPassword}</span>)}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}