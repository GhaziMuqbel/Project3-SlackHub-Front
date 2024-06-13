import { useState } from "react"

const Forms = () => {
  const initialState = {
    username: "",
    userType: true,
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)

    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        value={formState.username}
      />

      <label htmlFor="userType">User Type:</label>
      <input
        id="user-type"
        type="checkBox"
        onChange={handleChange}
        value={formState.userType}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        onChange={handleChange}
        value={formState.email}
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        id="confirm-password"
        type="password"
        onChange={handleChange}
        value={formState.confirmPassword}
      />

      <button type="submit">SignUp</button>
    </form>
  )
}

export default Forms
