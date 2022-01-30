import './App.css';
import user  from "../src/Profile/user.json"
import Profile  from '../src/Profile/Profile';
import Section  from '../src/Statistics/Section';
import Statistics from '../src/Statistics/Statistics'
import FriendList from '../src/FriendList/FriendList'
import TransactionTable from '../src/TransactionHistory/TransactionHistory'
import transactions from '../src/TransactionHistory/transactions.json'
import friends from '../src/FriendList/friends.json'
import data from '../src/Statistics/data.json'

function App() {
  return ( <div>
    <Section title = "1st task" >
    <div className="App">
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> </div>
    </Section>
    <Section title = "Upload stats"  >
    <Statistics stats={data}/>
    </Section>
    <Section title = "3rd task" >
      <FriendList friends={friends}/>
    </Section>
    <Section title = "4 task" >
    <TransactionTable items={transactions}/>
    </Section>
        </div>);
}

export default App;
