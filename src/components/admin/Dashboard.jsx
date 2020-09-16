import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Posts from './Posts';
import Users from './Users';

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/posts">Post</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/admin/posts" component={Posts} />
        <Route path="/admin/Users" component={Users} />
      </Switch>
    </div>
  );
};

export default Dashboard;
