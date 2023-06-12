
import React, { useState, useEffect } from "react";
import { getCiudades } from "../../data/Ciudades";
import { getCiudadesByContinent } from "../../data/Ciudades";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';



export default function ItemListContainer({ greeting }) {
    const [Ciudades, setCiudades] = useState([]);
    const { continenteId } = useParams()

    useEffect(() => {
        const asyncFunc = continenteId ? getCiudadesByContinent : getCiudades

        asyncFunc(continenteId)
            .then(response => {
                setCiudades(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [continenteId])


    return (
        <div>
            <div>
                <h1>{greeting}</h1>
            </div>
            <div>
                <ItemList Ciudades={Ciudades} />
            </div>
        </div>
    )
}