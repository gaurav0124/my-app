
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import TrendingRepositoriesComponent from './trendingRepositoriesComponent';
import TrendingDevelopersComponent from './trendingDevelopersComponent';
import { Route, Switch } from 'react-router-dom';
import Header from './header';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Switch>
        <Route path='/' exact component={TrendingRepositoriesComponent} />
        <Route path='/devtrends' exact component={TrendingDevelopersComponent} />

      </Switch>
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}
export default App;
