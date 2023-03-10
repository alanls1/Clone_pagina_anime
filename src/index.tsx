import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient} from 'react-query';
import { HashRouter } from "react-router-dom"

import { RouteWay } from "./Routes"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );

const queryClient = new QueryClient();

root.render(
  
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <RouteWay/>
      </QueryClientProvider>
    </HashRouter>
     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

