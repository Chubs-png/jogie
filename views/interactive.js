// Interactive Gallery View Component

export function InteractiveView() {
    // Array of interactive love notes
    const messages = [
        {
            img: "./images/1.jpg",
            title: "1st",
            text: "Your spirit shines just as brightly as your dedication, illuminating everything you touch."
        },
        {
            img: "./images/3.jpg",
            title: "2nd",
            text: "You handle every challenge with such grace, showing strength that inspires everyone around you."
        },
        {
            img: "./images/9.jpg",
            title: "3rd",
            text: "I love how you light up when you talk about things you're passionate about."
        },
        {
            img: "./images/14.jpg",
            title: "4th",
            text: "You're so caring and always think of others before yourself. It's one of the most beautiful things about you."
        },
        {
            img: "./images/6.jpg",
            title: "5th",
            text: "Your laugh is infectious and can brighten anyone's day."
        },
        {
            img: "./images/23.jpg",
            title: "6th",
            text: "Your hard work is seen, and your caring nature is deeply cherished by those lucky enough to know you."
        }   
    ];

    let cardsHtml = messages.map((msg, index) => {
        // Calculate a staggered delay for the fade up entrance animation
        const delay = (index + 1) * 100;
        
        return `
        <!-- Interactive Card -->
        <div class="interactive-card relative w-full aspect-square rounded-3xl overflow-hidden cursor-pointer delay-${delay}" style="opacity:0; animation: fadeUp 0.8s forwards ${delay}ms;">
            
            <!-- Base Image -->
            <img src="${msg.img}?q=80&w=600&auto=format&fit=crop" alt="${msg.title}" class="absolute inset-0 w-full h-full object-cover z-0">
            
            <!-- Hover Overlay -->
            <div class="card-overlay relative z-10 w-full h-full bg-blue-900/40 opacity-0 flex flex-col items-center justify-center p-6 text-center">
                <div class="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" class="text-blue-300 mx-auto mb-3"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <h3 class="text-white text-2xl font-bold mb-2">${msg.title}</h3>
                    <p class="text-blue-100 text-sm md:text-base leading-relaxed font-medium">${msg.text}</p>
                </div>
            </div>
            
            <!-- Decorative Border -->
            <div class="absolute inset-0 border-[3px] border-white/20 scale-95 rounded-[1.3rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-20"></div>
        </div>
        `;
    }).join('');

    return `
    <div class="w-full animate-fade-up flex flex-col items-center justify-center min-h-[70vh]">
        <header class="text-center mb-16 max-w-2xl delay-100" style="opacity:0; animation: fadeUp 0.8s forwards 100ms;">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-100 mb-6 font-outfit">Memory Lane</h2>
            <p class="text-blue-50 text-lg">Hover over each card to read a little message.</p>
        </header>

        <!-- Message Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            ${cardsHtml}
        </div>
        
        <!-- Bottom spacing for the floating nav -->
        <div class="h-32"></div>
    </div>
    `;
}
