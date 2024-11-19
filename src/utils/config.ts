import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Spicy Pills",
  seo: {
    title: "Spicy Pills - Tools for Neurodiverse Individuals",
    description: "Unlock Simplicity, Embrace Productivity, Tools for Neurodiverse Individuals",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "forest",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: true,
  waitList: true,
  waitListSignupLink: "https://forms.gle/3d98765654321654321654321654321654321654",
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: false,
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/google",
      // facebook: "https://facebook.com/google",
      // twitter: "https://x.com/google",
    },
    links: [
      { href: "/#features", title: "Features" },
      // { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: true,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      // { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Spicy Pills App Today!",
    waitingListTitle: "Spicy Pills",
    subtitle:
      "Unlock Simplicity, Embrace Productivity, Tools for Neurodiverse Individuals.",
    screenshots: [
      "/screenshots/1.webp",
      "/screenshots/2.webp",
      "/screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Spicy Pills - Tools for Neurodiverse Individuals",
      description: "Unlock Simplicity, Embrace Productivity, Tools for Neurodiverse Individuals",
    },
    // testimonials: {
    //   id: "testimonials",
    //   title: "Testimonials",
    //   subtitle: "Check out a few of our customer stories",
    //   cards: [
    //     {
    //       name: "Alice Johnson",
    //       comment:
    //         "The service was fantastic! Highly recommended. The team was very professional and attentive to our needs. They went above and beyond to ensure we were satisfied with the results. I will definitely be using their services again in the future.",
    //     },
    //     {
    //       name: "Bob Smith",
    //       comment:
    //         "Great value for the price. Very satisfied with the overall experience. The product quality is top-notch and the customer service is excellent. I appreciate the prompt responses to my inquiries and the helpful advice provided. Highly recommend.",
    //     },
    //     {
    //       name: "Charlie Brown",
    //       comment:
    //         "An excellent experience from start to finish. The onboarding process was smooth and the support team was very responsive. I felt valued as a customer and the results exceeded my expectations. I am impressed with the level of detail and care put into their work.",
    //     },
    //     {
    //       name: "Dana White",
    //       comment:
    //         "Superb customer service and high-quality products. The team demonstrated great expertise and patience throughout the project. They addressed all my concerns and provided valuable insights. The end product was delivered on time and surpassed my expectations.",
    //     },
    //     {
    //       name: "Eve Adams",
    //       comment:
    //         "I couldn't be happier with the results! The attention to detail and the level of customization provided was outstanding. The team was friendly and professional, making the entire process enjoyable. I highly recommend their services to anyone looking for top-quality work.",
    //     },
    //   ],
    // },
    partners: {
      title: "As seen on",
      logos: [
        // "/misc/companies/apple.svg",
        // "/misc/companies/aws.svg",
        // "/misc/companies/google.svg",
        // "/misc/companies/tumblr.svg",
      ],
    },
    // howItWorks: {
    //   id: "how-it-works",
    //   title: "How it works",
    //   subtitle:
    //     "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
    //   steps: [
    //     {
    //       title: "Install the App",
    //       subtitle:
    //         "Download and install the app on your device to get started quickly and easily.",
    //       image: "/stock/01.webp",
    //     },
    //     {
    //       title: "Create an Account",
    //       subtitle:
    //         "Sign up by entering your personal details and verifying your email to create a new account in just a few minutes.",
    //       image: "/stock/02.webp",
    //     },
    //     {
    //       title: "Set Up Your Profile",
    //       subtitle:
    //         "Complete your profile by adding necessary information and preferences to personalize your experience on the platform.",
    //       image: "/stock/03.webp",
    //     },
    //     {
    //       title: "Explore Features",
    //       subtitle:
    //         "Navigate through the app to discover various features and tools designed to enhance your productivity and engagement.",
    //       image: "/stock/04.webp",
    //     },
    //     {
    //       title: "Connect with Others",
    //       subtitle:
    //         "Start connecting with friends, colleagues, and like-minded individuals to expand your network and collaborate efficiently.",
    //       image: "/stock/05.webp",
    //     },
    //   ],
    // },
    features: {
      id: "features",
      title: "Transform how you do things.",
      subtitle:
        "A pill for each moment.",
      cards: [
        {
          title: "Task Breakdown Assistant",
          subtitle: "Transform complex tasks into manageable steps with our AI-powered task breaker. Intelligently analyzes and breaks down your projects into clear, actionable items for better organization",
          icon: "/3D/fire-front-color.webp"
        },
        {
          title: "Time Estimation Expert",
          subtitle: "Get accurate time estimates for your tasks using advanced AI analysis. Helps you plan better and manage project timelines with precision based on task complexity and requirements",
          icon: "/3D/clock-front-color.webp"
        },
        {
          title: "Tone Analysis Tool",
          subtitle: "Perfect your communication with our AI tone judge. Analyzes your text to ensure the right emotional impact and professional tone for your intended audience",
          icon: "/3D/megaphone-front-color.webp"
        },
        {
          title: "Text Formalizer",
          subtitle: "Instantly transform casual text into professional, polished content. Our AI helps maintain consistent formality levels while preserving your message's core meaning",
          icon: "/3D/text-front-color.webp"
        },
        {
          title: "Time Management Suite",
          subtitle: "Stay focused with integrated timer and stopwatch tools. Perfect for time-boxing tasks or tracking work sessions, complete with customizable durations and audio notifications",
          icon: "/3D/rocket-front-color.webp"
        }
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "Is it Free?",
          answer:
            "Yes, it's free to download and use the app. You have a free amount of credits to use the app, and you can purchase more credits if you need them.",
        },
        {
          question: "How does it work?",
          answer:
            "SpicyPills works by utilizing advanced AI technology to simplify complex tasks into manageable steps and can automate certain tasks for a seamless task management experience.",
        },
        {
          question: "What are the benefits?",
          answer:
            "SpicyPills can help you save time, reduce stress, and increase productivity by automating tasks and providing personalized recommendations.",
        },
        {
          question: "How do you protect my data?",
          answer:
            "We use industry-standard security measures to protect your data, including encryption and secure servers. We also have privacy policies in place to ensure your data is protected with all of our partners.",
        },
      ],
    },
    header: {
      headline: "Tools for Neurodiverse Individuals",
      subtitle:
        "Unlock Simplicity, Embrace Productivity",
      screenshots: [
        "/screenshots/1.webp",
        "/screenshots/2.webp",
        "/screenshots/3.webp",
      ],
      // rewards: ["App of the year \n 1st", "Product of the day"],
      // usersDescription: "100+ people already using the app",
      headlineMark: [1, 3],
    },
    // pricing: {
    //   id: "pricing",
    //   title: "Pricing",
    //   subtitle: "Flexible costs to meet your budget",
    //   actionText: "Download the app",
    //   plans: [
    //     {
    //       title: "Basic Plan",
    //       price: "$9.99/month",
    //       rows: ["Access to basic features", "Email support", "1 GB storage"],
    //     },
    //     {
    //       title: "Standard Plan",
    //       price: "$19.99/month",
    //       featured: true,
    //       rows: [
    //         "Access to all basic features",
    //         "Priority email support",
    //         "10 GB storage",
    //         "Monthly webinars",
    //       ],
    //     },
    //     {
    //       title: "Premium Plan",
    //       price: "$29.99/month",
    //       rows: [
    //         "Access to all features",
    //         "24/7 support",
    //         "100 GB storage",
    //         "Weekly webinars",
    //         "Exclusive content",
    //       ],
    //     },
    //   ],
    // },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Spicy Pills",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** 19/11/2024

