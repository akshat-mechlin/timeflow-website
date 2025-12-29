const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/layout',
  'src/components/sections',
  'src/components/ui',
  'src/styles',
  'src/utils',
  'src/assets/images'
];

const files = [
  'src/components/layout/Navbar.jsx',
  'src/components/layout/Navbar.css',
  'src/components/layout/Footer.jsx',
  'src/components/layout/Footer.css',
  'src/components/sections/Hero.jsx',
  'src/components/sections/Hero.css',
  'src/components/sections/Features.jsx',
  'src/components/sections/Features.css',
  'src/components/sections/Stats.jsx',
  'src/components/sections/Stats.css',
  'src/components/sections/Pricing.jsx',
  'src/components/sections/Pricing.css',
  'src/components/sections/CTA.jsx',
  'src/components/sections/CTA.css',
  'src/components/ui/Button.jsx',
  'src/components/ui/Button.css',
  'src/components/ui/FeatureCard.jsx',
  'src/components/ui/FeatureCard.css',
  'src/components/ui/PricingCard.jsx',
  'src/components/ui/PricingCard.css',
  'src/styles/variables.css',
  'src/styles/global.css',
  'src/styles/animations.css',
  'src/utils/constants.js'
];

// Create directories
directories.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created: ${dir}`);
  }
});

// Create empty files if they don't exist
files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '// TODO: Add content\n');
    console.log(`✅ Created: ${file}`);
  }
});

console.log('\n✨ Structure created successfully!');