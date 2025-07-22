# Kuduu - AI-Powered Healthcare Website

A modern, responsive website for Kuduu's AI-powered healthcare platform that predicts, prevents, and personalizes patient care.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Email signup form with validation
  - Mobile navigation menu
  - Smooth scrolling navigation
  - Hover effects and animations
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Optimized for fast loading with Vite build system

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with modern features
- **ESLint** - Code quality and consistency

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kuduu-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.tsx   # Navigation bar with mobile menu
│   └── EmailForm.tsx    # Email signup form with validation
├── App.tsx             # Main application component
├── App.css             # Main stylesheet
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
The website uses a consistent color palette:
- Primary Blue: `#2563eb`
- Primary Red: `#ef4444`
- Background: `#000000`
- Text: `#ffffff`
- Secondary Text: `#9ca3af`

### Logo
The logo is created using CSS and can be customized in `App.css`:
- Heart shape with deer icon
- Red heart (`#ef4444`) with blue deer (`#2563eb`)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
VITE_API_URL=your-api-url
VITE_ANALYTICS_ID=your-analytics-id
```

### SEO Configuration
Update meta tags in `index.html` for your specific needs:
- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL

## 📈 Analytics & Tracking

To add analytics, update the `index.html` file:

### Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Form Submission
The email form currently logs to console. To connect to a real backend:

1. Update `handleEmailSubmit` in `App.tsx`
2. Add your API endpoint
3. Handle success/error states

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- Website: [kuduu.io](https://kuduu.io)
- Email: hello@kuduu.io

## 🎯 Roadmap

- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add testimonials
- [ ] Integrate with CMS
- [ ] Add dark/light theme toggle
- [ ] Implement search functionality
- [ ] Add multi-language support
