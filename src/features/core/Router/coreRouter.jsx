import { Route, Switch } from 'react-router';

import Home from '../../main/components/Home';

const CoreRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default CoreRouter;
