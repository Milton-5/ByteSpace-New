import { useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";
import {
  Search,
  Star,
  CheckCircle2,
  PenTool,
  Smartphone,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  Waves,
  Zap,
  Orbit,
  Globe2,
  Circle,
} from "lucide-react";

const LIME = "bg-[#d2ff00] text-neutral-900 hover:bg-[#c2ee00]";
const BLUE_BG = "bg-[#0b34e6]";
const BLUE_TXT = "text-[#0b34e6]";
const H = "font-[family-name:var(--font-poppins)]";
const img = (n: string) => {
  if (!n) return "";

  const cleaned = n
    .replace(/^(?:\.\/)?(?:public\/)?(?:images\/)?/, "")
    .replace(/^\/+/, "");

  return `/${cleaned}`;
};

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  { src: "1.jpg", title: "Learn Figma from Basic", cats: ["UI/UX Design", "Graphic Design"] },
  { src: "2.png", title: "Build Digital Asset", cats: ["Digital Illustration", "Graphic Design"] },
  { src: "4.jpg", title: "the Power of Big Data", cats: ["Data Science", "Web Development"] },
  { src: "5.jpg", title: "Balancing Productivity and Life", cats: ["Productivity"] },
  { src: "6.jpg", title: "Mastering Money Management", cats: ["Freelance & Entrepreneurship", "Productivity"] },
  { src: "7.jpg", title: "From Idea to Startup Success", cats: ["Freelance & Entrepreneurship", "Marketing"] },
];

const paths = [
  { label: "Design", Icon: PenTool },
  { label: "Development", Icon: Smartphone },
  { label: "IT & Software", Icon: Laptop },
  { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

const testimonials = [
  {
    src: "9.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    src: "10.png",
    name: "James L.",
    role: "Lifelong Learner",
    text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    src: "11.png",
    name: "Alex B.",
    role: "Inspired Creator",
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is invaluable. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const footerCols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

function Button({ children, className = "", type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center transition-colors disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full border border-neutral-200 bg-white px-3 py-2 outline-none ring-0 placeholder:text-neutral-400 ${className}`}
      {...props}
    />
  );
}

function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-2 py-1 ${className}`}>{children}</span>;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-col rounded-2xl bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function Progress({ value, className = "" }: { value: number; className?: string }) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`overflow-hidden rounded-full bg-neutral-200 ${className}`}>
      <div className="h-full rounded-full bg-[#d2ff00]" style={{ width: `${safeValue}%` }} />
    </div>
  );
}

function Squiggle({ color = "#d2ff00", className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" stroke={color} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 15 L80 35 L20 55 L80 75 L20 95 L70 108" />
    </svg>
  );
}

function Cone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <polygon points="50,12 90,86 10,86" fill="currentColor" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
    </svg>
  );
}

function Donut({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`rounded-full border-[30px] border-white shadow-[0_20px_40px_rgba(0,0,0,.25)] ${className}`} />;
}

function AvatarStack({ ids, size = "w-7", extra = "2K+" }: { ids: string[]; size?: string; extra?: string }) {
  return (
    <div className="flex items-center -space-x-1.5">
      {ids.map((id) => (
        <div key={id} className="overflow-hidden rounded-full bg-neutral-200">
          <img src={img(id)} alt="" className={`${size} object-cover`} />
        </div>
      ))}
      <div className={`grid place-items-center rounded-full border-2 border-white bg-[#d2ff00] text-[10px] font-semibold text-neutral-900 ${size}`}>
        <span>{extra}</span>
      </div>
    </div>
  );
}

function Rating({ value = "4.5", reviews }: { value?: string; reviews?: string }) {
  return (
    <span className="flex items-center gap-1 text-xs text-neutral-500">
      {value}
      {reviews && <span>({reviews})</span>}
      <Star className="size-3.5 fill-yellow-300 text-yellow-300" />
    </span>
  );
}

function FloatCard({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`absolute rounded-xl bg-white p-3 shadow-xl ${className}`}>{children}</div>;
}

const gradientBg =
  "bg-[radial-gradient(40%_50%_at_10%_20%,#e1ff3d_0%,transparent_70%),radial-gradient(45%_55%_at_95%_60%,#c9d4ff_0%,transparent_70%),#fafafa]";

