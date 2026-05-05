const projects = [
  {
    title: "AgriTech Marketplace System",
    category: "Full-Stack System",
    description:
      "A platform connecting farmers and buyers with listings, tool rentals, and structured data flow.",
    tags: ["Supabase", "Full-Stack", "Database", "Marketplace"],
    github: "#",
    demo: "#"
  },
  {
    title: "Quadrilateral Learning Website",
    category: "EdTech Tool",
    description:
      "Educational website used to teach quadrilaterals and their properties.",
    tags: ["Education", "UI Design", "Math"],
    github: "#",
    demo: "#"
  },
  {
    title: "Solar System Sandbox Simulator",
    category: "Simulation System",
    description:
      "Interactive sandbox to simulate and create custom solar systems.",
    tags: ["Physics", "Simulation", "JS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Multi-Encoding Message System",
    category: "Data Tool",
    description:
      "Encodes and decodes messages using Base64, Morse code, etc.",
    tags: ["Algorithms", "Encoding"],
    github: "#",
    demo: "#"
  },
  {
    title: "Accessible Smart Bus Concept",
    category: "Systems Design",
    description:
      "Concept for accessible transport system for elderly and disabled users.",
    tags: ["UX", "Accessibility", "Systems Thinking"],
    github: "#",
    demo: "#"
  }
];

const container = document.getElementById("projects");

projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div>
      <h2>${p.title} <span class="category">${p.category}</span></h2>
      <p>${p.description}</p>

      <div class="tags">
        ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>

      <div class="buttons">
        <button onclick="window.open('${p.github}', '_blank')">GitHub</button>
        <button onclick="window.open('${p.demo}', '_blank')">Live Demo</button>
      </div>
    </div>
  `;

  container.appendChild(card);
});
