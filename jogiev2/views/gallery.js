// Standard Gallery View Component

export function GalleryView() {
    return `
    <div class="w-full animate-fade-up">
        <header class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-blue-100 mb-4 inline-block relative">
                Captured Moments
                <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full"></div>
            </h2>
            <p class="text-blue-50 max-w-xl mx-auto mt-6">A collection of beautiful memories and snapshots.</p>
        </header>

        <!-- Masonry-style CSS Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            
            <!-- Image Card 1 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500 delay-100" style="opacity:0; animation: fadeUp 0.8s forwards 100ms;">
                <div class="absolute inset-0 bg-blue-200/50 animate-pulse -z-10"></div>
                <!-- We use placeholder images since the images folder was empty -->
                <img src="./images/1.jpg" 
                     alt="Memory 1" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 2 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-200" style="opacity:0; animation: fadeUp 0.8s forwards 200ms;">
                <div class="absolute inset-0 bg-blue-300/50 animate-pulse -z-10"></div>
                <img src="./images/2.jpg" 
                     alt="Memory 2" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 3 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 delay-300" style="opacity:0; animation: fadeUp 0.8s forwards 300ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/3.jpg" 
                     alt="Memory 3" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

             <!-- Image Card 4 -->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/4.jpg" 
                     alt="Memory 4" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 5 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:col-span-2 md:col-span-1 shadow-sm hover:shadow-xl transition-all duration-500 delay-500" style="opacity:0; animation: fadeUp 0.8s forwards 500ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/5.jpg" 
                     alt="Memory 5" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 6-->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/6.jpg" 
                     alt="Memory 6" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>
            
            <!-- Image Card 7 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500 delay-100" style="opacity:0; animation: fadeUp 0.8s forwards 100ms;">
                <div class="absolute inset-0 bg-blue-200/50 animate-pulse -z-10"></div>
                <!-- We use placeholder images since the images folder was empty -->
                <img src="./images/7.jpg" 
                     alt="Memory 7" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 8 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-200" style="opacity:0; animation: fadeUp 0.8s forwards 200ms;">
                <div class="absolute inset-0 bg-blue-300/50 animate-pulse -z-10"></div>
                <img src="./images/8.jpg" 
                     alt="Memory 8" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 9 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 delay-300" style="opacity:0; animation: fadeUp 0.8s forwards 300ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/9.jpg" 
                     alt="Memory 9" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

             <!-- Image Card 10 -->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/10.jpg" 
                     alt="Memory 10" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 11 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:col-span-2 md:col-span-1 shadow-sm hover:shadow-xl transition-all duration-500 delay-500" style="opacity:0; animation: fadeUp 0.8s forwards 500ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/11.jpg" 
                     alt="Memory 11" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 12-->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/12.jpg" 
                     alt="Memory 12" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 13 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500 delay-100" style="opacity:0; animation: fadeUp 0.8s forwards 100ms;">
                <div class="absolute inset-0 bg-blue-200/50 animate-pulse -z-10"></div>
                <!-- We use placeholder images since the images folder was empty -->
                <img src="./images/13.jpg" 
                     alt="Memory 13" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 14 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-200" style="opacity:0; animation: fadeUp 0.8s forwards 200ms;">
                <div class="absolute inset-0 bg-blue-300/50 animate-pulse -z-10"></div>
                <img src="./images/14.jpg" 
                     alt="Memory 14" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 15 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 delay-300" style="opacity:0; animation: fadeUp 0.8s forwards 300ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/15.jpg" 
                     alt="Memory 15" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

             <!-- Image Card 16 -->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/16.jpg" 
                     alt="Memory 16" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 17 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:col-span-2 md:col-span-1 shadow-sm hover:shadow-xl transition-all duration-500 delay-500" style="opacity:0; animation: fadeUp 0.8s forwards 500ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/17.jpg" 
                     alt="Memory 17" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 18-->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/18.jpg" 
                     alt="Memory 18" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 19 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500 delay-100" style="opacity:0; animation: fadeUp 0.8s forwards 100ms;">
                <div class="absolute inset-0 bg-blue-200/50 animate-pulse -z-10"></div>
                <!-- We use placeholder images since the images folder was empty -->
                <img src="./images/19.jpg" 
                     alt="Memory 19" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 20 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-200" style="opacity:0; animation: fadeUp 0.8s forwards 200ms;">
                <div class="absolute inset-0 bg-blue-300/50 animate-pulse -z-10"></div>
                <img src="./images/20.jpg" 
                     alt="Memory 20" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 21 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 delay-300" style="opacity:0; animation: fadeUp 0.8s forwards 300ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/21.jpg" 
                     alt="Memory 21" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

             <!-- Image Card 22 -->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/22.jpg" 
                     alt="Memory 22" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 23 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:col-span-2 md:col-span-1 shadow-sm hover:shadow-xl transition-all duration-500 delay-500" style="opacity:0; animation: fadeUp 0.8s forwards 500ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/23.jpg" 
                     alt="Memory 23" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 24-->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/24.jpg" 
                     alt="Memory 24" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 25 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:col-span-2 md:col-span-1 shadow-sm hover:shadow-xl transition-all duration-500 delay-500" style="opacity:0; animation: fadeUp 0.8s forwards 500ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/25.jpg" 
                     alt="Memory 25" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>
            
        </div>
        
        <!-- Bottom spacing for the floating nav -->
        <div class="h-24"></div>
    </div>
    `;
}
