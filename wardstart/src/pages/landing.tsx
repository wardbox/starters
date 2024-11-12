import React from "react"
import { MotionDiv, fadeIn, fadeInUp, staggerContainer, listItemVariant, MotionLi } from "../components/ui/motion"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { CodeBlock } from "../components/ui/code-block"
import { 
  FolderSimple, 
  Lightning, 
  Wrench, 
  Books, 
  RocketLaunch,
  ArrowBendUpLeft
} from "@phosphor-icons/react"

const ListSection = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <MotionDiv variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
    <div className="flex items-center gap-3 mb-8">
      <Icon size={20} weight="bold" className="text-brand-accent" />
      <MotionDiv variants={fadeInUp} className="text-2xl font-medium tracking-tight">
        {title}
      </MotionDiv>
    </div>
    <ul className="space-y-4 text-foreground/90 text-lg">
      {items.map((item, i) => (
        <MotionLi key={i} variants={listItemVariant}>
          {item}
        </MotionLi>
      ))}
    </ul>
  </MotionDiv>
)

export default function Landing() {
  return (
    <MotionDiv
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex flex-col space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <MotionDiv
        variants={fadeIn}
        className="space-y-8"
      >
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight flex gap-4">
          {import.meta.env.REACT_APP_NAME}
          <span className="text-base font-light text-muted-foreground tracking-normal -rotate-6">
            <ArrowBendUpLeft className="inline-block mr-1" size={16} weight="bold" />
            Customize this title in <code>.env.client</code>!
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl text-foreground/90 max-w-2xl font-extralight leading-relaxed">
          Wasp template with sensible defaults
        </p>
      </MotionDiv>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <div className="lg:col-span-2 space-y-16">
          {/* Quick Start */}
          <MotionDiv variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-4">
                  <RocketLaunch size={48} weight="bold" className="text-brand-primary" />
                  <CardTitle className="text-5xl font-medium tracking-tight">
                    Quick Start
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="">
                <div className="flex flex-col gap-12 text-lg">
                  <div className="space-y-4">
                  <p className="font-medium">1. Set your app name in <code>.env.client</code></p>
                  <CodeBlock
                    code={`REACT_APP_NAME="App Name"`}
                    variant="compact"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="font-medium">2. Start developing:</p>
                    <CodeBlock 
                    code={`wasp db start
wasp db migrate-dev
wasp start`}
                      variant="compact"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground border-t pt-4 mt-4">
                    <p>💡 Tip: After installing new shadcn components, run <code>npm run fix-shadcn</code> to fix import paths</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
          {/* Core Features */}
          <div className="space-y-16">
            <MotionDiv variants={fadeIn}>
              <h2 className="text-5xl font-medium tracking-tight mb-16">Everything you need</h2>
            </MotionDiv>
            <MotionDiv
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-12"
            >
              <MotionDiv variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-3">
                      <FolderSimple size={24} className="text-brand-primary" />
                      <CardTitle className="text-3xl font-medium tracking-tight">
                        Project Structure
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`src/
├── auth/                 # Auth UI and configuration
├── components/
│   ├── ui/              # shadcn/ui + custom common components
├── lib/                 # Utility functions
│   └── utils.ts
├── pages/              # Pages that you route to
│   ├── landing.tsx
│   ├── profile.tsx
│   └── example/
│       └── example.tsx
│       └── operations.ts # Operations for this page
└── Root.tsx           # App root component with nav and footer`}
                      variant="compact"
                    />
                  </CardContent>
                </Card>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>

        {/* Right column - Tools & Resources */}
        <div className="space-y-16">
          <div className="space-y-24">
            <ListSection 
              icon={Lightning}
              title="Features"
              items={[
                "Wired up for shadcn/ui",
                "Theme switcher",
                "Mobile first design",
                "Common motion components",
                "Toaster included"
              ]}
            />
            
            <ListSection 
              icon={Wrench}
              title="Development Tools"
              items={[
                "shadcn/ui",
                "Framer Motion",
                "Tailwind CSS"
              ]}
            />
            <MotionDiv variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <Books size={20} weight="bold" className="text-brand-accent" />
                <MotionDiv variants={fadeInUp} className="text-2xl font-medium tracking-tight">
                  Resources
                </MotionDiv>
              </div>
              <ul className="space-y-4">
                {[
                  { href: "https://wasp-lang.dev/docs", text: "Wasp →" },
                  { href: "https://ui.shadcn.com/docs", text: "shadcn/ui →" },
                  { href: "https://tailwindcss.com/docs/installation", text: "Tailwind CSS →" },
                  { href: "https://www.framer.com/motion/", text: "Framer Motion →" }
                ].map((link, i) => (
                  <MotionLi key={i} variants={listItemVariant}>
                    <a href={link.href} target="_blank" className="text-lg text-foreground/90 hover:text-foreground transition-colors">
                      {link.text}
                    </a>
                  </MotionLi>
                ))}
              </ul>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
