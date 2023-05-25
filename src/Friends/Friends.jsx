import style from './friends.module.css'
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className="item">
         <span className={`status ${isOnline ? style.online : style.offline}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  };
  
   export const FriendList = ({ friends }) => {
    return (
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <FriendListItem
            key={index}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
  };