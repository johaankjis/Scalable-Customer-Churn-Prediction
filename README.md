# Scalable Customer Churn Prediction

A modern, scalable web application for predicting and managing customer churn using machine learning. Built with Next.js 15, React 19, and TypeScript, this application provides real-time analytics, ML-powered insights, and interactive visualizations to help businesses identify at-risk customers and improve retention strategies.

## 🎯 Overview

Customer churn prediction is critical for subscription-based businesses. This application leverages machine learning models to predict which customers are likely to leave, enabling proactive retention strategies. The platform provides:

- **Real-time Dashboard**: Monitor key churn metrics and trends
- **Risk Management**: Identify and manage high-risk customers
- **ML Model Performance**: Track and compare multiple model versions
- **Interactive Visualizations**: ROC curves, confusion matrices, and feature importance analysis

## ✨ Features

### 📊 Dashboard
- **Key Metrics Overview**: Overall churn rate, high-risk customers, revenue at risk, and model accuracy
- **Churn Trend Analysis**: Historical and predicted churn rates over 12 months
- **Risk Distribution**: Customer segmentation by churn probability
- **Top Predictive Features**: Visualization of features driving churn predictions

### 👥 Customer Risk Management
- **Customer List**: Comprehensive table of all customers with risk scores
- **Risk Segmentation**: Filter customers by risk level (Critical, High, Medium, Low)
- **Customer Details**: View individual customer profiles with churn probability
- **Contract Type Filtering**: Filter by contract type (Month-to-Month, One Year, Two Year)
- **Actionable Insights**: Email and phone contact options for at-risk customers

### 🤖 Model Performance
- **Multiple Model Comparison**: Compare performance across different model versions
  - Gradient Boosted Trees v2.3 (Production)
  - Gradient Boosted Trees v2.2
  - Logistic Regression v1.5
  - Random Forest v1.8
- **Performance Metrics**:
  - Accuracy: 87.3%
  - Precision: 84.6%
  - Recall: 89.1%
  - F1 Score: 86.8%
  - AUC: 91.2%
- **Confusion Matrix**: Visual representation of model predictions vs actual outcomes
- **ROC Curve**: Receiver Operating Characteristic curve (AUC: 0.91)
- **Feature Importance Analysis**: Detailed breakdown of features driving predictions
  - Total Charges
  - Tenure Months
  - Monthly Charges
  - Contract Type
  - Internet Service
  - Tech Support
  - Online Security

