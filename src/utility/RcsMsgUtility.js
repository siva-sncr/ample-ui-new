import React from 'react';
import { FormattedMessage } from 'react-intl';

function intlFormater(column, colIndex, components) {
    return (
            <FormattedMessage id={`rcsMessaging.content.msgStatus.column.${column.dataField}`} />
    );
}

export const tableOptions = {
    pageNo: 1,
    pageSize: 1,
    paginationSize: 4,
    firstPageText: 'First',
    prePageText: 'Prev',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Prev page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    columnList: [
        {
            headerFormatter: intlFormater,
            dataField: 'number',
            hidden: false,
            onFilterClicked: false,
            text:"number",
            data: [],
            selectedItems: [], //Saved Filters
            items: [], //Persistance Filter Items
        }, {
            headerFormatter: intlFormater,
            dataField: 'status',
            hidden: false,
            onFilterClicked: false,
            text:"status",
            data: [],
            selectedItems: [], //Saved Filters
            items: [], //Persistance Filter Items
        }, {
            headerFormatter: intlFormater,
            dataField: 'action',
            hidden: false,
            onFilterClicked: false,
            text:"action",
            data: [],
            selectedItems: [], //Saved Filters
            items: [], //Persistance Filter Items
        }
    ],
//    paginationTotalRenderer: this.customTotal,
    sizePerPageList: [{
        text: '10', value: 10
    }, {
        text: '50', value: 50
    }, {
        text: '100', value: 100
    }, {
        text: '250', value: 250
    }],
    list:[]
}