import dva from 'dva';
import { createBrowserHistory as createHistory } from "history"
import models from '@models';
import './index.css';

// 1. Initialize
// const app = dva();
const app =dva({
  history:createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
models.map((model)=>{
  app.model(model)
})

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
