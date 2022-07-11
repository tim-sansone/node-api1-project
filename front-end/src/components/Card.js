import React from "react"

const Card = ({ users, removeUser }) => {
    return (
        <div className="card-container">
            {
                users
                ? users.map(user => {
                    return (
                        <div className="card" key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.bio}</p>
                            <button onClick={() => removeUser(user.id)}>Delete</button>
                        </div>
                    )
                })
                : <h2>Loading...</h2>
            }
        </div>
    )
}

export default Card;
