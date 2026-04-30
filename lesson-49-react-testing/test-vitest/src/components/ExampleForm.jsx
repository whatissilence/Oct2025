import { useFormik } from 'formik'
import { schema } from '../schemas/exampleFormSchema.js'

const ExampleForm = () => {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      email: '',
      age: 0,
      password: '',
      repeatPass: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log('Submitting ...');
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log('Submitted!', values);
      resetForm();
    },
    validationSchema: schema
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
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Username"
            className={errors.username && touched.username ? 'input-error' : ''}
          />
          {errors.username && touched.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jEmail">Email</label>
          <input
            id="jEmail"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          {errors.email && touched.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jAge">Age</label>
          <input
            id="jAge"
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Age"
            className={errors.age && touched.age ? 'input-error' : ''}
          />
          {errors.age && touched.age && <div className="error">{errors.age}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jpassword">Password</label>
          <input
            id="jpassword"
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          {errors.password && touched.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jrepeatPass">Repeat password</label>
          <input
            id="jrepeatPass"
            type="text"
            name="repeatPass"
            value={values.repeatPass}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Repeat password"
            className={errors.repeatPass && touched.repeatPass ? 'input-error' : ''}
          />
          {errors.repeatPass && touched.repeatPass && <div className="error">{errors.repeatPass}</div>}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default ExampleForm