Welcome to SpicyPills, a mobile application developed by PixelTowers. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and protect your information in compliance with the General Data Protection Regulation (GDPR).

1.  **Information We Collect**
- **Email Address:** We collect your email address when you create an account to use SpicyPills.
- **Optional Personal Data:** While we currently do not collect additional personal information, such as your name, this may change in the future, and you will be informed accordingly.

1. **How We Use Your Information**
- **To Provide Services:** Your email address is used to create and manage your account and to communicate with you about the app.
- **AI Processing:** Task-related data is processed locally on your device during AI interactions to provide task breakdowns and estimates. This data is not collected or stored by us.

1. **Legal Basis for Processing**

We process your personal data under the following legal bases:

- **Consent:** By using SpicyPills, you consent to the collection and processing of your email address as outlined in this policy.
- **Contractual Necessity:** Processing is necessary for the performance of the contract between you and PixelTowers.

1. **Data Sharing and Disclosure**
- **Service Providers:** We may share your email address with third-party service providers who assist us in operating our app and providing services to you.
- **Legal Requirements:** We may disclose your information if required by law or in response to legal requests.

1. **Data Retention**

We will retain your email address only for as long as necessary to fulfil the purposes outlined in this policy. When your data is no longer needed, we will securely delete it.

1. **Your Rights**

Under GDPR, you have the right to:

- Access your personal data and request a copy.
- Rectify any inaccurate or incomplete data.
- Request the erasure of your data under certain conditions.
- Object to the processing of your data.
- Request the restriction of processing.
- Data portability.

To exercise these rights, please contact us at spicypills@pixeltowers.io

1. **Data Security**

We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.

1. **Changes to This Privacy Policy**

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our app and updating the effective date.

1. **Contact Us**

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

PixelTowers

Email: spicypills@pixeltowers.io

Thank you for using SpicyPills. Your privacy is important to us, and we are committed to protecting your personal data.

`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** [Insert Date]

## Introduction

This Cookies Policy explains how [Your Company Name] ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, [Your App Name] (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Mobile App Landing Template",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** [Insert Date]

## Introduction

Welcome to [Your App Name] (the "App"). These Terms and Conditions ("Terms") govern your use of the App provided by [Your Company Name] ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least [Insert Age] years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the App for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the App or the servers or networks used to make the App available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the App or to other accounts, systems, or networks connected to the App.

## Intellectual Property

### 1. Ownership
All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of [Your Company Name] or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the App for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the App without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the App.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless [Your Company Name], its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]
`,
  },
};

export default templateConfig;
