import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from './Loading'
import Dropdown from '../components/Dropdown'

const filterOptions = [{name: 'Products'}, {name: 'Id'}]

const Products = () => {
    // LIST ITEMS
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // INPUT
    const [search, setSearch] = useState('')

    // LIST ITEMS
    const fetchProducts = async () => {
        try {
            const response = await fetch('/heart_attack_germany.csv');
            const csvText = await response.text();

            // Parse CSV text into array of objects, limiting to 2000 rows
            const lines = csvText.split('\n');
            const headers = lines[0].split(';');
            const data = lines.slice(1, 2001).map(line => {
                const values = line.split(';');
                return headers.reduce((obj, header, index) => {
                    obj[header.trim()] = values[index];
                    return obj;
                }, {});
            });

            setItems(data);
            setFilteredItems(data);
        } catch (err) {
            setError("Erro ao carregar os dados do CSV")
            console.error("Error fetching CSV: ", err)
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearch(searchText)

        const filtered = items.filter(item =>
            item.nm_produto.toLowerCase().includes(searchText) ||
            item.id_produto.toString() === searchText
        );
        setFilteredItems(filtered)
    }

    // !! way to use await at return
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>{error}</div>
    }

    const tableRows = filteredItems.map((item, index) => (
        <tr key={index}>
            <td>{item.State}</td>
            <td>{item.Age_Group}</td>
            <td>{item.Heart_Attack_Incidence}</td>
            <td>{item.Year}</td>
            <td>{item.Gender}</td>
            <td>{item.BMI}</td>
            <td>{item.Smoking_Status}</td>
            <td>{item.Alcohol_Consumption}</td>
            <td>{item.Physical_Activity_Level}</td>
            <td>{item.Diet_Quality}</td>
            <td>{item.Family_History}</td>
            <td>{item.Hypertension}</td>
            <td>{item.Cholesterol_Level}</td>
            <td>{item.Diabetes}</td>
            <td>{item.Urban_Rural}</td>
            <td>{item.Socioeconomic_Status}</td>
            <td>{item.Air_Pollution_Index}</td>
            <td>{item.Stress_Level}</td>
            <td>{item.Healthcare_Access}</td>
            <td>{item.Education_Level}</td>
            <td>{item.Employment_Status}</td>
            <td>{item.Region_Heart_Attack_Rate}</td>
        </tr>
    ))

    return (
        <>
            <Header />
            <main className='Products-main'>
                <div className='Products-main-header'>
                    <h2>Products</h2>
                    <input placeholder='Search' value={search} onChange={handleInputChange} />
                </div>
                <div className='filter'>
                    <Dropdown options={filterOptions} name='filter...' />
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>State</th>
                        <th>Age Group</th>
                        <th>Heart Attack Incidence</th>
                        <th>Year</th>
                        <th>Gender</th>
                        <th>BMI</th>
                        <th>Smoking Status</th>
                        <th>Alcohol Consumption</th>
                        <th>Physical Activity Level</th>
                        <th>Diet Quality</th>
                        <th>Family History</th>
                        <th>Hypertension</th>
                        <th>Cholesterol Level</th>
                        <th>Diabetes</th>
                        <th>Urban/Rural</th>
                        <th>Socioeconomic Status</th>
                        <th>Air Pollution Index</th>
                        <th>Stress Level</th>
                        <th>Healthcare Access</th>
                        <th>Education Level</th>
                        <th>Employment Status</th>
                        <th>Region Heart Attack Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </main>
            <Footer />
        </>
    )
}

export default Products;