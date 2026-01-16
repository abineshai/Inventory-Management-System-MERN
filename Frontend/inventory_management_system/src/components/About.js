import React from 'react'

export default function About() {
  return (
    <div className='container-fluid p-5'>
        <h1>Inventory Management System - MERN CRUD App</h1>
        
        <p style={{ marginTop: "20px", fontSize: "17px" }}>
        The Inventory Management System is a full-stack MERN CRUD application
        developed to efficiently manage product inventory in an organization.
        This system helps users to maintain accurate records of products by
        performing Create, Read, Update, and Delete (CRUD) operations.
      </p>

      <p>
        The application provides a user-friendly interface where users can add
        new products, view available inventory, update existing product details,
        and remove outdated or unused products. All data is securely stored and
        managed using a MongoDB database.
      </p>

      <h3>Technology Stack</h3>
      <ul>
        <li><b>Frontend:</b> React.js</li>
        <li><b>Backend:</b> Node.js with Express.js</li>
        <li><b>Database:</b> MongoDB</li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>Add new inventory items</li>
        <li>View product list in real time</li>
        <li>Update product information</li>
        <li>Delete products from inventory</li>
        <li>REST API integration</li>
      </ul>

      <p>
        This project demonstrates the practical implementation of the MERN
        stack and helps in understanding full-stack web application development,
        RESTful APIs, and database integration.
      </p>

    </div>
  )
}
