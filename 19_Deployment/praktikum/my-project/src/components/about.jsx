/* eslint-disable react/no-unknown-property */
export default function About() {
    return (
        <div class="px-56">
            <div class="title">
                <h1 class="text-7xl font-extrabold text-blue-400 opacity-30">About</h1>
                <h3 class="text-xl font-bold">MyErp is...</h3>
            </div>
            <div class="text-about flex justify-between items-center">
                <div className="deskripsi-about w-6/12">
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nemo aut accusamus optio a quibusdam? Cumque pariatur non praesentium eligendi iste! Qui voluptatibus, maxime expedita aliquid tempora modi sed fugiat, voluptate cupiditate dolores labore obcaecati nemo suscipit quasi voluptatum facilis minus. Quidem rerum sit provident eligendi alias sunt amet architecto.</p>
                    <button class="hover:bg-gray-700 text-white font-bold mt-3 py-2 px-4 border bg-slate-800 rounded-xl">BOOK A DEMO</button>
                </div>
                <div class="img-about">
                    <img src="src/assets/diagram-about.svg" alt="" class="w-full" />
                </div>
            </div>
        </div>
    )
}