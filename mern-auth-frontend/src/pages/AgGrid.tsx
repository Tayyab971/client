import React, { useState, useEffect } from 'react'


import { AgGridReact } from 'ag-grid-react';

import { ColDef } from 'ag-grid-community';
import {
    themeAlpine,
    themeBalham,
    themeMaterial,
    themeQuartz,
    colorSchemeDark
} from 'ag-grid-community';
import { getCountries } from '../../api/Countries';
import { countriesColDef, Country } from '../lib/country';
import CustomLoadingOverlay from '../lib/CustomLoadingOverlay';

const CustomButtonComponent = (props) => {
    return <button onClick={() => window.alert('clicked')}>Push Me!</button>;
};


function AgGridReactExample() {
    interface RowData {
        id: number;
        make: string;
        model: string;
        price: number;
        electric: boolean

    }
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        const fetchCountries = async () => {
            const fetchedCountries = await getCountries();
            setCountries(fetchedCountries);
        };
        fetchCountries();
        setLoading(false)
    }, [])






    return (
        <div className='w-full h-[800px] text-center pt-2'>
            <h1>Ag Grid React Example (List of Countries)</h1>
            <div className='p-14' style={{ height: '100%', width: '100%', }}>
                <AgGridReact rowData={countries} columnDefs={countriesColDef} theme={themeMaterial} pagination={true} loading={loading} loadingOverlayComponent={CustomLoadingOverlay}
                />
            </div>
        </div>
    )
}

export default AgGridReactExample
