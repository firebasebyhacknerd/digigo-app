export type Post = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  tags?: string[];
};

export const posts: Post[] = [
  {
    slug: "electronic-conditioning-vs-salt-softening",
    title:
      "Electronic Water Conditioning vs Salt Softening: What Engineers Should Know",
    summary:
      "A technical comparison of ion-exchange softeners versus signal-based conditioning for scale prevention and water chemistry.",
    body: `
### Core difference
Salt softeners swap calcium/magnesium ions for sodium using resin beads. Electronic conditioning leaves minerals intact but alters crystal habit so they stay suspended.

### When to choose which
- Use salt softening where <strong>very low hardness</strong> is legally mandated (e.g., pharma make-up).
- Use electronic conditioning when <strong>zero discharge, zero salt logistics</strong>, and <strong>lower OPEX</strong> matter.

### Monitoring
Track hardness (unchanged), scaling index (Langelier), surface fouling rates, and heat-transfer deltas to evaluate performance.`,
    tags: ["engineering", "comparison"],
  },
  {
    slug: "boiler-scale-energy-cost",
    title: "Why Scale Increases Energy Cost in Boilers",
    summary:
      "Even 1 mm of carbonate scale can drive 2–4% fuel penalty. Here is the physics and how to measure it.",
    body: `
### Heat transfer penalty
Scale introduces thermal resistance; fuel must rise to maintain steam output. Industry data shows 2–4% penalty per millimeter of CaCO₃ scale.

### How E-SOFT helps
By keeping minerals in a less-adherent polymorph (~0.5 µm), deposition rate drops and manual descaling intervals extend.
`,
    tags: ["boilers", "energy"],
  },
  {
    slug: "does-conditioning-reduce-tds",
    title: "Does Water Conditioning Reduce TDS? Clarifying a Common Myth",
    summary:
      "Electronic conditioning does not reduce TDS. It re-structures hardness minerals to reduce scale adhesion.",
    body: `
Electronic conditioning is **not** a TDS reducer. TDS stays the same because minerals remain in the water, but the way they crystallize changes.

Use TDS meters for RO performance; use **scale monitoring** (weight gain coupons, pressure drop) to evaluate conditioning.`,
    tags: ["faq", "tds"],
  },
  {
    slug: "scale-effects-heat-exchangers",
    title: "How Scale Affects Heat Exchangers and Chillers",
    summary:
      "Scaling increases approach temperature, drives compressor lift, and raises kWh per TR. Here’s a practical checklist.",
    body: `
- Track approach temperature weekly.
- Clean condenser tubes based on delta-P trend rather than calendar.
- Conditioners that limit adhesive scale can hold approach closer to design.
`,
    tags: ["hvac", "industrial"],
  },
  {
    slug: "hard-water-agri-fertilizer-loss",
    title: "Hard Water in Agriculture: Fertilizer Loss Mechanisms",
    summary:
      "Precipitation of phosphates and sulfates with Ca/Mg can waste 10–30% nutrients depending on chemistry.",
    body: `
When Ca²⁺ and Mg²⁺ meet phosphates, insoluble precipitates reduce plant-available nutrients. Conditioning that keeps Ca/Mg as dispersed micro-particles can reduce precipitation losses.
`,
    tags: ["agriculture"],
  },
  {
    slug: "evaluate-softening-system",
    title: "How to Evaluate a Water Softening System for Your Facility",
    summary:
      "A due-diligence checklist: inlet hardness, flow profile, downtime cost, concentrate disposal, and lifecycle OPEX.",
    body: `
### Checklist
1. Map peak vs average flow (LPM).
2. Identify acceptable downtime for regeneration or maintenance.
3. Quantify disposal routes for brine or backwash water.
4. Compare 5-year OPEX for salt, labor, energy, and downtime.
`,
    tags: ["procurement"],
  },
  {
    slug: "maintenance-economics-salt-vs-digital",
    title: "Maintenance Economics: Salt Softeners vs Digital Conditioning",
    summary:
      "A simple TCO model showing where digital conditioning wins on logistics, labor, and discharge compliance.",
    body: `
Salt logistics + resin replacement + brine discharge permits can exceed equipment CAPEX over 5–7 years. Digital systems have near-zero consumables; main costs are electricity and inspections.`,
    tags: ["economics"],
  },
  {
    slug: "scaling-corrosion-flow-loss",
    title: "Scaling, Corrosion, and Flow Loss: The Hidden Cost Curve",
    summary:
      "Pressure drop and surface roughness compound pumping energy. Conditioning that limits deposition slows the curve.",
    body: `
Monitor pressure drop across filters and heat exchangers. A slow rise indicates deposition. Conditioning that keeps crystals rounded and non-adherent reduces roughness and preserves flow efficiency.`,
    tags: ["flow"],
  },
];
