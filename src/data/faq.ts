export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Membership" | "Teams & Leadership" | "Interdisciplinary";
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do I need to be a Computer Science major to join GDG on Campus Passau?",
    answer:
      "Absolutely not! One of our 6 core pillars is Interdisciplinary Synergy. While we have many Computer Science and AI Engineering students, our members include students from Law (Rechtsinformatik/Legal Tech), Business Administration, Media & Communication, and Mathematics. Any student at the University of Passau with a curiosity for technology, digital products, or leadership is warmly welcome.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Is membership free?",
    answer:
      "Yes, 100% free! GDG on Campus Passau is a voluntary, non-profit student initiative supported by Google for Developers. All our workshops, hackathons, open-air mixers, and mentoring sessions are completely free of charge for University of Passau students.",
    category: "Membership",
  },
  {
    id: "faq-3",
    question: "How can I join one of the 4 Core Leadership Teams?",
    answer:
      "We recruit passionate builders at the beginning of each semester (and on a rolling basis for specialized roles). You can apply through our Contact Page by selecting 'Join a Core Team', or approach any of our Team Leads during an event. We look for motivation, consistency, and a desire to learn rather than an intimidating CV.",
    category: "Teams & Leadership",
  },
  {
    id: "faq-4",
    question: "How does the Tiered Peer-to-Peer Mentorship program work?",
    answer:
      "We match senior Master's students (e.g. M.Sc. Computer Science or M.Sc. AI Engineering) with Bachelor's students for guided project builds, technical interview preparation, and code reviews. Mentors provide 1-on-1 feedback, helping juniors avoid common pitfalls and gain production-level confidence early.",
    category: "Interdisciplinary",
  },
  {
    id: "faq-5",
    question: "What is the relationship between GDG on Campus and Google?",
    answer:
      "GDG on Campus (Google Developer Groups on Campus) is a global university program powered by Google for Developers. We operate independently as a student-led university chapter, while receiving direct curriculum access, technical resources, cloud credits, and event support from Google.",
    category: "General",
  },
  {
    id: "faq-6",
    question: "How can I stay up-to-date on upcoming events and workshops?",
    answer:
      "The fastest way is our official WhatsApp Community Group, where we post instant reminders, room changes, and registration drops. You can also join our official Bevy chapter page and follow our Instagram (@gdgpassau) and LinkedIn.",
    category: "Membership",
  },
];