export default function App() {
  const [active, setActive] = useState("Featured");
  const visible = active === "Featured" ? courses : courses.filter((course) => course.cats.includes(active));

  return (
    <main className="overflow-x-hidden bg-white font-[family-name:var(--font-outfit)] text-neutral-900">
      <section className={`relative ${BLUE_BG} text-white`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.09) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-20 mx-auto max-w-6xl px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex w-1/3 justify-start">
              <a
                href="#top"
                className="flex items-center gap-2 text-[24px] font-bold leading-none tracking-0 text-white transition duration-200 hover:-translate-y-0.5 hover:text-[#d2ff00]"
                style={{ fontFamily: '"Clash Display", "Segoe UI", sans-serif' }}
              >
                <span className="grid size-7 place-items-center rounded-md bg-[#d2ff00] text-sm font-bold text-[#0b34e6]">b</span>
                ByteSpace
              </a>
            </div>

            <nav className="hidden flex-1 items-center justify-center gap-8 text-sm md:flex">
              <a href="#top" className="font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:text-[#d2ff00]">Home</a>
              <a href="#courses" className="font-medium text-white/80 transition duration-200 hover:-translate-y-0.5 hover:text-white">Courses</a>
              <a href="#creators" className="font-medium text-white/80 transition duration-200 hover:-translate-y-0.5 hover:text-white">Creators</a>
            </nav>

            <div className="flex w-1/3 justify-end">
              <Button className="bg-tranparent px-4 py-2 text-sm font-medium text-white">Join Us</Button>
              <Button className="bg-tranparent px-4 py-2 text-sm font-medium text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>

        <Squiggle className="absolute -left-6 top-24 w-24 rotate-12" />
        <Squiggle color="#fff" className="absolute left-[18%] top-40 hidden w-12 md:block" />
        <Cone className="absolute right-[24%] top-40 hidden w-24 rotate-12 text-white md:block" />
        <div className="absolute -right-4 top-20 hidden h-40 w-24 rounded-2xl bg-[#d2ff00] md:block" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center">
          <h1 className={`${H} text-4xl font-semibold md:text-6xl`}>Get Access to Hundreds Courses Available</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form onSubmit={(event) => event.preventDefault()} className="mx-auto mt-8 flex max-w-md items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
              <Input placeholder="Course, topic, creator" className="h-10 rounded-full border-0 bg-white pl-9 text-neutral-900" />
            </div>
            <Button type="submit" className={`h-12 w-25 rounded-full ${LIME}`}>Search</Button>
          </form>

          <div className="relative mx-auto mt-10 h-[430px] w-full max-w-[760px]">
            <div className="absolute bottom-0 left-1/2 h-[400px] w-[760px] max-w-[110vw] -translate-x-1/2 rounded-t-full bg-[#d2ff00]" />
            <div className="absolute bottom-0 left-1/2 h-[100px] w-[420px] max-w-[110vw] -translate-x-1/2 rounded-t-full bg-[#0000ff]" />
            

            <img src={img("2.png")} alt="Smiling student with laptop" className="absolute bottom-0 left-1/2 z-10 w-[508px] -translate-x-1/2" />
            <Donut className="absolute -left-25 bottom-10 z-20 hidden size-36 md:block" />
            <Squiggle color="#fff" className="absolute -right-20 bottom-16 z-20 hidden w-28 md:block" />

            <FloatCard className="left-28 top-16 text-left text-neutral-900">
              <p className="text-sm font-semibold">UI/UX Design</p>
              <p className="text-[11px] text-neutral-500">200 Courses • 1000+ Students</p>
            </FloatCard>

            <FloatCard className="right-22 top-24 z-20 w-44 text-left text-neutral-900">
              <p className="text-[11px] text-neutral-500">Learning Progress</p>
              <p className={`${H} text-3xl  font-semibold`}>55%</p>
              <Progress value={55} className="mt-2 h-1.5" />
            </FloatCard>

            <FloatCard className="bottom-28 left-19 z-20 bg-white text-left text-neutral-900">
              <p className="text-xs font-semibold">Happy Students</p>
              <Rating reviews="240" />
              <div className="mt-1"><AvatarStack ids={["12.png", "13.png", "14.png", "15.png", "16.png","17.png", "18.png"]} size="w-6" /></div>
            </FloatCard>
          </div>
        </div>
      </section>

      

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <a className={`${H} flex items-center gap-2 text-xl font-semibold`} href="#">
              <span className="grid size-7 place-items-center rounded-md bg-[#d2ff00] text-sm font-bold text-[#0b34e6]">b</span>
              ByteSpace
            </a>
            <p className="mt-3 text-xs text-neutral-500">Stay up to date with our latest features and releases by joining our newsletter.</p>
            <form onSubmit={(event) => event.preventDefault()} className="mt-6 flex max-w-sm gap-2">
              <Input type="email" placeholder="Enter your email" className="h-10 rounded-full" />
              <Button type="submit" className={`h-10 rounded-full ${LIME}`}>Subscribe</Button>
            </form>
            <p className="mt-3 max-w-xs text-[10px] text-neutral-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 text-xs text-neutral-500">
            {footerCols.map((column, index) => (
              <ul key={index} className="space-y-3">
                {column.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-neutral-900">{item}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 border-t border-neutral-200 px-6 py-5 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
