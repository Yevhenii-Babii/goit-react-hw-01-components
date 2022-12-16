import user from 'assets/user.json'
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import data from 'assets/data.json'
import friends from 'assets/friends.json'
import transaction from 'assets/transactions.json'
import {FriendList} from 'components/FriendList/FriendList.jsx'
import { Transaction } from 'components/Transaction/Transaction';
import {GlobalStyle} from 'utils/GlobalStyle'


export const App = () => {
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats= {data} />
<FriendList friends= {friends}/>
<Transaction items= {transaction} />
<GlobalStyle/>
</>
  );
};
