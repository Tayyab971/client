export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  currencies?: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
}

import { ColDef } from "ag-grid-community";
import CountryLogoRenderer from "./CountryLogoRenderer";


export const countriesColDef: ColDef<Country>[] = [
  {
    headerName: "Country Name",
    valueGetter: (params) => params.data?.name?.common,
    sortable: true,
    filter: true,
    flex: 1.5,
    cellStyle: { fontWeight: 'bold', display: "flex", AlignItems: "start" },

  },

  {
    headerName: "Capital",
    valueGetter: (params) => params.data?.capital?.[0],
    sortable: true,
    filter: true,
    flex: 1,
    cellStyle: {
      display: "flex", AlignItems: "start"
    },
  },
  {
    headerName: "Region",
    field: "region",
    sortable: true,
    filter: true,
    flex: 1,
    cellStyle: {
      display: "flex", AlignItems: "start"
    },
  },
  {
    headerName: "Population",
    field: "population",
    sortable: true,
    filter: "agNumberColumnFilter",
    flex: 1,
    cellStyle: {
      display: "flex", AlignItems: "start"
    },
  },
  {
    headerName: "Area (km²)",
    field: "area",
    sortable: true,
    filter: "agNumberColumnFilter",
    flex: 1,
    cellStyle: {
      display: "flex", AlignItems: "start"
    },
  },
  {
    headerName: "Currency Symbol",
    cellStyle: {
      display: "flex", AlignItems: "start",
    },
    valueGetter: (params) => {
      const currency = params.data?.currencies;
      if (currency) {
        const first = Object.values(currency)[0];
        return first?.symbol;
      }
      return "";
    },
    sortable: true,
    filter: true,
  },
  {
    headerName: "Flag",
    valueGetter: (params) => params.data?.flags?.png || params.data?.flags?.svg,
    cellRenderer: CountryLogoRenderer,
    cellStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
];



