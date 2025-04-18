import { SDGViewCard } from "../types/SDG/SDGCard";

// export interface SDGViewCard {
//     title: string
//     description: string
//     overview: string
//     imageUrl: string
//     targets: number
//   }
const baseURL = "/images/landing-sdg/";
export const staticSDGData: SDGViewCard[] = [
  {
    title: "Goal 1: No Poverty",
    description: "End poverty in all its forms everywhere",
    overview: `
     Global efforts to eradicate extreme poverty have faced significant setbacks by the COVID-19 pandemic and a series of major shocks during 2020-22. The pandemic caused extreme poverty to increase in 2020 for the first time in decades, reversing global progress by three years. Recovery has been uneven, with low-income countries lagging behind. With the ongoing poly-crisis, ending poverty by 2030 appears increasingly out of reach, particularly in regions that lack the fiscal capacity to cope with economic stresses. 
     `,
    imageUrl: "/images/goal 1.png",
    targets: 7,
    targetLink: "https://sdgs.un.org/goals/goal1",
    imageClear: `${baseURL}E-WEB-Goal-01.png`,
  },
  {
    title: "Goal 2: Zero Hunger",
    description:
      "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
    overview: `
    Globally, hunger persists with nearly 1 in 10 of the world's population facing it in 2022, while 2.4 billion people experienced moderate to severe food insecurity. In the same year, nearly 60 per cent of countries worldwide saw significant increases in food prices due to conflicts and disrupted supply chains. Achieving zero hunger requires intensified efforts to transform food systems towards sustainability, resilience, and equity. Furthermore, accelerating improvements in diets, nutrition, health, and hygiene is crucial to meeting the SDG target of halving the number of children suffering from chronic undernutrition.
     `,
    imageUrl: "/images/goal 2.png",
    targets: 8,
    targetLink: "https://sdgs.un.org/goals/goal2",
    imageClear: `${baseURL}E-WEB-Goal-02.png`,
  },
  {
    title: "Goal 3: Good Health and Well-Being",
    description:
      "Ensure healthy lives and promote well-being for all at all ages",
    overview: `
    Achieving global health goals faces significant challenges, with progress slowing since 2015 in areas like maternal mortality, premature deaths from major noncommunicable diseases, and access to essential healthcare. Inequalities persist, especially among vulnerable populations, exacerbated by the climate crisis. To meet the SDG 3 targets by 2030, substantial investment and focus are needed to address these challenges, including tackling inequality and environmental factors. Urgent action is required to protect vulnerable groups and regions with high disease burdens.
    `,
    imageUrl: "/images/goal 3.png",
    targets: 13,
    targetLink: "https://sdgs.un.org/goals/goal3",
    imageClear: `${baseURL}E-WEB-Goal-03.png`,
  },
  {
    title: "Goal 4: Quality Education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    overview: `
    SDG4 is a key enabler of most other SDGs. Unfortunately, global progress in education has not been fast enough. Only 58% of students worldwide achieved at least the minimum proficiency level in reading at the end of primary schooling in 2019. A large share of countries is moving backwards in learning outcomes at the end of lower secondary school. Improvement in upper secondary completion rate has slowed since 2015. Some regions, including sub-Saharan Africa, are facing teacher shortages, high student-teacher ratios, and inadequate training and lack of professional development opportunities for teachers. Accelerating progress towards SDG 4 should be prioritized as it will have a catalytic impact on achieving the overall 2030 Agenda.
    `,
    imageUrl: "/images/goal 4.png",
    targets: 10,
    targetLink: "https://sdgs.un.org/goals/goal4",
    imageClear: `${baseURL}E-WEB-Goal-04.png`,
  },
  {
    title: "Goal 5: Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    overview: `
    Progress towards gender equality is clearly off track. Harmful practices like child marriage and female genital mutilation are decreasing, but not fast enough to keep pace with population growth. Gender parity, especially in women's participation in public life and managerial roles, remains distant. At the current rate, achieving gender parity in managerial positions will take 176 years. Many women still lack control over their sexual and reproductive health, and violence against women persists. Urgent action is needed to challenge biased social norms, eliminate harmful practices, and change discriminatory laws. Increasing women's leadership roles and investments in gender equality are crucial at national, regional, and global levels.
    `,
    imageUrl: "/images/goal 5.png",
    targets: 9,
    targetLink: "https://sdgs.un.org/goals/goal5",
    imageClear: `${baseURL}E-WEB-Goal-05.png`,
  },
  {
    title: "Goal 6: Clean Water and Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all",
    overview: `
        Water is essential for life, yet billions lack access to safe drinking water and sanitation. In 2020, 2 billion people lacked safely managed drinking water services, and 3.6 billion lacked safely managed sanitation services. Climate change exacerbates water scarcity, affecting food security and health. Sustainable water management is crucial for achieving SDG 6 and other SDGs. Urgent action is needed to improve water quality, reduce pollution, and protect ecosystems.
        `,
    imageUrl: "/images/goal 6.png",
    targets: 8,
    targetLink: "https://sdgs.un.org/goals/goal6",
     imageClear: `${baseURL}E-WEB-Goal-06.png`
  },
  {
    title: "Goal 7: Affordable and Clean Energy",
    description:
      "Ensure access to affordable, reliable, sustainable and modern energy for all",
    overview: `
            Energy is a key driver of sustainable development, but progress towards SDG 7 is slow. In 2021, 759 million people lacked access to electricity, and 2.4 billion relied on polluting fuels for cooking. The COVID-19 pandemic disrupted energy access and increased reliance on fossil fuels. To achieve SDG 7, investments in renewable energy and energy efficiency are crucial. Urgent action is needed to ensure universal access to affordable, reliable, and sustainable energy.
            `,
    imageUrl: "/images/goal 7.png",
    targets: 5,
    targetLink: "https://sdgs.un.org/goals/goal7",
     imageClear: `${baseURL}E-WEB-Goal-07.png`
  },
  {
    title: "Goal 8: Decent Work and Economic Growth",
    description:
      "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
    overview: `
            The COVID-19 pandemic has had a profound impact on global economic growth and employment. In 2020, the global economy contracted by 3.1%, leading to widespread job losses and increased poverty. While some recovery occurred in 2021, many countries still face high unemployment rates and informal work. To achieve SDG 8, it is crucial to promote inclusive economic growth, decent work, and sustainable practices. Urgent action is needed to address inequalities and ensure that all individuals have access to quality jobs.
            `,
    imageUrl: "/images/goal 8.png",
    targets: 12,
    targetLink: "https://sdgs.un.org/goals/goal8",
     imageClear: `${baseURL}E-WEB-Goal-08.png`
  },
  {
    title: "Goal 9: Industry, Innovation, and Infrastructure",
    description:
      "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    overview: `
                Sustainable industrialization is crucial for economic growth and job creation. However, many countries face challenges in building resilient infrastructure and promoting innovation. In 2020, global manufacturing value added declined by 6.4% due to the pandemic. To achieve SDG 9, it is essential to invest in sustainable infrastructure, promote innovation, and support small-scale industries. Urgent action is needed to enhance access to technology and foster inclusive industrialization.
                `,
    imageUrl: "/images/goal 9.png",
    targets: 8,
    targetLink: "https://sdgs.un.org/goals/goal9",
     imageClear: `${baseURL}E-WEB-Goal-09.png`
  },
  {
    title: "Goal 10: Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    overview: `
                Inequality remains a significant challenge globally, with disparities in income, education, and access to resources. The COVID-19 pandemic has exacerbated existing inequalities, particularly for marginalized groups. To achieve SDG 10, it is crucial to promote inclusive policies that address the root causes of inequality. Urgent action is needed to ensure equal opportunities and reduce disparities within and among countries.
                `,
    imageUrl: "/images/goal 10.png",
    targets: 10,
    targetLink: "https://sdgs.un.org/goals/goal10",
     imageClear: `${baseURL}E-WEB-Goal-10.png`
  },
  {
    title: "Goal 11: Sustainable Cities and Communities",
    description:
      "Make cities and human settlements inclusive, safe, resilient and sustainable",
    overview: `
      Urbanization is accelerating, with more than half the world's population living in cities. However, rapid urban growth often leads to inadequate housing, pollution, and limited access to basic services. In 2022, over 1 billion people lived in slums or informal settlements. SDG 11 calls for inclusive, safe, resilient, and sustainable urban development. Enhancing public transportation, planning urban spaces efficiently, and improving disaster resilience are key to achieving this goal.
    `,
    imageUrl: "/images/goal 11.png",
    targets: 10,
    targetLink: "https://sdgs.un.org/goals/goal11",
    imageClear: `${baseURL}E-WEB-Goal-11.png`
  },
  {
    title: "Goal 12: Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns",
    overview: `
      The global material footprint continues to rise, indicating unsustainable patterns of consumption and production. In 2022, global e-waste reached a record 59.4 million metric tonnes, with only a fraction being recycled. Achieving SDG 12 requires systemic shifts toward sustainability, efficient resource use, waste reduction, and responsible supply chains. Promoting sustainable lifestyles and corporate responsibility is also essential to reducing the ecological footprint.
    `,
    imageUrl: "/images/goal 12.png",
    targets: 11,
    targetLink: "https://sdgs.un.org/goals/goal12",
    imageClear: `${baseURL}E-WEB-Goal-12.png`
  },
  {
    title: "Goal 13: Climate Action",
    description: "Take urgent action to combat climate change and its impacts",
    overview: `
      Climate change continues to threaten global ecosystems and human well-being. In recent years, climate-related disasters have intensified, affecting millions. Current national commitments are insufficient to limit global warming to 1.5°C. Achieving SDG 13 requires urgent efforts to reduce greenhouse gas emissions, invest in climate resilience, and support developing countries through climate finance and technology transfer.
    `,
    imageUrl: "/images/goal 13.png",
    targets: 5,
    targetLink: "https://sdgs.un.org/goals/goal13",
    imageClear: `${baseURL}E-WEB-Goal-13.png`
  },
  {
    title: "Goal 14: Life Below Water",
    description:
      "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
    overview: `
      Oceans cover over 70% of the planet and are vital for life on Earth. However, overfishing, pollution, and acidification threaten marine ecosystems. Plastic waste is a growing concern, with millions of tons entering oceans yearly. SDG 14 focuses on reducing marine pollution, protecting marine biodiversity, and ensuring sustainable fisheries. Global cooperation is needed to protect and restore ocean health.
    `,
    imageUrl: "/images/goal 14.png",
    targets: 10,
    targetLink: "https://sdgs.un.org/goals/goal14",
    imageClear: `${baseURL}E-WEB-Goal-14.png`
  },
  {
    title: "Goal 15: Life on Land",
    description:
      "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
    overview: `
      Terrestrial ecosystems are under pressure due to deforestation, land degradation, and biodiversity loss. Between 2015 and 2019, global forest area declined by 1.2%. Biodiversity continues to decline at alarming rates. Achieving SDG 15 requires urgent efforts to protect natural habitats, halt species extinction, and restore degraded lands. Sustainable land management is essential for food security, livelihoods, and climate regulation.
    `,
    imageUrl: "/images/goal 15.png",
    targets: 12,
    targetLink: "https://sdgs.un.org/goals/goal15",
    imageClear: `${baseURL}E-WEB-Goal-15.png`
  },
  {
    title: "Goal 16: Peace, Justice and Strong Institutions",
    description:
      "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
    overview: `
      Conflict, insecurity, weak institutions, and limited access to justice remain major obstacles to sustainable development. In 2022, millions were displaced due to violence and armed conflict. Corruption, lack of transparency, and weak rule of law undermine trust in public institutions. Achieving SDG 16 requires strengthening governance, promoting human rights, and ensuring access to justice for all.
    `,
    imageUrl: "/images/goal 16.png",
    targets: 12,
    targetLink: "https://sdgs.un.org/goals/goal16",
    imageClear: `${baseURL}E-WEB-Goal-16.png`
  },
  {
    title: "Goal 17: Partnership for the Goals",
    description:
      "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development",
    overview: `
      SDG 17 emphasizes the importance of global partnerships to achieve the 2030 Agenda. Challenges such as financing, capacity-building, trade, and technology transfer must be addressed. In 2022, official development assistance (ODA) reached $204 billion, but gaps remain. Strengthening multilateral cooperation, supporting developing countries, and aligning private sector actions with SDGs are vital for implementation.
    `,
    imageUrl: "/images/goal 17.png",
    targets: 19,
    targetLink: "https://sdgs.un.org/goals/goal17",
    imageClear: `${baseURL}E-WEB-Goal-17.png`
  },
];
