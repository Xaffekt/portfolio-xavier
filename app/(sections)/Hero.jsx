
export default function Hero() {
    return (
        <section class="bg-white dark:bg-gray-900" id="home">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-dark-text">Xavier Minnamon</h1>
                    <p class="max-w-2xl mb-6 font-light text-light-text lg:mb-8 md:text-lg lg:text-xl dark:text-dark-text">Frontend Devloper dedicated to getting things done</p>
                    <a href="#contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-light-text border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-light-accent dark:bg-light-background dark:text-light-text dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-dark-accent">
                        Get in touch
                    </a>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="" alt="portrait of Xavier Minnamon"/>
                </div>
            </div>
        </section>
    )
}