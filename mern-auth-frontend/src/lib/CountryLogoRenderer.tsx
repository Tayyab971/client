import type { CustomCellRendererProps } from 'ag-grid-react';

export default (params: CustomCellRendererProps) => (
    <span className="">
        {params.value && (
            <img
                alt={`${params.value} Flag`}
                src={params.value}

            />
        )}
    </span>
);