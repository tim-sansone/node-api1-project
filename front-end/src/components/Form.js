import React, { useState } from "react"

const initialForm = {
    name: "",
    bio: ""
}

const Form = ({ newUser }) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = event => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        newUser(form)
        setForm(initialForm)
    }

    return(
        <form>
            <h3>New User</h3>
            <input 
                type="text"
                name="name"
                placeholder="Please enter a name"
                value={form.name}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="bio"
                placeholder="Please enter a bio"
                value={form.bio}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;
