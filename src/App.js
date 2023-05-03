import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/routing';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  refetchOnMount: false,
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
