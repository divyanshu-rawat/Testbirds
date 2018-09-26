
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddTeamMember from '../Containers/AddTeamMemberContainer';
import ShowTeamMembers from '../Containers/ShowTeamMembersContainer';
import Welcome from '../Components/Welcome'


const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/addteammember" component={AddTeamMember}/>
      <Route path="/showteammembers" component={ShowTeamMembers}/>
      <Route path="/" component={Welcome}/>
    </div>
  </Router>
)


export default AppRouter