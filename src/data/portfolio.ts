export const profile = {
  name: 'Aszadur Rahman',
  role: 'ECE Undergraduate | VLSI & Digital Design',
  tagline: 'Designing from RTL to Silicon.',
  location: 'Tezpur, Assam, India',
  email: 'aszad13rahman@gmail.com',
  education: {
    degree: 'B.Tech Electronics and Communication Engineering',
    institution: 'Tezpur University',
    period: '2023 – Present',
    cgpa: '7.17/10',
  },
  // Replace these placeholder URLs with your actual profiles
  socials: {
    github: 'https://github.com/aszadur-rahman',
    linkedin: 'https://linkedin.com/in/aszadur-rahman',
    email: 'mailto:aszad13rahman@gmail.com',
  },
  // Place a CV file in the /public folder and update this path
  cvPath: '/Aszadur-Rahman-CV.pdf',
};

export const heroFlow = [
  { label: 'RTL', sub: 'Verilog' },
  { label: 'Synthesis', sub: 'Yosys' },
  { label: 'SPICE', sub: 'Ngspice' },
  { label: 'Layout', sub: 'Magic' },
  { label: 'DRC/LVS', sub: 'Netgen' },
  { label: 'Silicon', sub: 'SKY130' },
];

export const engineeringFocus = [
  'RTL Design',
  'CMOS Circuit Design',
  'IC Layout',
  'Physical Design',
  'Digital Logic',
  'Semiconductor Design Flow',
];

