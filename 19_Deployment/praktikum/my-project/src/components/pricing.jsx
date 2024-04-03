/* eslint-disable react/no-unknown-property */
export default function Price() {
    return (
        <section class="px-56 mb-9">
            <h1 class="text-7xl font-extrabold text-blue-400 opacity-30">
                Price
            </h1>
            <div class="container mx-auto">
                <div class="flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
                    <div class="flex-1 border-gray-300 border-2 rounded-lg p-6 text-center space-y-4">
                        <h3 class="text-2xl font-heading font-bold">Demo</h3>
                        <p>$0/Month</p>
                        <ul class="space-y-2">
                            <li>Lasts For 2 Days</li>
                            <li>Free Sample Session</li>
                            <li>Help Yourself All Month Long</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">GET NOW</button>
                    </div>
                    <div class="flex-1 border-gray-300 border-2 rounded-lg p-6 text-center space-y-4 mt-8 sm:mt-0">
                        <h3 class="text-2xl font-heading font-bold">Personal</h3>
                        <p>$49/Month</p>
                        <ul class="space-y-2">
                            <li>Help 2+ People All Month Long</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">GET NOW</button>
                    </div>
                    <div class="flex-1 border-gray-300 border-2 rounded-lg p-6 text-center space-y-4 mt-8 sm:mt-0">
                        <h3 class="text-2xl font-heading font-bold">Household</h3>
                        <p>$79/Month</p>
                        <ul class="space-y-2">
                            <li>Help 2+ People All Month Long</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">GET NOW</button>
                    </div>
                </div>
            </div>
        </section>

    )
}