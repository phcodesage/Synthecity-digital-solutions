import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import Image from 'next/image'

export default function Home() {
  // Check if we're in production
  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F9F4F4]">
        <div className="text-center px-4">
          <h1 className="text-[48px] font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent">
              Coming Soon!
            </span>
          </h1>
          <p className="text-[#444444] text-[22px] font-medium font-inter max-w-[600px]">
            We are working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </main>
    )
  }

  // Development view with all components
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* VA and Web Development Section */}
      <section className="relative -mt-16 lg:-mt-32 py-12 lg:py-20">
        {/* Wave Background */}
        <div className="absolute inset-0 -top-16 z-10">
          <Image
            src="/wave-bg.png"
            alt="Background wave"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-center mb-8 lg:mb-16 max-w-[792px] mx-auto h-[100px] lg:h-[175px] flex items-center justify-center">
            <span className="text-[32px] lg:text-[48px] whitespace-normal lg:whitespace-nowrap">
              <span className="text-[#6953D3]">VA</span> and <span className="text-[#6953D3]">Web Development</span> Solutions
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* VA Services Card */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/va-services.png"
                alt="Virtual Assistant Services"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Web Development Card */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/web-dev.png"
                alt="Web Development Services"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />
    </main>
  )
}
