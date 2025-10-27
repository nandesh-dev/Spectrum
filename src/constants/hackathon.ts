export const Hackathon: Hackathon = {
  startTimestamp: new Date("Feb 1, 2026 09:00:00"),
  date: "Feb 1-2, 2026",
  location: null,
  registrationUrl: "https://eventhubcc.vit.ac.in/EventHub/",
  youtubeTailer:
    "https://www.youtube.com/embed/YzFK7x_LGKk?autoplay=1&mute=0&controls=0&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&playlist=YzFK7x_LGKk&playsinline=1",
  eventDescription:
    "With high-impact tracks, we push participants to think like founders, craft scalable solutions, and tackle pressing challenges. But it doesn't stop there—we're redefining the hackathon experience with live music, flash mobs, and immersive activities that ignite creativity and energy.",
  approachDescription:
    "Elevating the excitement, IBM Z presents an exclusive speaker session, offering expert insights, cutting-edge trends, and practical guidance to empower your entrepreneurial journey.",
  tracks: [
    {
      title: "Blockchain & Decentralized Solutions",
      description:
        "Foster entrepreneurship through blockchain-driven, secure, and transparent business solutions.",
      outcome:
        "Innovative solutions in finance, governance, and digital security.",
      image: "/tracks/block.jpg",
    },
    {
      title: "AgriTech & MedTech",
      description:
        "Encourage entrepreneurial innovation in agriculture and healthcare using AI and IoT.",
      outcome:
        "Enhanced food security, precision farming, and accessible healthcare.",
      images: {
        left: "/tracks/agri.jpg",
        right: "/tracks/med.png",
      },
    },
    {
      title: "EdTech & Smart Learning",
      description:
        "Promote entrepreneurship in education through AI-driven and adaptive learning technologies.",
      outcome:
        "Improved learning accessibility, engagement, and skill development.",
      image: "/tracks/ed.avif",
    },
    {
      title: "Sustainability & Social Well-Being",
      description:
        "Inspire entrepreneurship for sustainability-focused and socially impactful tech solutions.",
      outcome:
        "Advancements in environmental conservation, clean energy, and social well-being.",
      images: {
        left: "/tracks/sust.webp",
        right: "/tracks/soc.jpg",
      },
    },
    {
      title: "IoT & Smart Technologies",
      description:
        "Enable entrepreneurship in smart tech through AI-powered, connected, and intelligent devices.",
      outcome:
        "Smarter automation, predictive analytics, and efficient infrastructure.",
      image: "/tracks/iot.jpg",
    },
    {
      title: "Open Innovation",
      description:
        "Cultivate an entrepreneurial mindset for groundbreaking, cross-domain tech innovations.",
      outcome:
        "Disruptive solutions addressing real-world challenges creatively.",
      image: "/tracks/open.jpg",
    },
  ],
  judges: [],
  organizers: [
    {
      id: 1,
      name: "OSPC",
      role: "Lead Organizer",
      bio: "The Open Source Programming Club at VIT Chennai is dedicated to fostering innovation through open source collaboration and building a vibrant tech community on campus.",
      imageUrl: "/ospc.png",
      socialLinks: {
        twitter: "https://twitter.com/ospcvitc",
        linkedin:
          "https://www.linkedin.com/company/opensource-programming-club-vitc",
        github: "https://github.com/OSPC-VITC",
        website: "https://ospcvitc.club",
      },
    },
  ],

  partners: [
    {
      id: 3,
      name: "Vertex Innovate",
      role: "Community Partner",
      bio: "Vertex Innovate is an EdTech entertainment platform connecting students across colleges, fostering collaboration, and bridging academia with industry—making learning fun and interactive!",
      imageUrl: "/vertex.png",
      socialLinks: {
        website: "https://www.instagram.com/vertex_innovate/",
      },
    },
    {
      id: 4,
      name: "IBM Z Community",
      role: "Technology Partner",
      bio: "IBM Z Community VIT Chennai unites tech enthusiasts to explore enterprise computing. We empower students through cutting-edge tech, challenges and industry mentorship.",
      imageUrl: "/IBMz.jpg",
      socialLinks: {
        website: "https://www.instagram.com/ibmzcommunity.vitc",
      },
    },
  ],
  sponsors: [
    {
      name: "Devfolio",
      tier: "kernel",
      logo: "/Devfolio.png",
      website: "https://devfolio.co/",
    },
    {
      name: "EthIndia",
      tier: "stack",
      logo: "/ethindia.svg",
      website: "https://ethindia.co",
    },
  ],
} as const;

type Hackathon = {
  startTimestamp: Date;
  date: string;
  location: null | string;
  registrationUrl: string;
  youtubeTailer: null | string;
  eventDescription: null | string;
  approachDescription: null | string;
  tracks: Track[];
  judges: Judge[];
  organizers: Organizer[];
  partners: Partner[];
  sponsors: Sponsor[];
};

type Judge = {
  name: string;
  image: string;
  role: string;
  linkedin: string;
};

type Track = { title: string; description: string; outcome: string } & (
  | { image: string }
  | { images: { left: string; right: string } }
);

type Organizer = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
};

type Partner = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    website?: string;
  };
};

export type SponsorTier = "kernel" | "stack" | "script";
type Sponsor = {
  name: string;
  tier: SponsorTier;
  logo?: string;
  website?: string;
};
