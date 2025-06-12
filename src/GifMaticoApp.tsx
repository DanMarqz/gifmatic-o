import { useState } from "react"
import { env } from "./configs/environments";
import { AddCategory } from "./components/AddCategory";

export const GifMaticoApp = () => {

    const [ categories, setCategories ] = useState([ "Puppies", "Birds" ]);

    const onAddCategory = ( newCategory: string ) => {
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>

            {/* title */}
            <h1>{env.appName} {env.appVersion}</h1>
            <h2>{env.appDescription}</h2>

            {/* /Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory = { event => onAddCategory(event) }
            />

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