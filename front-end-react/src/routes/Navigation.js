import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar'
import { routes } from './routes'

export const Navigation = () => {
    return (
        <>
        <BrowserRouter>
            <SearchBar placeholder="Nunca dejes de buscar"/>
            <Routes>
                {routes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>}/>)}
            </Routes>
        </BrowserRouter>
        </>
    )
}
