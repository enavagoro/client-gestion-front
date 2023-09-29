import React from 'react';
import { useState, useEffect } from 'react';
import { getEnterprises } from '../services/enterprise/enterprise.service';

function Enterprise() {
    const [empresas, setEmpresa] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
            const data = await getEnterprises();
            setEmpresa(data);
            } catch (error) {
            console.error('Error fetching user data:', error);
            }
        }
        fetchData();
    }, []);

  const changeEnterpriseName = () => {
    const tempEmpresas = JSON.parse(JSON.stringify(empresas))
    tempEmpresas[0].name = 'juanito'
    setEmpresa(tempEmpresas)
  }

  return (
    <div>
      <h2>Lista de Empresas</h2>
      <ul>
        {empresas.map(empresa => (
          <li key={empresa._id}>
            <h3>{empresa.name}</h3> 
          </li>
        ))}
      </ul>

      <button onClick={changeEnterpriseName}>change empresa A</button>
    </div>
  );
}

export default Enterprise;