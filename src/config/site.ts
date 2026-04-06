// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Zhafran Bahij",
  title: "Zhafran Bahij - Fullstack Developer",
  description: "Fullstack Developer specializing in Laravel & React JS with experience in 50+ libraries",

  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
    comments: "Comments",
  },

  // Hero Section
  hero: {
    prefix: "I am",
    name: "Zhafran Bahij",
    intro: "A Fullstack Developer specializing in Laravel and React JS, with hands-on experience across 50+ libraries. I'm a quick learner who thrives on adapting to new technologies and building innovative solutions.\nWelcome to my portfolio!",
    avatar: "/image/profile.jpg",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/BahijZhafr91324" },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/m-zhafran-bahij-6021171b8" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/ZhafranBahij" },
    ],
  },

  // About Section
  about: {
    title: "About Me",
    text: "Hi, I'm Zhafran Bahij, a passionate Fullstack Developer with a strong foundation in Laravel and React JS. Throughout my journey, I've experimented with over 50 libraries and frameworks, giving me the flexibility to adapt to new technologies quickly. I love turning complex problems into elegant, user-friendly solutions and continuously expanding my skill set to stay at the forefront of web development.",
  },

  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "zhafran@example.com",
        link: "mailto:zhafran@example.com",
      },
      phone: {
        label: "Phone",
        value: "+1 (234) 567-890",
        link: "tel:+1 (234) 567-890",
      },
      location: {
        label: "Location",
        value: "Available Worldwide",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/BahijZhafr91324" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/m-zhafran-bahij-6021171b8" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/ZhafranBahij" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },

  // Footer
  footer: {
    copyright: "© 2025 Zhafran Bahij. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/ZhafranBahij",
    },
  },

  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore my latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },

  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};
