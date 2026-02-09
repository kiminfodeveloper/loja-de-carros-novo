# NewGo Car - Premium Automotive Store

NewGo Car is a modern, responsive React application for a premium car dealership. It features a high-end "Dark Neon" design, an extensive vehicle catalog, and a realistic financing simulator.

## 🚀 Features

### 🎨 Premium Design System
- **Dark Neon Theme**: A sophisticated dark mode (`#0f172a`) with neon accents (`#6366f1`, `#ec4899`) and glassmorphism effects.
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile.
- **Animations**: Subtle hover effects, transitions, and meaningful micro-interactions.

### 🚗 Vehicle Catalog
- **Grid View**: A dynamic grid displaying available vehicles with high-quality images.
- **Details Page**: Comprehensive product pages showing specs (category, seats, description) and financing estimates.
- **Shared Data**: Centralized vehicle data management for consistency.

### 💰 Financing Simulator
- **Real-time Calculation**: Simulates monthly installments based on input values.
- **Market Rules**: Includes estimated taxes (IOF) and fees (TAC) for realistic results.
- **Price Table (Tabela Price)**: Uses standard amortization formulas.
- **Currency Masking**: Smart input fields that automatically format currency values for better UX.

## 🛠️ Technologies

- **React.js**: Frontend library for building user interfaces.
- **CSS3 Variables**: For consistent theming and easy maintenance.
- **React Router**: For client-side routing.
- **Intl API**: For native currency formatting.

## 📦 Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/newgo-car.git
   ```
2. Navigate to the project folder:
   ```bash
   cd loja-de-carros-novo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Runs the app in the development mode.
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📂 Project Structure

- `src/components`: Reusable UI components (Navbar, Footer).
- `src/pages`: Main application views (Home, Catalog, Details, Financiamento).
- `src/data`: Static data files (cars.js).
- `src/img`: Image assets.
- `src/App.css`: Global styles and design tokens.

---

Developed with 💜 by KimInfoDeveloper
