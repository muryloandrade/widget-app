import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Widget } from "../Pages/Widget/Widget";

export function Router(): JSX.Element {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/widget" element={<Widget/>}/>
            </Routes>
        </BrowserRouter>
        )
}