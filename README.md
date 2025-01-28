# Humble Superhero Frontend

A React-based frontend application for managing our company's superhero registry. Built with Vite, TypeScript, and Bootstrap for a modern, type-safe, and responsive user experience.

## ✨ Features

- Add new superheroes with their powers and humility scores
- View sorted list of superheroes based on humility
- Responsive design using Bootstrap
- Real-time updates
- Pagination support
- Type-safe development with TypeScript

## 🛠️ Technology Stack

- React 18
- TypeScript
- Vite
- Bootstrap & React Bootstrap
- Axios for API communication

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running on localhost:3000

## 🏗️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd eJam-test-assignment-fe
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🔧 Configuration

The application expects the backend API to be running at `http://localhost:3000`. To change this:

1. Update the API_URL in `src/api/superheroApi.ts`:

```typescript
const API_URL = 'your-api-url';
```

## 📱 Components

### SuperheroForm

- Handles new superhero creation
- Input validation
- Error handling
- Success feedback

### SuperheroList

- Displays paginated superhero data
- Sorting by humility score
- Responsive table layout
- Loading states

## 🤝 Collaboration Notes

Here's how I envision collaborating with teammates on this project:

1. **Component Development**

   - Modular component design
   - Shared styling conventions
   - Reusable utility functions
2. **Potential Areas for Collaboration**

   - UI/UX improvements
   - Accessibility enhancements
   - Performance optimizations
3. **Best Practices**

   - Component documentation
   - Consistent TypeScript usage
   - Regular dependency updates

## 🔮 If I Had More Time...

1. **Technical Improvements**

   - Add React Query for better data fetching
   - Implement proper state management (Redux/Zustand)
   - Add error boundary handling
   - Implement proper form management with React Hook Form
   - Add loading skeletons
   - Implement proper testing with React Testing Library
2. **Feature Enhancements**

   - Add dark mode support
   - Implement search and filtering
   - Add superhero profile pages
   - Create dashboard with statistics
   - Add animations for list updates
   - Implement drag-and-drop sorting
3. **UX Improvements**

   - Add more interactive feedback
   - Implement toast notifications
   - Add keyboard navigation
   - Improve mobile responsiveness
   - Add data export functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
