import {useRouterError} from "/node_modules/.vite/deps/react-router-dom";

// Funcion ErrorPage
export default function ErrorPage () {
    const error = useRouterError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Lo siento, ocurrio un error</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}