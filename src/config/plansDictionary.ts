// plansDictionary.ts
export interface Plan {
  name: string;
  price: string | { monthly: string; annually: string };
  buttonText: string;
  buttonLink: string;
  isStarter: boolean;
}

export interface Feature {
  name: string;
  plans: Record<string, boolean | string>;
  tooltip?: string;
}

export interface Section {
  name: string;
  features: Feature[];
}

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    buttonText: "Get started",
    buttonLink: "#",
    isStarter: true,
  },
  {
    name: "Teams",
    price: { monthly: "$49", annually: "$39" },
    buttonText: "Start 14-day trial",
    buttonLink: "#",
    isStarter: false,
  },
  {
    name: "Business",
    price: { monthly: "$99", annually: "$79" },
    buttonText: "Start 14-day trial",
    buttonLink: "#",
    isStarter: false,
  },
];

export const sections: Section[] = [
  {
    name: "Workspace Features",
    features: [
      {
        name: "Email notifications & webhooks",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Workspaces",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "5", Teams: "10", Business: "Unlimited" },
      },
      {
        name: "Storage",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "$0.65 per stored GB",
          Teams: "$0.34 per stored GB",
          Business: "Customized¹",
        },
      },
      {
        name: "Seats",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "5 users",
          Teams: "Up to 20 users",
          Business: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Service accounts",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Admin API",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "No-Code workflow builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "Limited", Teams: "Standard", Business: "Enhanced" },
      },
    ],
  },
  {
    name: "Analytics",
    features: [
      {
        name: "Analytics retention",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "7 days", Teams: "1 year", Business: "Unlimited" },
      },
      {
        name: "Anomaly detection",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "Custom report builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Business: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Slack",
        plans: {
          Starter: "Community",
          Teams: "Connect",
          Business: "Dedicated agent",
        },
      },
      {
        name: "Email",
        plans: { Starter: "2-4 days", Teams: "1-2 days", Business: "Priority" },
      },
    ],
  },
];
