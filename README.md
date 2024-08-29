# Backend for Fulfillment Orders Application

## Overview
This is the backend API for the Fulfillment Orders Application. It provides endpoints to interact with order data stored in a PostgreSQL database using Prisma.

## Tech Stack
- **Node.js** (v14 or higher)
- **Express.js**
- **Prisma** (ORM)
- **PostgreSQL**

## Installation

### Prerequisites
- Node.js
- PostgreSQL
- Prisma CLI

### Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Dibyendu-13/Mini-Order-Status-Backend.git
    cd Mini-Order-Status-Backend
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Configure Database**
    - Create a `.env` file in the root directory with your PostgreSQL credentials:
      ```plaintext
      DATABASE_URL=postgresql://username:password@localhost:5432/mydatabase
      ```

4. **Set Up Prisma**
    - Initialize Prisma and run migrations:
      ```bash
      npx prisma migrate dev --name init
      ```

5. **Start the Server**
    ```bash
    npm start
    ```

## API Endpoints

- **GET /orders**: Retrieves a list of orders from the PostgreSQL database.

- **POST /orders**: Creates a new order in the database.
  - **Request Body**:

   ```json
  [
    {
      "id": 1,
      "customerName": "John Doe",
      "status": "Shipped"
    },
    {
      "id": 2,
      "customerName": "Jane Smith",
      "status": "Pending"
    }
  ]
    ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
