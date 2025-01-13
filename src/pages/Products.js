import React, { useState, useEffect } from 'react'
import Dropdown from '../components/Dropdown'
import Loading from './Loading'
import Error from './Error'

const Products = () => {
    const [filterOptions, setFilterOptions] = useState([])
    const [headers, setHeaders] = useState([])
    // LIST ITEMS
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // INPUT
    const [search, setSearch] = useState('')

    // FILTER
    const handleFilterClick = (e) => {
        const header = e.target.innerHTML.trim();
        console.log(header)

        const filtered = [...items].sort((a, b) => {
            const valueA = a[header]
            const valueB = b[header]

            if (valueA > valueB) {
                return 1;
            }
            if (valueA < valueB) {
                return -1;
            }
            return 0
        })
        setFilteredItems(filtered)
    }

    // LIST ITEMS
    const fetchProducts = async () => {
        try {
            const response = await fetch('/heart_attack_germany.csv');
            const csvText = await response.text();

            // Parse CSV text into array of objects, limiting to 2000 rows
            const lines = csvText.split('\n');
            const headers = lines[0].split(';');
            setHeaders(headers)
            const data = lines.slice(1, 2001).map(line => {
                const values = line.split(';');
                return headers.reduce((obj, header, index) => {
                    obj[header.trim()] = values[index];
                    return obj;
                }, {});
            });

            const dynamicFilterOptions = headers.map(header => (
                { name: header.trim(), onClick: handleFilterClick }
            ))
            setFilterOptions(dynamicFilterOptions)

            setItems(data);
            setFilteredItems(data);
        } catch (err) {
            setError("Erro ao carregar os dados do CSV")
            console.error("Error fetching CSV: ", err)
        } finally {
            setLoading(false);
        }
    }

    // !! way to use await at return
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const tableRows = filteredItems.map((item, index) => (
        <tr key={index}>
            {headers.map(header => (
                <td>{item[header.trim()]}</td>
            ))}
        </tr>
    ))

    const tableHead = headers.map((header, index) => (
        <th onClick={handleFilterClick} key={index}>{header}</th>
    ))

    return (
        <>
            <main className='Products-main'>
                <div className='Products-main-header'>
                    <h2>Products</h2>
                    <input placeholder='Search' value={search} />
                </div>
                <div className='filter'>
                    <Dropdown options={filterOptions} name='filter...' />
                </div>
                <table>
                    <thead>
                        <tr>
                            {tableHead}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default Products;