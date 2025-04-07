import { useState } from "react"
import { env } from "./configs/environments";
import { AddCategory } from "./components/AddCategory";

export const GifMaticoApp = () => {

    const [ categories, setCategories ] = useState([ "Puppies", "Birds" ]);

    const onAddCategory = () => {
        const gifToAdd:string = (document.getElementById('gif-input') as HTMLInputElement)?.value;
        setCategories( [...categories, gifToAdd] );
    }

    return (
        <>

            {/* title */}
            <h1>{env.appName} {env.appVersion}</h1>
            <h2>{env.appDescription}</h2>

            {/* /Input */}
            {/* <input type="text" id="gif-input" /> */}
            <AddCategory />

            <button onClick={ onAddCategory } >Add</button>

            {/* Listado de Gifs */}
            <ol>
                { 
                    categories.map( category => {
                        return <li key={ category } >{ category }</li>
                    }) 
                }
            </ol>
                {/* Gif Item */}

        </>
    )
}