import React, {useEffect} from 'react'
import './TabelContainer.css'
import axios from 'axios';

const TableContainer = ({allUsers}) => {
    
    const getMessage = async() => {
      const res = await axios.get('http://localhost:5000/getMessage');
      console.log(res);
    }
    useEffect(() => {
        getMessage();
      }, []);

  return (
    <section className='container'>
        <div className="tableContainer">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Message</th>
            </tr>
            </thead>

            <tbody>

            {
                allUsers.map((item) => (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>message</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </div>
    </section>
  )
}

export default TableContainer;