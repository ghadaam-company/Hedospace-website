import {
  multi,
  ui,
  song,
  academic,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  saberi,
  sahand,
  taha,
  ghadaamir,
  ghadaam,
  hedospace,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "درباره بازی",
  },
  {
    id: "work",
    title: "مستندات",
  },
  {
    id: "contact",
    title: "تماس با ما و ارسال تیکت",
  },
];

const services = [
  {
    title: "پرسش سوالات علمی در حین اجرا بازی",
    icon: academic,
  },
  {
    title: "بازی دو نفره و گروهی  (به زودی در جدید ترین ویژگی)",
    icon: multi,
  },
  {
    title: "رابطه کاربری گرافیکی عالی",
    icon: ui,
  },
  {
    title: "صدا گذاری عالی",
    icon: song,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "سهند محمدرضایی",
    company_name: "sahand-mohammadrezaii",
    icon: sahand,
    iconBg: "#383E56",
    date: "1402/10/06",
    points: [
      "مدیریت سامانه",
      "پشتیبانی وب سایت",
      "تنظیم نمای گرافیکی و تولید محتوا و اجرا و سازماندهی زیر ساخت هیدوسپیس و همچینین طراحی بروزرسانی بازی",
      "مدیر تیم قادم",
    ],
  },
  {
    title: "اسماعیل صابری",
    company_name: "ismael-saberi",
    icon: saberi,
    iconBg: "#E6DEDD",
    date: "1402/10/06",
    points: [
      "طراحی بک اند",
      "پشتیبانی بک اند",
      "استاد راهنما",
      "مدیریت هسته اصلی بازی",
    ],
  },
  {
    title: "طاها فام علی پور",
    company_name: "taha-famalipoor",
    icon: taha,
    iconBg: "#383E56",
    date: "1402/10/06",
    points: [
      "طراحی بک اند",
      "پشتیبانی بک اند",
      "پشنیبانی وب سایت",
      "صدا گذاری موثر بازی",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "من فکر می کردم که بهترین بازی ها خارجی هستن با بازی کردن این بازی فهمیدم ایرانم بازی های عالی و زیبا می سازه",
    name: "نیما ملک پور",
    company: "کاربر فعال",
    image: "https://sahand.storage.iran.liara.space/hedospace/picture/3641473.png",
  },
  {
    testimonial:
      "بهترین بازی ایرانی هست که من خیلی دوست دارم منهای باگ هایی که داره البته تمامی بازی ها در ابتدا کار و در نسخه بتا ایراد دارد ولی در نسخه رسمی بدون ایراد می شود",
    name: "غلامرضا محمدرضایی",
    company: "کاربر فعال",
    image: "https://sahand.storage.iran.liara.space/hedospace/picture/3641473.png",
  },
  {
    testimonial:
      "اینترنت کمی نسبت به بازی استفاده می کنه و همچنین نسبت به محتوا حجم کمی داره و واقعا این برای ک بازی خیلی می تونی عالی باشه",
    name: "پریسا رودی",
    company: "کاربر فعال",
    image: "https://sahand.storage.iran.liara.space/hedospace/picture/3641473.png",
  },
];

const projects = [
  {
    name: "ghadaam",
    description:
      "تیم برنامه نویسی چند منظوره ساخت وب سایت و خلق امکانات ویژه",
    tags: [
      {
        name: "Multipurpose",
        color: "blue-text-gradient",
      },
      {
        name: "website",
        color: "green-text-gradient",
      },
      {
        name: "ghadaam",
        color: "pink-text-gradient",
      },
    ],
    image: ghadaam,
    source_code_link: "https://github.com/sahandmohammadrehzaii",
  },
  {
    name: "ghadaam-ir",
    description:
      "هوش مصنوعی قادم آی آر بزرک ترین هوش مصنوعی ایران در تمامی زمینه ها",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "iran",
        color: "pink-text-gradient",
      },
    ],
    image: ghadaamir,
    source_code_link: "https://github.com/sahandmohammadrehzaii",
  },
  {
    name: "hedospace",
    description:
      "وب سایت رسمی بازی هیدوسپیس و تنها هیدوسپیس (SP) سایت فروش",
    tags: [
      {
        name: "hedospace",
        color: "blue-text-gradient",
      },
      {
        name: "Article",
        color: "green-text-gradient",
      },
      {
        name: "Important tasks",
        color: "pink-text-gradient",
      },
    ],
    image: hedospace,
    source_code_link: "https://github.com/sahandmohammadrehzaii",
  },
];

export { services, technologies, experiences, testimonials, projects };
