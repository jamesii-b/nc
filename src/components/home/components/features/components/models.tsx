interface Section {
    title: string;
    text: string;
    image: string;
    reverse: boolean;
}

const sections:Section[] = [
  { 
    title: "Client-Centric Growth",
    text: "We prioritize the growth and success of our clients as it directly correlates with our own. By fostering an environment where our clients thrive, we unlock opportunities for mutual growth and prosperity.",
    image: "/hero/i-1.webp",
    reverse: true 
  },
  { 
    title: "Security First Approach",
    text: "Security is not just a feature; it's at the core of everything we do. We take Security by Heart. We implement stringent security measures to safeguard your data and assets, ensuring peace of mind throughout our partnership while following best industry standard practice and compliance like GDPR, HIPAA, and more.",
    image:"/hero/i-2.webp",
    reverse: false 
  },

  { 
    title: "Proactive Support & Maintenance",
    text: "Our commitment doesn't end with project delivery. We provide proactive support and ongoing maintenance to ensure seamless operation and long-term success, standing by you every step of the way.",
    image: "/hero/i-3.webp",
    reverse: true 
  }
];

export default sections;