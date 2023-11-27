
const UserProfile = (props) => {
    const {userDetails} = props
    const {name, age} = userDetails;

    return(
        <div>
            <li>
              <h2> {name} </h2>
              <p> {age} </p>
            </li>
        </div>
    )
};

export default UserProfile;