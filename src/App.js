import "./App.css"
import user from "./data/user.json"
import transactions from "./data/transactions.json"
import friends from "./data/friends.json"
import data from "./data/data.json"

import Profile from "./components/Profile"
import Section from "./components/Section"
import Statistics from "./components/Statistics"
import FriendList from "./components/FriendList"
import TransactionTable from "./components/TransactionHistory"

import s from "./components/Profile/Profile.module.css"

function App() {
  return (
    <div>
      <Section title="1st task">
        <div className={s.App}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />{" "}
        </div>
      </Section>
      <Section title="Upload stats">
        <Statistics stats={data} />
      </Section>
      <Section title="3rd task">
        <FriendList friends={friends} />
      </Section>
      <Section title="4 task">
        <TransactionTable items={transactions} />
      </Section>
    </div>
  )
}

export default App
