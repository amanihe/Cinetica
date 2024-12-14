import { createContext, PropsWithChildren, useContext } from "react";
import { MovieRepositoryImpl } from "@/app/repository/MovieRepositoryImpl";
import { DiscoverRepositoryImpl } from "./DiscoverRepositoryImpl";
import { ShowsRepositoryImpl } from "./ShowsRepositoryImpl";

interface ApplicationRepository {
    movieRepository: MovieRepositoryImpl;
    tvShowsRepository:ShowsRepositoryImpl;
    discoverRepository:DiscoverRepositoryImpl;
}

const ApplicationRepositoryContext = createContext<ApplicationRepository | null>(null);

export const useApplicationRepositoryContext = () => {
    const context = useContext(ApplicationRepositoryContext);
    if (!context) {
        throw new Error(
            "useApplicationRepositoryContext must be used within an ApplicationRepositoryProvider"
        );
    }
    return context;
};

export const ApplicationRepositoryProvider = ({ children }: PropsWithChildren) => {
    const movieRepository = new MovieRepositoryImpl();
    const tvShowsRepository = new ShowsRepositoryImpl();
    const discoverRepository = new DiscoverRepositoryImpl();


    return (
        <ApplicationRepositoryContext.Provider value={{ movieRepository, tvShowsRepository,discoverRepository }}>
            {children}
        </ApplicationRepositoryContext.Provider>
    );
};
