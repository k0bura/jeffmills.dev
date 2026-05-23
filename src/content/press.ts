export interface PressItem {
  outlet: string;
  title: string;
  url: string;
  publishDate: string;
  excerpt?: string;
}

// Titles are best-guess from URL slugs and the comms summary, verify against
// the live article and tweak as needed. Order in this array is preserved when
// dates tie (sort is stable), so the array order is also the render order.
export const PRESS: PressItem[] = [
  {
    outlet: "Barron's",
    title: "Vanguard's new AI tool for advisors",
    url: "https://www.barrons.com/advisor/articles/vanguard-ai-tool-advisors-9ac40bb5",
    publishDate: "2026-04-09",
    excerpt:
      "Headlined Barron's Advisor Daily Newsletter on launch day.",
  },
  {
    outlet: "The Daily Upside",
    title:
      "Forget AI assistants, Vanguard's new tech helps manage client portfolios",
    url: "https://www.thedailyupside.com/advisor/wealthtech/forget-ai-assistants-vanguards-new-tech-helps-manage-client-portfolios/",
    publishDate: "2026-04-09",
    excerpt:
      "First to publish on launch day. Included in The Daily Upside's Advisor Upside newsletter, which reaches roughly 110,000 advisors.",
  },
  {
    outlet: "InvestmentNews",
    title:
      "Vanguard gives advisors an AI portfolio analyst with Expert Insights launch",
    url: "https://www.investmentnews.com/fintech/fintech-bytes-vanguard-gives-advisors-an-ai-portfolio-analyst-with-expert-insights-launch/266081",
    publishDate: "2026-04-09",
  },
  {
    outlet: "Citywire",
    title: "Vanguard piloting AI-powered portfolio analysis tool",
    url: "https://citywire.com/pro-buyer/news/vanguard-piloting-ai-powered-portfolio-analysis-tool/a2487648",
    publishDate: "2026-04-09",
  },
  {
    outlet: "ThinkAdvisor",
    title: "Vanguard rolls out AI portfolio tool for advisors",
    url: "https://www.thinkadvisor.com/amp/2026/04/09/vanguard-rolls-out-ai-portfolio-tool-for-advisors/",
    publishDate: "2026-04-09",
  },
  {
    outlet: "Financial Advisor Magazine",
    title:
      "Vanguard Advisor Services debuts AI tool for portfolio analysis",
    url: "https://www.fa-mag.com/news/vanguard-advisor-services-debuts-ai-tool-for-portfolio-analysis-86577.html",
    publishDate: "2026-04-09",
  },
  {
    outlet: "PLANADVISER",
    title: "Vanguard launches AI-powered portfolio analysis tool",
    url: "https://www.planadviser.com/vanguard-launches-ai-powered-portfolio-analysis-tool/",
    publishDate: "2026-04-09",
  },
  {
    outlet: "WealthManagement.com",
    title: "Vanguard launches AI tool for portfolio analysis",
    url: "https://www.wealthmanagement.com/artificial-intelligence/vanguard_launches_ai_tool_portfolio",
    publishDate: "2026-04-09",
  },
];
