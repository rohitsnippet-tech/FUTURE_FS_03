// cms.js – Simple CMS-powered content for SmartAI Studio

// "AI-generated" branding text
const heroContent = {
  title: "AI-Powered Growth for Modern Businesses.",
  subtitle:
    "SmartAI Studio helps you design, launch, and scale AI solutions— from automation and analytics to intelligent customer experiences—using fast, production-ready workflows."
};

// CMS-like data: services, case studies, blog posts
const services = [
  {
    label: "Automation",
    title: "Intelligent Workflow Automation",
    description: "Automate repetitive operations with AI agents and smart triggers to reduce manual work and unlock productivity."
  },
  {
    label: "Analytics",
    title: "Predictive Analytics Dashboards",
    description: "Use ML-powered forecasting to anticipate demand, detect anomalies, and make data-driven decisions in real time."
  },
  {
    label: "CX",
    title: "AI Assistants & Chatbots",
    description: "Deploy conversational agents to support customers 24/7 while maintaining brand voice and context awareness."
  }
];

const caseStudies = [
  {
    label: "E-commerce",
    title: "35% Faster Order Processing",
    description: "We helped an online retailer automate order routing and support, cutting average handling time by 35%."
  },
  {
    label: "SaaS",
    title: "20% Uplift in Trial Conversions",
    description: "Behavior-based recommendations guided users to the right features, boosting trial-to-paid conversions."
  },
  {
    label: "Support",
    title: "60% Deflection of Tier-1 Tickets",
    description: "An AI assistant resolved common queries instantly, allowing human teams to focus on higher-value work."
  }
];

const blogPosts = [
  {
    label: "Playbook",
    title: "How to Start Your First AI Project",
    description: "A simple 3-step framework to validate, pilot, and scale AI initiatives without overcomplicating the stack."
  },
  {
    label: "Best Practices",
    title: "Designing AI Experiences Users Actually Trust",
    description: "From transparency to feedback loops: practical guidelines for building AI products that earn user confidence."
  },
  {
    label: "Performance",
    title: "Balancing AI Power with Frontend Speed",
    description: "Learn how to keep your landing pages fast, even when integrating AI-driven content and dynamic components."
  }
];

// Render helpers
function renderHero() {
  const titleEl = document.getElementById("hero-title");
  const subtitleEl = document.getElementById("hero-subtitle");
  if(titleEl) titleEl.textContent = heroContent.title;
  if(subtitleEl) subtitleEl.textContent = heroContent.subtitle;
}

function renderCards(containerId, items) {
  const root = document.getElementById(containerId);
  if(!root) return;
  root.innerHTML = items.map(item => `
    <article class="card">
      <div class="card-tag">${item.label}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

// Simple contact form validation + UX
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");
  if(!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const project = data.get("project");
    const message = data.get("message").trim();

    if(!name || !email || !project || !message) {
      status.textContent = "Please fill in all fields before submitting.";
      status.style.color = "#f97373";
      return;
    }
    // Simple email pattern check
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.style.color = "#f97373";
      return;
    }

    // Simulate successful submission
    status.textContent = "Thank you! Your inquiry was submitted (simulation).";
    status.style.color = "#22c55e";
    form.reset();
  });
}

// Performance: minimal JS, no heavy frameworks
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderCards("services-grid", services);
  renderCards("cases-grid", caseStudies);
  renderCards("blog-list", blogPosts);
  initContactForm();
});
