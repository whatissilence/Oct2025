import { Form, Formik } from 'formik';
import { schema } from '../schemas/formSchema.js';
import CustomInput from './CustomInput.jsx';

export default function TagForm() {
  const initialValues = {
    username: '',
    email: '',
    age: 0,
    password: '',
    repeatPassword: '',
  }

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Submitting...', values);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Submitted');
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} >
      <Form>
        <CustomInput
          type="text"
          name="username"
          placeholder="Put your username here"
          label="Username"
          id="tUsername"
        />

        <CustomInput
          type="text"
          name="email"
          placeholder="Put your email here"
          label="Email"
          id="tEmail"
        />

        <CustomInput
          type="number"
          name="age"
          placeholder="Age"
          label="Age"
          id="tAge"
        />

        <CustomInput
          type="text"
          name="password"
          placeholder="Password"
          label="Password"
          id="tPassword"
        />

        <CustomInput
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          label="Repeat Password"
          id="tRepeat"
        />


        <button type="submit">Submit</button>
      </Form>

      {/*<form onSubmit={handleSubmit}>*/}
      {/*  <div className="field-container">*/}
      {/*    <label htmlFor="tUsername">Username</label>*/}
      {/*    <input*/}
      {/*      id="tUsername"*/}
      {/*      type="text"*/}
      {/*      name="username"*/}
      {/*      placeholder="Username"*/}
      {/*      value={values.username}*/}
      {/*      onChange={handleChange}*/}
      {/*      onBlur={handleBlur}*/}
      {/*    />*/}
      {/*    {errors.username && touched.username && (<span className="error">{errors.username}</span>)}*/}
      {/*  </div>*/}

      {/*  <button type="submit">Submit</button>*/}

      {/*</form>*/}
    </Formik>
  )
}