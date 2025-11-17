import { Pill, Droplets, Syringe, FlaskConical } from 'lucide-react';

export const CATEGORIES = ["All", "Tablets", "Syrups", "Injectables", "Ointments"];

export const PRODUCTS = [
  {
    id: 1,
    name: "RoxCip-500",
    slug: "roxcip-500", // <--- ADD THIS LINE
    category: "Tablets",
    description: "Ciprofloxacin 500mg. Broad-spectrum antibiotic for bacterial infections.",
    composition: "Ciprofloxacin IP 500mg", // <--- ADD THIS TOO
    indications: ["Respiratory Tract Infections", "Urinary Tract Infections", "Typhoid Fever"],
    packing: "10x10 Alu-Alu",
    icon: Pill,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "RoxMol-650",
    slug: "roxmol-650",
    category: "Tablets",
    description: "Paracetamol 650mg. Extended release antipyretic and analgesic.",
    composition: "Paracetamol IP 650mg",
    indications: ["Fever", "Mild to Moderate Pain", "Post-vaccination Pyrexia"],
    packing: "10x15 Blister",
    icon: Pill,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "CoughRox",
    slug: "coughrox-syrup",
    category: "Syrups",
    description: "Ambroxol + Terbutaline + Guaiphenesin. Mucolytic bronchodilator.",
    composition: "Ambroxol 15mg + Terbutaline 1.25mg + Guaiphenesin 50mg",
    indications: ["Productive Cough", "Bronchitis", "Asthma"],
    packing: "100ml PET Bottle",
    icon: Droplets,
    color: "bg-amber-100 text-amber-600",
  },
  // ... Add similar fields for other products if you want the page to work for them too
];

export const MANUFACTURING_STEPS = [
  {
    id: 1,
    title: "Raw Material Testing",
    desc: "Every API and excipient undergoes strict IR & HPLC testing before entering the floor.",
    icon: "🧪",
    color: "bg-blue-100 border-blue-300"
  },
  {
    id: 2,
    title: "Wet Granulation",
    desc: "High-shear mixing and fluid bed drying to ensure perfect granule density.",
    icon: "⚗️",
    color: "bg-teal-100 border-teal-300"
  },
  {
    id: 3,
    title: "Compression",
    desc: "High-speed rotary presses producing 2 million tablets per day with uniform hardness.",
    icon: "⚙️",
    color: "bg-indigo-100 border-indigo-300"
  },
  {
    id: 4,
    title: "Coating",
    desc: "Automated coating pans for enteric and film coating to ensure stability.",
    icon: "💊",
    color: "bg-purple-100 border-purple-300"
  },
  {
    id: 5,
    title: "Blister Packing",
    desc: "Alu-Alu and Blister packing lines with camera detection systems for defects.",
    icon: "📦",
    color: "bg-amber-100 border-amber-300"
  }
];