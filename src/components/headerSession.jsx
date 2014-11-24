var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var connect= require("./../libraries/tmp_connect");

var sessionActions = require("./../actions/sessionActions");
var sessionStore = require("./../stores/session");
var ImmutableRenderMixin = require("react-immutable-render-mixin");

var HeaderSession = React.createClass({
  mixins: [connect(sessionStore), ImmutableRenderMixin],
  logoutHandler: function(e) {
    e.preventDefault();
    sessionActions.logout();
  },
  render: function() {
    var content;
    if (this.state.get("auth")) {
      content = (
        <div>
          <span className="right">Welcome {this.state.get("username")}!</span><br/>
          <Link className="right" to="profile">Profile</Link><br/>
          <a className="right" href="#" onClick={this.logoutHandler}>Logout</a>
        </div>
      );
    }
    else {
      content = (
        <div>
          <Link className="right" to="login">Login</Link><br/>
          <Link className="right" to="signup">Sign up</Link>
        </div>
      );
    }
    return content;
  }
});

module.exports = HeaderSession;
