import React from 'react'

export default function TeamForm(props){

    const { values, update, submit } = props

    const onChange = event => {
        const {name, value} = event.target
        update(name, value)
    }

    const onSubmit = event => {
        event.prevenDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
        <div className='form-inputs'>
            {/*text inputs}*/}
        </div>
        <label htmlFor='name'>Name
            <input
                id='name'
                type='text'
                name='name'
                onChange={onChange}
                value={values.name}
            />
        </label>
        <label htmlFor='email'>Email
            <input
                id='email'
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
            />
        </label>

        {/*dropdown */}
        <label htmlFor='role'>Role
            <select id = 'role' name = 'role' onChange={onChange} value={values.role}>
                <option value=''>-- Select a Role --</option>
                <option value = 'Frontend Engineer'>Frontend Engineer</option>
                <option value = 'Backend Engineer'>Backend Engineer</option>
                <option value = 'Full stack Engineer'>Full stack Engineer</option>
                <option value = 'Data Scientist'>Data Scientist</option>
            </select>
        </label>

        <div className='submit'>
            <button>submit</button>
        </div>
        </form>
    )
}