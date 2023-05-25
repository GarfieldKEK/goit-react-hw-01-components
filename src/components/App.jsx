import user from '../data/user.json';
import { Profile } from 'card/Profile';
import data from '../data/data.json';
import { Statistics } from 'statisctics/Statisctics';
import { FriendList } from 'Friends/Friends';
import friends from '../data/friends.json'
import { TransactionHistory } from 'transaction/Transaction';
import transactions from '../data/transactions.json'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />;
    </div>
  );
};