### 📈 Advanced Visualizations
- **Interactive Charts**: Built with Recharts for smooth, responsive visualizations
- **Real-time Updates**: Dynamic data updates and filtering
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Built-in theme switching capability

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.2.4](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19](https://react.dev/) - Latest React with concurrent features
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS 4.1.9](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Fonts**: [Geist](https://vercel.com/font) - Vercel's design system font

### UI Components
- **Design System**: Custom component library built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner for beautiful toast notifications
- **Theming**: Next Themes for dark/light mode support
- **Animations**: Tailwind CSS Animate for smooth transitions

### Development Tools
- **Package Manager**: pnpm - Fast, disk space efficient package manager
- **Code Quality**: ESLint for code linting
- **Type Checking**: TypeScript compiler
- **Build Tool**: Next.js built-in build system with Turbopack

### Analytics & Monitoring
- **Analytics**: Vercel Analytics for real-time insights

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or **pnpm**: v8.0.0 or higher)
- **Git**: For version control

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Scalable-Customer-Churn-Prediction.git
   cd Scalable-Customer-Churn-Prediction
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Or using pnpm (recommended)
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Other Commands

```bash
# Run linting
npm run lint

# Type checking (via TypeScript)
npx tsc --noEmit
```

## 📁 Project Structure

```
Scalable-Customer-Churn-Prediction/
├── app/                          # Next.js App Router pages
│   ├── customers/               # Customer risk management page
│   │   └── page.tsx
│   ├── models/                  # Model performance page
│   │   └── page.tsx
│   ├── page.tsx                 # Dashboard (home page)
│   ├── layout.tsx               # Root layout with fonts and analytics
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Radix-based)
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── empty.tsx
│   │   └── ...
│   ├── navigation.tsx           # Main navigation component
│   ├── metrics-grid.tsx         # Dashboard metrics cards
│   ├── churn-trend-chart.tsx    # Churn trend visualization
│   ├── risk-distribution-chart.tsx  # Risk segmentation chart
│   ├── top-features-chart.tsx   # Feature importance chart
│   ├── customer-table.tsx       # Customer list table
│   ├── customer-filters.tsx     # Customer filtering controls
│   ├── model-metrics.tsx        # Model performance metrics
│   ├── model-comparison.tsx     # Model version comparison table
│   ├── confusion-matrix.tsx     # Confusion matrix visualization
│   ├── roc-curve.tsx           # ROC curve chart
│   └── feature-importance-detailed.tsx  # Detailed feature analysis
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/                        # Utility functions
│   └── utils.ts                # Helper utilities (cn, etc.)
├── public/                     # Static assets
├── styles/                     # Additional stylesheets
├── components.json             # Shadcn UI configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration
└── tailwind.config.ts         # Tailwind CSS configuration (if exists)
```

## 🎨 Key Features Explained

### Machine Learning Models

The application showcases predictions from multiple ML models:

1. **Gradient Boosted Trees v2.3** (Production Model)
   - Accuracy: 87.3%
   - Best overall performance
   - Currently deployed in production

2. **Gradient Boosted Trees v2.2**
   - Previous version with slightly lower accuracy
   - Used for A/B testing and comparison

3. **Logistic Regression v1.5**
   - Baseline model for comparison
   - Faster training time

4. **Random Forest v1.8**
   - Alternative ensemble method
   - Good balance of performance and interpretability

### Feature Importance

The model identifies key factors influencing churn:

1. **Total Charges** (23.4% importance) - Cumulative customer value
2. **Tenure Months** (19.8% importance) - Customer lifetime duration
3. **Monthly Charges** (17.6% importance) - Current subscription cost
4. **Contract Type** (12.3% importance) - Contract duration impact
5. **Internet Service** (8.9% importance) - Service type correlation
6. **Tech Support** (7.2% importance) - Support subscription impact
7. **Online Security** (4.0% importance) - Security service adoption

### Risk Levels

Customers are categorized into four risk levels:

- **Critical** (85-100%): Immediate action required
- **High** (65-84%): Priority retention efforts
- **Medium** (40-64%): Monitor closely
- **Low** (0-39%): Stable customers

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configuration:

```env
# Optional: Add your environment variables here
# For example:
# NEXT_PUBLIC_API_URL=http://localhost:8000
# DATABASE_URL=your_database_url
```

### Customization

- **Theme**: Modify `app/globals.css` for theme customization
- **Components**: Extend or modify components in the `components/` directory
- **Data**: Update mock data in component files or connect to a real API
- **Models**: Add or modify ML model configurations in `components/model-comparison.tsx`

## 🧪 Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper type definitions
- Maintain component modularity
- Use meaningful variable and function names

### Component Structure

```tsx
// Example component structure
"use client" // If using client-side features

import { ComponentProps } from "react"
import { ExternalDependencies } from "external-lib"
import { LocalComponents } from "@/components/local"

interface ComponentProps {
  // Define props
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    // JSX
  )
}
```

### Adding New Features

1. Create new components in `components/` directory
2. Add new pages in `app/` directory using App Router conventions
3. Update navigation in `components/navigation.tsx`
4. Follow existing patterns for consistency
5. Test thoroughly before committing

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add tests if applicable
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues

### Coding Standards

- Use TypeScript for all new code
- Follow ESLint rules
- Write meaningful commit messages
- Document complex logic with comments
- Keep components small and focused

## 📊 Data Model

The application uses the following data structure for customer information:

```typescript
interface Customer {
  id: string              // Unique customer identifier
  name: string           // Customer name
  email: string          // Contact email
  tenure: number         // Months with company
  monthlyCharges: number // Current monthly cost
  totalCharges: number   // Lifetime revenue
  contract: string       // Contract type
  churnProbability: number // ML prediction (0-1)
  riskLevel: string     // Risk category
}
```

## 🚧 Roadmap

Future enhancements planned:

- [ ] Real-time data integration with backend API
- [ ] Advanced filtering and search capabilities
- [ ] Customer retention action workflows
- [ ] Email campaign integration
- [ ] A/B testing framework for retention strategies
- [ ] Export functionality for reports
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Integration with MLflow for model tracking
- [ ] Automated model retraining pipeline

## 🐛 Known Issues

- Mock data is used for demonstration purposes
- Real-time updates require backend integration
- Some charts may have performance issues with large datasets

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and analytics
- **Radix UI** - For accessible component primitives
- **Recharts** - For beautiful chart components
- **Tailwind CSS** - For the utility-first CSS framework

## 📞 Contact & Support

For questions, issues, or contributions:

- **GitHub Issues**: [Create an issue](https://github.com/johaankjis/Scalable-Customer-Churn-Prediction/issues)
- **Repository**: [GitHub Repository](https://github.com/johaankjis/Scalable-Customer-Churn-Prediction)

## 🌟 Screenshots

### Dashboard
The main dashboard provides an overview of key churn metrics, trends, and predictions.

### Customer Risk Management
Browse and filter customers by risk level, view detailed profiles, and take action on at-risk customers.

### Model Performance
Track ML model performance with detailed metrics, confusion matrices, ROC curves, and feature importance analysis.

---

**Built with ❤️ using Next.js, React, and TypeScript**

⭐ Star this repository if you find it useful!
