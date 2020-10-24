import {Route, Switch} from "dva/router";
import First from '@routes/first';
import Second from '@routes/second';
const content = () => {
  return (
    <Switch>
      <Route path="/first" component={ First } />
      <Route path="/second" component={ Second } />
    </Switch>
  )
}
export default content;
