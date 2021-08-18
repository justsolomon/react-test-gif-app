import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gif from "pages/gif";
import { Layout } from "components/global/Layout";
import Search from "pages/search";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/gif/:id" component={Gif} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
};

export default Routes;
