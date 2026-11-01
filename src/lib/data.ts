// Site content. Everything here is placeholder copy and stock photography —
// replace testimonials, team, stats and gallery projects with the client's real ones.

const photo = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: photo("1509391366360-2e959784a276", 2000),
  panelsSky: photo("1508514177221-188b1cf16e9d"),
  aerialGrass: photo("1497440001374-f26997328c1b"),
  installerWiring: photo("1559302504-64aae6ca6b6d"),
  commercialRoof: photo("1613665813446-82a78c468a1d"),
  roofInstall: photo("1624397640148-949b1732bb0a"),
  buildingArray: photo("1611365892117-00ac5ef43c90"),
  hybridWind: photo("1595437193398-f24279553f4f"),
  hillside: photo("1592833159155-c62df1b65634"),
  engineerPlans: photo("1581092160562-40aa08e78837"),
  fieldBlue: photo("1521618755572-156ae0cdd74d"),
  rowGrass: photo("1558449028-b53a39d100fc"),
  lowAngle: photo("1545209463-e2825498edbf"),
  solarFarm: photo("1497435334941-8c899ee9e8e9"),
  powerLines: photo("1473341304170-971dccb5ac1e"),
  electrician: photo("1621905251918-48416bd8575a"),
  aerialGrid: photo("1594818379496-da1e345b0ded"),
  groundMount: photo("1566093097221-ac2335b09e70"),
  panelTexture: photo("1625301840055-7c1b7198cfc0"),
};

export const stats = [
  { value: "500+", label: "Systems Installed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Uninterrupted Power" },
  { value: "15+", label: "Certified Engineers" },
];

export const services = [
  {
    tag: "Residential & Commercial",
    title: "Solar Panel Installation",
    description: "High-efficiency panels sized to your roof, your load and your budget.",
    image: images.roofInstall,
  },
  {
    tag: "Homes & Offices",
    title: "Inverter & Battery Systems",
    description: "Pure sine-wave inverters with lithium batteries for silent, seamless backup.",
    image: images.electrician,
  },
  {
    tag: "Homes, Farms & Remote Sites",
    title: "Complete Off-Grid Systems",
    description: "Cut the cord entirely with a self-sufficient solar, storage and inverter setup.",
    image: images.hybridWind,
  },
  {
    tag: "Offices, Schools & Factories",
    title: "Commercial & Industrial Solar",
    description: "Large-scale systems that slash diesel spend and keep operations running.",
    image: images.commercialRoof,
  },
  {
    tag: "Consultation",
    title: "Energy Audit & System Design",
    description: "We measure what you actually use, then engineer a system that fits.",
    image: images.engineerPlans,
  },
  {
    tag: "All Systems",
    title: "Maintenance & Upgrades",
    description: "Servicing, battery expansion and repairs — even for systems we didn't install.",
    image: images.installerWiring,
  },
];

export const steps = [
  {
    title: "Free Consultation",
    description: "Tell us what you want to power. We assess your load and site — free.",
    image: images.engineerPlans,
  },
  {
    title: "Custom System Design",
    description: "Engineers size your panels, inverter and batteries for real-world usage.",
    image: images.panelTexture,
  },
  {
    title: "Professional Installation",
    description: "Certified technicians install cleanly and safely, usually in 1–3 days.",
    image: images.installerWiring,
  },
  {
    title: "Activation & Monitoring",
    description: "Switch on, then track output and battery health from your phone.",
    image: images.groundMount,
  },
];

export const features = [
  {
    icon: "badge",
    title: "Certified & Experienced Engineers",
    description: "Every system is designed and installed by licensed, trained specialists.",
  },
  {
    icon: "shield",
    title: "Tier-1 Components, Real Warranties",
    description: "Genuine panels, inverters and lithium batteries backed by manufacturer warranty.",
  },
  {
    icon: "wrench",
    title: "End-to-End Support",
    description: "From the first audit to after-sales servicing, one team handles it all.",
  },
  {
    icon: "wallet",
    title: "Flexible Payment Plans",
    description: "Spread the cost with installment options for homes and businesses.",
  },
] as const;

export const packages = [
  {
    name: "Home Essential",
    summary: "Reliable backup for lights, fans, TV, fridge and laptops.",
    popular: false,
  },
  {
    name: "Home Plus",
    summary: "Full off-grid living for most homes — including air conditioning.",
    popular: true,
  },
  {
    name: "Business & Enterprise",
    summary: "High-capacity power for offices, schools, clinics and factories.",
    popular: false,
  },
];

// Each row lists a value per package, in the same order as `packages`.
export const packageRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Inverter Capacity", values: ["3.5 – 5 kVA", "5 – 10 kVA", "15 kVA and above"] },
  { label: "Battery Storage", values: ["5 kWh Lithium", "10 – 15 kWh Lithium", "20 kWh+ Lithium"] },
  { label: "Solar Array", values: ["2 – 3 kWp", "4 – 8 kWp", "10 kWp+"] },
  { label: "Ideal For", values: ["Flats & small homes", "Family homes", "Commercial & industrial"] },
  { label: "Runs Air Conditioning", values: [false, true, true] },
  { label: "Fully Off-Grid Capable", values: [false, true, true] },
  { label: "Remote Monitoring", values: [true, true, true] },
  { label: "Installation Included", values: [true, true, true] },
];

