
import './App.css';
import React, {useEffect, useState} from 'react';
import Form from './Form'

const initialFormValues = {
  // text inputs
  name: '',
  email: '',
  //dropdown
  role: '',

}

function App() {

  const [teamMember, setTeamMember] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm =() => {
    const newTeam = {
      username: formValues.email.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    // if (!newTeam.username || !newTeam.email || !newTeam.role) return
    // axios.post('fakeapi.com', newTeam)
    // .then(res => {
    //   const otherTeam = res.data
    //   setTeamMember([otherTeam, ...teamMember])
    //   setFormValues(initialFormValues)
    // })
  }

  // useEffect(() => {
  //   axios.get('fakeapi.com').then(res => setTeamMember(res.data))
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Form 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
       
      </header>
    </div>
  );
}
 
export default App;
