import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

import Loja from "./pages/Loja";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { firebaseAuth } from './config/Firebase'
import { logout } from './helpers/Auth'

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


const App = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    })
  });

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Loja</Link>
            </Typography>
            {auth
              ? <button
                style={{ border: 'none', background: 'transparent' }}
                onClick={() => {
                  logout()
                }}
                className="navbar-brand">Logout</button>
              : <span>
                <Link to="/login" className="navbar-brand"><Button variant="contained" color="primary">Login</Button></Link>
                <Link to="/register" className="navbar-brand"><Button variant="contained">Registrar</Button></Link>
              </span>}

          </Toolbar>
        </AppBar>
        <div className="container">
          <div className="row">
            <Switch>
              <Route path='/' exact component={Loja} />
              <PublicRoute authed={auth} exact path='/login' component={Login} />
              <PublicRoute authed={auth} exact path='/register' component={Register} />
              <Route render={() => <h3>404</h3>} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;