export const testimonials = [
  {
    name: "Tunde Adebayo",
    role: "Homeowner",
    location: "Lekki, Lagos",
    quote:
      "We haven't run our generator in eight months. The installation was neat, the team explained everything, and the app shows exactly what the panels are producing.",
  },
  {
    name: "Dr. Ngozi Okafor",
    role: "Director, Grace Clinic",
    location: "Enugu",
    quote:
      "For a clinic, power cuts are not an option. Solvera designed a system that keeps our theatre and cold chain running around the clock, and their maintenance is prompt.",
  },
  {
    name: "Ibrahim Musa",
    role: "Farm Owner",
    location: "Kaduna",
    quote:
      "Our farm is far from the grid. They set up solar for our borehole pump and storage, and diesel costs dropped to nearly zero within the first season.",
  },
];

export const faqs = [
  {
    q: "Can I really go completely off the grid?",
    a: "Yes. With the right mix of solar panels, battery storage and inverter capacity, most homes and many businesses can run fully independent of the grid. We'll size the system to your actual usage during the free consultation.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential systems are installed in one to three days. Larger commercial projects are scheduled in phases so your operations aren't disrupted.",
  },
  {
    q: "What happens on cloudy or rainy days?",
    a: "Panels still generate power under cloud, just less of it. Your batteries are sized to carry you through, and hybrid inverters can also charge from the grid or a generator when needed.",
  },
  {
    q: "Do you offer warranties on panels, inverters and batteries?",
    a: "Yes. All components carry manufacturer warranties, and we add our own workmanship warranty on every installation.",
  },
  {
    q: "Do you offer installment payment plans?",
    a: "We do. Ask about our flexible payment options when you request a quote.",
  },
  {
    q: "Can you upgrade or repair a system another company installed?",
    a: "Absolutely. We regularly service, expand and repair existing inverter and solar systems, whoever installed them.",
  },
];

export const timeline = [
  {
    year: "2016",
    title: "Started with Home Inverters",
    description: "Began installing inverter and battery backup systems for homes in Lagos.",
  },
  {
    year: "2018",
    title: "Expanded into Solar",
    description: "Added solar panel design and installation, helping families cut fuel costs.",
  },
  {
    year: "2021",
    title: "Commercial & Industrial Projects",
    description: "Delivered large systems for offices, schools, clinics and factories.",
  },
  {
    year: "2024",
    title: "500+ Systems Installed",
    description: "Crossed 500 installations across homes, businesses and remote sites.",
  },
];

export const team = [
  {
    name: "Chinedu Okeke",
    role: "Founder & CEO",
    image: photo("1605980776566-0486c3ac7617", 800),
  },
  {
    name: "Amara Nwosu",
    role: "Head of Operations",
    image: photo("1531123897727-8f129e1688ce", 800),
  },
  {
    name: "David Akinola",
    role: "Lead Solar Engineer",
    image: photo("1522529599102-193c0d76b5b6", 800),
  },
  {
    name: "Samuel Eze",
    role: "Senior Installation Technician",
    image: photo("1621905252507-b35492cc74b4", 800),
  },
];

export const galleryCategories = ["All", "Residential", "Commercial", "Off-Grid", "Inverter & Battery"] as const;
export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

export const gallery: {
  title: string;
  location: string;
  system: string;
  category: GalleryCategory;
  image: string;
}[] = [
  { title: "Rooftop Solar Home", location: "Lekki, Lagos", system: "6 kWp · 10 kWh", category: "Residential", image: images.roofInstall },
  { title: "Office Complex Rooftop", location: "Victoria Island, Lagos", system: "60 kWp", category: "Commercial", image: images.commercialRoof },
  { title: "Hybrid Wind & Solar Site", location: "Jos, Plateau", system: "Off-grid hybrid", category: "Off-Grid", image: images.hybridWind },
  { title: "5 kVA Inverter Setup", location: "Ikeja, Lagos", system: "5 kVA · 7.5 kWh", category: "Inverter & Battery", image: images.electrician },
  { title: "School Campus Array", location: "Abuja, FCT", system: "40 kWp · 60 kWh", category: "Commercial", image: images.buildingArray },
  { title: "Farm Irrigation System", location: "Kaduna", system: "15 kWp · Borehole pump", category: "Off-Grid", image: images.hillside },
  { title: "Panel Wiring & Mounting", location: "Ibadan, Oyo", system: "4 kWp", category: "Residential", image: images.installerWiring },
  { title: "Ground-Mount Estate System", location: "Ibeju-Lekki, Lagos", system: "20 kWp", category: "Off-Grid", image: images.groundMount },
  { title: "Industrial Solar Farm", location: "Ogun State", system: "250 kWp", category: "Commercial", image: images.solarFarm },
  { title: "Duplex Full Off-Grid", location: "Gwarinpa, Abuja", system: "8 kWp · 15 kWh", category: "Residential", image: images.aerialGrass },
  { title: "Clinic Backup Power", location: "Enugu", system: "10 kVA · 20 kWh", category: "Inverter & Battery", image: images.panelTexture },
  { title: "Remote Telecom Site", location: "Kogi State", system: "Off-grid · 12 kWp", category: "Off-Grid", image: images.aerialGrid },
  { title: "Warehouse Solar Upgrade", location: "Port Harcourt, Rivers", system: "45 kWp", category: "Commercial", image: images.fieldBlue },
  { title: "Bungalow Starter System", location: "Akure, Ondo", system: "3.5 kVA · 5 kWh", category: "Inverter & Battery", image: images.rowGrass },
];
