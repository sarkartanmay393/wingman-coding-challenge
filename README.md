# Wingman UI Coding Challenge

This project implements a **responsive** and **pixel-perfect** UI based on the provided Figma design. It leverages the foundational structure generated with **Next.js**, **Tailwind CSS**, and **shadcn/ui**.

## Tech Stack

- **Next.js**: For building the React-based frontend application.
- **Tailwind CSS**: For utility-first responsive styling.
- **shadcn/ui**: For pre-styled UI components.

---

## Project Structure

```bash
src/
├── app/                     # Next.js app directory
├── components/              # Reusable components
├── styles/                  # Tailwind and global styles
└── utils/                   # Helper functions
```

---

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd wingman-ui-challenge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design Requirements

- **Pixel Perfect**: The UI must closely match the provided Figma design.
- **Responsiveness**: Ensure all elements are responsive and optimized for both mobile and desktop views.
- **Interactions**:
   - Dropdown menus
   - Hover states
   - Charts and Insights visualization.

---

## Tools & Libraries Used

- **Tailwind CSS**: Responsive utility classes for styling.
- **shadcn/ui**: For building modular UI components.
- **Chart.js or Recharts** *(optional)*: For rendering dynamic graphs.
- **Next.js**: For server-side rendering and routing.

---

## Features

- Dashboard UI with summary metrics
- Insights charts (responsive and dynamic)
- Orders list with commission details
- Forecast indicators for KPIs

---

## Responsive Considerations

The layout should adapt seamlessly to all screen sizes:
- **Mobile**: Single-column layout.
- **Tablet/Desktop**: Multi-column grid layout.

---

## Development Notes

1. Use Tailwind's responsive classes (e.g., `sm:`, `md:`, `lg:`) for flexibility.
2. Extract reusable components (e.g., **Cards**, **Tables**, **Charts**).
3. Verify pixel perfection using tools like **Figma to Code** or browser developer tools.

---

## Deployment

Deploy using platforms like:
- **Vercel** (recommended for Next.js apps)
- **Netlify**

Run:
```bash
npm run build
npm start
```

---

## License

This project is for demonstration purposes.