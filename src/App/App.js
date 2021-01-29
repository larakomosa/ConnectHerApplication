import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

// Import template/Argon Styling
import '../assets/plugins/nucleo/css/nucleo.css';
import '../assets/vendor/font-awesome/css/font-awesome.min.css';
import '../assets/scss/argon-dashboard-react.scss';

// Import after Argon assets to override inside App.css
import './App.css';

// Pages
import {
  AdminOverviewPage,
  AdminPage,
  BusinessPage,
  LandingPage,
  MainPage,
  MemberSearchPage,
  ProfilePage,
  SpacesPage,
  SpeakerPage,
  UserPage,
} from '../views/index';

// Import Static Components
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import FavoritesAndChat from '../components/FavoritesAndChat/FavoritesAndChat';

// Custom Wrapper Components
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

// Route created for testing purposes - remove for prod once implemented
import SkillsSelector from '../components/SkillsSelector/SkillsSelector';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });

    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  render() {
    return (
      <Router>
        <div style={{ marginTop: '150px' }}>
          <Nav />
          <FavoritesAndChat />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            <Route path="/skills" component={SkillsSelector} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
              authRedirect="/main"
            />

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/admin"
              component={AdminPage}
            />

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/admin-overview"
              component={AdminOverviewPage}
            />

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/businesses"
              component={BusinessPage}
            />

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/spaces"
              component={SpacesPage}
            />

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/speakers"
              component={SpeakerPage}
            />

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/main"
              component={MainPage}
            />

            <ProtectedRoute
              // logged in shows MemberSearchPage else shows LoginPage
              exact
              path="/search"
              component={MemberSearchPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/profile"
              component={ProfilePage}
            />

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/user"
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
