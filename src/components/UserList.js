
import ContactList from "./ContactList";

const UserList = (props) => {
  return (
    <div>
      {props.users.map(user => {
        return <ContactList key={user.login.id} user={user} />
      })}
    </div>
  )
}

export default UserList;
