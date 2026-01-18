# NestJS Microservices with Prisma + PostgreSQL

A production-ready microservices architecture built with NestJS, Prisma ORM, and PostgreSQL.

## 📁 Project Structure

```
nestjs-microservices/
├── libs/
│   └── common/              # Shared library
│       ├── src/
│       │   ├── interfaces/  # Common interfaces
│       │   ├── dtos/        # Shared DTOs (Data Transfer Objects)
│       │   └── utils/       # Utility classes
│       └── package.json
├── api-gateway/             # API Gateway (Port 3000)
│   ├── src/
│   ├── .env                 # Environment variables
│   └── package.json
├── user-service/            # User Service (Port 3001)
│   ├── src/
│   ├── prisma/
│   │   └── schema.prisma    # User database schema
│   ├── .env                 # DATABASE_URL=postgresql://postgres:root@localhost:5432/user_db
│   └── package.json
├── order-service/           # Order Service (Port 3002)
│   ├── src/
│   ├── prisma/
│   │   └── schema.prisma    # Order database schema
│   ├── .env                 # DATABASE_URL=postgresql://postgres:root@localhost:5432/order_db
│   └── package.json
├── product-service/         # Product Service (Port 3003)
│   ├── src/
│   ├── prisma/
│   │   └── schema.prisma    # Product database schema
│   ├── .env                 # DATABASE_URL=postgresql://postgres:root@localhost:5432/product_db
│   └── package.json
└── package.json             # Root package.json
```

## 🛠 Technologies

- **NestJS** - Progressive Node.js framework
- **Prisma ORM** - Next-generation ORM
- **PostgreSQL** - Relational database
- **TypeScript** - Type-safe JavaScript
- **Class Validator** - Validation decorators
- **Class Transformer** - Object transformation

## 📦 Installation

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL (v14+ recommended)
- Yarn or npm

### 1. Install Dependencies

```bash
# Root level
yarn install

# Install for each service
cd user-service && yarn install
cd ../order-service && yarn install
cd ../product-service && yarn install
cd ../api-gateway && yarn install
cd ../libs/common && yarn install
```

### 2. Setup PostgreSQL Databases

Create three separate databases:

```sql
CREATE DATABASE user_db;
CREATE DATABASE order_db;
CREATE DATABASE product_db;
```

### 3. Configure Environment Variables

Each service has a `.env` file. Update the database credentials if needed:

**user-service/.env**
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/user_db"
PORT=3001
```

**order-service/.env**
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/order_db"
PORT=3002
```

**product-service/.env**
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/product_db"
PORT=3003
```

**api-gateway/.env**
```env
PORT=3000
USER_SERVICE_URL=http://localhost:3001
ORDER_SERVICE_URL=http://localhost:3002
PRODUCT_SERVICE_URL=http://localhost:3003
```

### 4. Run Prisma Migrations

Generate Prisma Client and create database tables:

```bash
# User Service
cd user-service
npx prisma generate
npx prisma migrate dev --name init

# Order Service
cd ../order-service
npx prisma generate
npx prisma migrate dev --name init

# Product Service
cd ../product-service
npx prisma generate
npx prisma migrate dev --name init
```

## 🚀 Running the Services

### Development Mode

Open 4 separate terminals and run:

```bash
# Terminal 1 - User Service
cd user-service
yarn start:dev

# Terminal 2 - Order Service
cd order-service
yarn start:dev

# Terminal 3 - Product Service
cd product-service
yarn start:dev

# Terminal 4 - API Gateway
cd api-gateway
yarn start:dev
```

### Production Mode

```bash
# Build all services
cd user-service && yarn build
cd ../order-service && yarn build
cd ../product-service && yarn build
cd ../api-gateway && yarn build

# Run in production
cd user-service && yarn start:prod
cd ../order-service && yarn start:prod
cd ../product-service && yarn start:prod
cd ../api-gateway && yarn start:prod
```

## 📊 Database Schemas

### User Service (user_db)
- **Users** table: id, email, name, password, createdAt, updatedAt

### Order Service (order_db)
- **Orders** table: id, userId, status, totalPrice, createdAt, updatedAt
- **OrderItems** table: id, orderId, productId, quantity, price, createdAt

### Product Service (product_db)
- **Products** table: id, name, description, price, stock, category, createdAt, updatedAt

## 🔍 API Endpoints

### API Gateway
- Base URL: `http://localhost:3000`

### User Service
- Base URL: `http://localhost:3001`
- `GET /` - Health check

### Order Service
- Base URL: `http://localhost:3002`
- `GET /` - Health check

### Product Service
- Base URL: `http://localhost:3003`
- `GET /` - Health check

## 📚 Shared Library

The `libs/common` folder contains shared code:

```typescript
// Import shared DTOs
import { CreateUserDto, CreateProductDto, CreateOrderDto } from '@app/common';

// Import shared interfaces
import { IUser, IProduct, IOrder } from '@app/common';

// Import utility classes
import { ApiResponse } from '@app/common';
```

## 🛠 Useful Commands

```bash
# Prisma Studio (Database GUI)
cd user-service && npx prisma studio

# Generate Prisma Client
npx prisma generate

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# View migration status
npx prisma migrate status
```

## 📝 Best Practices Implemented

✅ Monorepo structure with separate services
✅ Shared common library for code reuse
✅ Environment-based configuration
✅ Database per service pattern (microservices)
✅ TypeScript path mapping (`@app/common`)
✅ Validation with class-validator
✅ Prisma ORM for type-safe database access
✅ Separate .env files per service
✅ .gitignore configured properly

## 🔐 Security Notes

- Never commit `.env` files to version control
- Use strong passwords for PostgreSQL
- Update `.env.example` files instead of `.env`
- Implement authentication/authorization for production

## 🐛 Troubleshooting

**Prisma Client not found?**
```bash
cd <service-name>
yarn add @prisma/client@5.22.0
npx prisma generate
```

**Database connection error?**
- Check PostgreSQL is running
- Verify database credentials in `.env`
- Ensure databases are created

**Port already in use?**
- Change PORT in `.env` files
- Kill the process using the port

## 📄 License

MIT

## 👨‍💻 Author

Built with ❤️ using NestJS
