import { TopBar } from "../../../design/molecules/TopBar";
import  MovieList  from "./MovieList";
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

export const MovieLibrary = () => {
  return (
    <>
      <TopBar />
       <QueryClientProvider client={queryClient}>

      <MovieList/>

      </QueryClientProvider>

    </>
  );
};
