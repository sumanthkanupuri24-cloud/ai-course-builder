import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-purple-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to CHAMP AI 🎓
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Create professional courses in minutes using the power of AI.
              Structured chapters, detailed content, and YouTube videos — all generated instantly.
            </p>
          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to CHAMP AI 🎓
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Create professional AI-powered courses in minutes, not months.
              </p>
            </div>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  )
}