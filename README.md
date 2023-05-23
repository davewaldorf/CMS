# CMS Application

The CMS (Content Management System) application is a web-based tool for managing categories, products, and orders. It provides an interface for creating, editing, and deleting categories and products, as well as viewing and managing orders.

## Features

- **Categories Management**: Create, edit, and delete categories. Each category can have a name, parent category, and properties.
- **Products Management**: Create, edit, and delete products. Each product has a title and can be associated with a category.
- **Orders Management**: View and manage orders. Each order contains information such as date, payment status, recipient details, and a list of products.

## Technologies Used

The CMS application is built using the following technologies:

- **Frontend**: React, Next.js, Axios, Next-Auth
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Google OAuth

## Installation

To run the CMS application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file in the root directory of the project and configure the following environment variables:

Database
DB_HOST=<your-database-host>
DB_PORT=<your-database-port>
DB_NAME=<your-database-name>

Authentication
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

Other
API_SECRET=<your-api-secret>

4. npm run dev

This command starts the development server and the application will be accessible at `http://localhost:3000`.

## Deployment
  
The CMS application is deployed and can be accessed at [https://heritage-selective.vercel.app/](https://heritage-selective.vercel.app/).

The application can be deployed to a hosting platform like Vercel, Heroku, or AWS. Follow the platform-specific instructions to deploy your Next.js application.

Once deployed, the application will be accessible at the deployment URL provided by the hosting platform.

## Contributing

Contributions to the CMS application are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

The CMS application is open source and released under the [MIT License](<link-to-your-license-file>).
Please note that Next.js applications require a .env.local file for configuring environment variables. Make sure to replace <repository-url>, <your-database-host>, <your-database-port>, <your-database-name>, <your-google-client-id>, <your-google-client-secret>, <your-api-secret>, and <link-to-your-license-file> with the actual values.

5. Start the application: `npm run dev`

## API

The CMS application provides an API for interacting with its data. The API is RESTful and follows standard HTTP methods for CRUD operations. Here are the available endpoints:

- `GET /api/categories`: Retrieves a list of all categories.
- `GET /api/categories/:id`: Retrieves a specific category by ID.
- `POST /api/categories`: Creates a new category.
- `PUT /api/categories/:id`: Updates a category by ID.
- `DELETE /api/categories/:id`: Deletes a category by ID.

- `GET /api/products`: Retrieves a list of all products.
- `GET /api/products/:id`: Retrieves a specific product by ID.
- `POST /api/products`: Creates a new product.
- `PUT /api/products/:id`: Updates a product by ID.
- `DELETE /api/products/:id`: Deletes a product by ID.

- `GET /api/orders`: Retrieves a list of all orders.
- `GET /api/orders/:id`: Retrieves a specific order by ID.
- `POST /api/orders`: Creates a new order.
- `PUT /api/orders/:id`: Updates an order by ID.
- `DELETE /api/orders/:id`: Deletes an order by ID.

Note: To access the API endpoints that require authentication, you need to include the appropriate authentication token in the request headers.

## Usage

Once the application is running, you can access it in your web browser at `http://localhost:3000`. The homepage displays a welcome message and the user's name.

- **Categories**: Navigate to the Categories page to manage categories. You can create new categories, edit existing ones, and delete categories.
- **Products**: Visit the Products page to manage products. You can add new products, edit existing ones, and delete products.
- **Orders**: Access the Orders page to view and manage orders. It displays a list of orders with details such as date, payment status, recipient information, and associated products.

## Contributing

Contributions to the CMS application are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

The CMS application is open source and released under the [MIT License](<link-to-your-license-file>).
Make sure to replace <your-database-host>, <your-database-port>, <your-database-name>, <your-google-client-id>, <your-google-client-secret>, <your-api-secret>, and <link-to-your-license-file> with the actual values.
