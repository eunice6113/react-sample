import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { ProductService } from './service';


const NoticeList:React.FC = () => {
    // const [products, setProducts] = useState([]);
    // const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
    // const productService = new ProductService();

    // useEffect(() => {
    //     productService.getProducts().then(data => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // const formatCurrency = (value) => {
    //     return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    // }

    // const priceBodyTemplate = (rowData) => {
    //     return formatCurrency(rowData.price);
    // }

    return (
        <div>
            {/* <div className="card">
                <h5>Single Column</h5>
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Multiple Columns</h5>
                <p>Use metakey to add a column to the sort selection.</p>
                <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Presort</h5>
                <DataTable value={products} sortField="category" sortOrder={-1} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Removable Sort</h5>
                <DataTable value={products} removableSort responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Sortable Disabled</h5>
                <p>Use metakey to add a column to the multiple sort selection.</p>
                <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div> */}
        </div>
    );
}
export default NoticeList;