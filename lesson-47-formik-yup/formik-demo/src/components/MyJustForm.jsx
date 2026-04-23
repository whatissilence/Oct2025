import { useState } from 'react';

export default function MyJustForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatError, setRepeatError] = useState('');
  const [ageError, setAgeError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    } else {
      cleanErrors();
    }

    console.log('Submitting...', { username, email, password, repeat, age });
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Submitted');
    resetForm();
  }

  function resetForm() {
    setUsername('');
    setEmail('');
    setPassword('');
    setRepeat('');
    setAge(0);

    cleanErrors();
  }

  function cleanErrors() {
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setRepeatError('');
    setAgeError('');
  }

  function validate() {
    cleanErrors();
    if (!username && username.trim().length === 0) {
      setUsernameError('Username is required');
      return false;
    }

    if (username.trim().length < 5) {
      setUsernameError('Username must be at least 5 characters');
      return false;
    }

    if (!email && email.trim().length === 0) {
      setEmailError('Email is required');
      return false;
    }

    if(!email.includes('@')){
      setEmailError('Email is wrong');
      return false;
    }

    if(age < 18){
      setAgeError('You should be at least 18');
      return false;
    }

    if(age > 128){
      setAgeError('Age is wrong');
      return false;
    }

    if(!password || password.trim().length < 8){
      setPasswordError('Password must be at least 8');
      return false;
    }

    if(!repeat || repeat !== password){
      setRepeatError('Repeat passwords must match');
    }

    return true;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field-container">
          <label htmlFor="jUsername">Username</label>
          <input
            id="jUsername"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {usernameError && (<span className="error">{usernameError}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jEmail">Email</label>
          <input
            id="jEmail"
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && (<span className="error">{emailError}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jAge">Age</label>
          <input
            id="jAge"
            type="text"
            placeholder="Age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          {ageError && (<span className="error">{ageError}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jPassword">Password</label>
          <input
            id="jPassword"
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && (<span className="error">{passwordError}</span>)}
        </div>

        <div className="field-container">
          <label htmlFor="jRepeat">Repeat Password</label>
          <input
            id="jRepeat"
            type="password"
            placeholder="Repeat Password"
            value={repeat}
            onChange={e => setRepeat(e.target.value)}
          />
          {repeatError && (<span className="error">{repeatError}</span>)}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}