export const journeySteps = [
  { label: 'Digital Logic', desc: 'Logic gates, Boolean algebra, combinational & sequential circuits' },
  { label: 'Verilog / RTL', desc: 'Hardware description, modular RTL design, testbenches' },
  { label: 'Circuit Simulation', desc: 'SPICE simulation, transient & AC analysis' },
  { label: 'CMOS Design', desc: 'Schematic design, transistor sizing, VTC analysis' },
  { label: 'IC Layout', desc: 'Physical layout, parasitic extraction' },
  { label: 'Physical Design', desc: 'DRC/LVS, RTL-to-layout validation' },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  tools: string[];
  description: string;
  highlights: string[];
  keyResult?: { value: string; label: string };
  flow?: string[];
  blockDiagram?: string[];
  note?: string;
  githubUrl: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    id: 'sram',
    title: '6T SRAM Cell Design & Characterization',
    category: 'Analog / VLSI / Memory',
    tools: ['Cadence Virtuoso', 'GPDK 90nm'],
    description:
      'Executed device-level design and characterization of a conventional 6T SRAM cell to evaluate stability, access latency and power dissipation.',
    highlights: [
      'Voltage Transfer Characteristic analysis',
      'Butterfly curve generation',
      'Static Noise Margin analysis',
      'Read Access Time',
      'Write Access Time',
      'Transient analysis',
      'AC analysis',
      'Physical layout',
    ],
    keyResult: { value: '642.54 mV', label: 'Static Noise Margin' },
    githubUrl: 'https://github.com/aszadur-rahman/6t-sram-design',
    projectUrl: '#',
  },
  {
    id: 'cmos-inverter',
    title: 'CMOS Inverter Design & Analysis',
    category: 'VLSI / CMOS / Physical Design',
    tools: ['Xschem', 'Ngspice', 'Magic VLSI', 'Netgen', 'Yosys', 'SKY130 PDK'],
    description:
      'Designed and verified a CMOS inverter through schematic capture, SPICE simulation, layout, DRC/LVS and RTL-to-layout validation.',
    highlights: [
      'CMOS schematic design',
      'SPICE simulation',
      'Voltage Transfer Characteristics',
      'Propagation delay',
      'Power analysis',
      'Noise margin',
      'Transistor sizing',
      'Parasitic analysis',
      'IC layout',
      'DRC/LVS',
      'RTL-to-layout validation',
    ],
    flow: ['Schematic', 'SPICE', 'Layout', 'DRC/LVS', 'Validation'],
    githubUrl: 'https://github.com/aszadur-rahman/cmos-inverter-sky130',
    projectUrl: '#',
  },
  {
    id: 'alarm-clock',
    title: 'RTL Smart Alarm Clock',
    category: 'RTL / Digital Design',
    tools: ['Verilog HDL', 'Icarus Verilog'],
    description:
      'Developed modular RTL for timekeeping, counters, alarm functionality and control operations using Verilog HDL.',
    highlights: [
      'Modular RTL architecture',
      'Counters',
      'Timekeeping logic',
      'Alarm functionality',
      'Control logic',
      'Dedicated testbenches',
      'Simulation and debugging',
      'Icarus Verilog',
    ],
    blockDiagram: ['Clock', 'Counters', 'Timekeeping', 'Alarm Control', 'Output'],
    githubUrl: 'https://github.com/aszadur-rahman/rtl-alarm-clock',
    projectUrl: '#',
  },
  {
    id: 'jal-suraksha',
    title: 'JAL-SURAKSHA',
    category: 'Smart India Hackathon 2025 • IoT + AI',
    tools: ['pH Sensor', 'Turbidity Sensor', 'Temperature Sensor', 'GPS', 'Cloud', 'AI/ML'],
    description:
      'Developed a concept for real-time water-quality monitoring using pH, turbidity, temperature and GPS sensors, with proposed cloud analysis, AI/ML risk prediction and multilingual alerts.',
    highlights: [
      'Water quality monitoring',
      'pH sensing',
      'Turbidity sensing',
      'Temperature sensing',
      'GPS',
      'Cloud analysis concept',
      'AI/ML risk prediction concept',
      'Multilingual alerts',
    ],
    note: 'Sensing hardware and data collection were implemented. Cloud analysis, AI/ML risk prediction and multilingual alerts are proposed concepts.',
    githubUrl: 'https://github.com/aszadur-rahman/jal-suraksha',
    projectUrl: '#',
  },
  {
    id: 'esp32',
    title: 'ESP32 Wi-Fi Web Server & IoT Control System',
    category: 'Embedded Systems / IoT',
    tools: ['ESP32', 'Embedded C/C++', 'Wi-Fi'],
    description:
      'Built a Wi-Fi-enabled ESP32 system with an embedded web server for browser-based remote hardware control.',
    highlights: [
      'ESP32',
      'Embedded C/C++',
      'Wi-Fi communication',
      'Embedded web server',
      'Browser-based hardware control',
    ],
    githubUrl: 'https://github.com/aszadur-rahman/esp32-wifi-webserver',
    projectUrl: '#',
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'HDL & Digital Design',
    skills: ['Verilog HDL', 'RTL Design', 'Digital Logic', 'FSMs', 'Counters', 'Testbench Development'],
  },
  {
    title: 'VLSI / EDA',
    skills: ['Cadence EDA Tools', 'SKY130 PDK', 'Xschem', 'Ngspice', 'Magic VLSI', 'Netgen', 'Yosys', 'Icarus Verilog'],
  },
  {
    title: 'Programming',
    skills: ['C', 'C++', 'Python', 'Embedded C'],
  },
  {
    title: 'Embedded / IoT',
    skills: ['ESP32', 'ESP8266', 'Wi-Fi', 'Sensors', 'Web Server', 'IoT'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'MATLAB', 'MS Office'],
  },
];

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Convenor — eSports Club',
    org: 'Tezpur University',
    period: '2025 – Present',
    description:
      'Led club members and volunteers while planning tournaments, scheduling events, coordinating teams and managing event operations.',
  },
  {
    role: 'eSports Coordinator — TechXtra',
    org: 'Tezpur University',
    period: '2024',
    description:
      'Coordinated an eSports event with NODWIN Gaming and KRAFTON, including participant coordination, scheduling and on-ground operations.',
  },
  {
    role: 'NSS Department Representative',
    org: 'Tezpur University',
    period: '2025 – 2026',
    description:
      'Coordinated communication between students and NSS coordinators and supported community outreach activities.',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    title: 'Verilog HDL — Hands On',
    issuer: 'Maven Silicon',
    year: '2026',
  },
  {
    title: 'Two-Day Training on Full-Custom & Semi-Custom IC Design Flow Using Cadence EDA Tools',
    issuer: 'Entuple Technologies',
    year: '2025',
  },
];

export interface Repo {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

export const repos: Repo[] = [
  {
    name: '6t-sram-design',
    description: '6T SRAM cell design and characterization using Cadence Virtuoso and GPDK 90nm.',
    tags: ['Verilog', 'Cadence', 'VLSI'],
    url: 'https://github.com/aszadur-rahman/6t-sram-design',
  },
  {
    name: 'cmos-inverter-sky130',
    description: 'CMOS inverter design and verification with SKY130 PDK — schematic to DRC/LVS.',
    tags: ['SKY130', 'Ngspice', 'Magic'],
    url: 'https://github.com/aszadur-rahman/cmos-inverter-sky130',
  },
  {
    name: 'rtl-alarm-clock',
    description: 'Modular RTL smart alarm clock in Verilog HDL with testbenches.',
    tags: ['Verilog', 'RTL', 'Icarus'],
    url: 'https://github.com/aszadur-rahman/rtl-alarm-clock',
  },
  {
    name: 'esp32-wifi-webserver',
    description: 'ESP32 Wi-Fi web server for browser-based remote hardware control.',
    tags: ['ESP32', 'Embedded C', 'IoT'],
    url: 'https://github.com/aszadur-rahman/esp32-wifi-webserver',
  },
];

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
