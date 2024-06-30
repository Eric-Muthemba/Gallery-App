# Gallery App

Welcome to the Gallery App! This repository contains a full-stack web application developed using the following technologies:
 project is a full-stack Gallery App developed using `t3app`, `tRPC`, `Next.js`, `NextAuth.js`, `Prisma`, `Tanstack`, `UploadThings`, Neon database (PostgreSQL), and `Tailwind CSS`.


- **Authentication**: Secure user authentication and authorization using NextAuth.js and google as a provider.
- **Database**: Integration with Prisma ORM for managing PostgreSQL database interactions.
- **Image Uploads**: Ability to upload images using UploadThings.
- **Responsive UI**: Designed using Tailwind CSS for a responsive and modern user interface.
- **Dynamic Routing**: Utilizes Next.js for dynamic client-side routing.
- **Server-Client Communication**: Implements tRPC for type-safe server-client communication.
- **Optimized Performance**: Built with Tanstack for optimized performance and developer experience.

## Features

- User authentication and authorization using NextAuth.js.
- Responsive design with Tailwind CSS.
- Image upload and management.
- Secure and efficient data handling with Prisma and PostgreSQL.

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Eric-Muthemba/Gallery-App
    cd gallery-app
    ```

2. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Using yarn:
    ```bash
    yarn install
    ```

3. **Set up the database:**

    Create a new PostgreSQL database using Neon Database or your local PostgreSQL setup. Copy the database connection string.

4. **Configure environment variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```env
    DATABASE_URL=your_postgresql_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000
    UPLOADTHING_SECRET=your_uploadthing_secret
    ```

5. **Run database migrations:**

    Using npm:
    ```bash
    npx prisma migrate dev
    ```

    Using yarn:
    ```bash
    yarn prisma migrate dev
    ```

6. **Generate Prisma client:**

    Using npm:
    ```bash
    npx prisma generate
    ```

    Using yarn:
    ```bash
    yarn prisma generate
    ```

### Running the Application

1. **Start the development server:**

    Using npm:
    ```bash
    npm run dev
    ```

    Using yarn:
    ```bash
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.


## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [TanStack](https://tanstack.com/)
- [Uploadthing](https://uploadthing.com/)
- [Neon Database](https://neon.tech/)
- [Tailwind CSS](https://tailwindcss.com/)

