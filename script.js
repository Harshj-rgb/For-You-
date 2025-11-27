// ==========================================
// 🎨 LOCAL FILES CONFIGURATION
// ==========================================
// IMPORTANT: Place all images and video in the SAME folder as this file
//
// HOW TO USE:
// 1. Rename your image files to match below (or change names below to match yours)
// 2. Place all files in the same folder as index.html, style.css, and script.js
// 3. Save this file and refresh browser (Ctrl+Shift+R)
//
// FILE NAMING EXAMPLES:
//   Love emoji background: "love-emoji.jpg"
//   Crying cat image: "crying-cat.jpg"
//   Shy emoji image: "shy-emoji.jpg"
//   Pizza image: "pizza.jpg"
//   Chaat image: "chaat.jpg"
//   Restaurant image: "restaurant.jpg"
//   Cafe image: "cafe.jpg"
//   Video file: "video.mp4"
//
// CHANGE THESE FILENAMES IF YOURS ARE DIFFERENT:
// ==========================================

const IMAGE_FILES = {
    loveEmoji: 'love-emoji.jpg',      // ← Background during greeting messages
    cryingCat: 'Crying cat.jpeg',      // ← Shown in funny rejection message
    shyEmoji: 'Shy.jpeg',        // ← Cuteness factor in rejection
    pizza: 'Pizza Cat.jpeg',               // ← Choice option 1
    chaat: 'Chaat.jpeg',               // ← Choice option 2
    restaurant: 'restaurant.jpeg',     // ← Choice option 3
    cafe: 'Cafe.jpeg'                  // ← Choice option 4
};

const VIDEO_FILE = 'Cute.mp4';       // ← Your final video

// ==========================================
// PASSWORD CONFIGURATION
// ==========================================
const CORRECT_PASSWORD = "Athira@2307"; // ← Change to your password
// ==========================================



// Animated messages configuration
const messages = [
    "Hey there! 👋",
    "I've been thinking... 🤔",
    "about something important... 💭",
    "like preparing the perfect memo... 📝",
    "or maybe... writing a song? 🎵",
    "Actually, I just want to spend time with you 💕",
    "So... what do you say? 🎀"
];

// State management
let noButtonMoves = 0;
let loadingProgress = 0;

// ==========================================
// LOCAL FILE LOADING SYSTEM
// ==========================================

function loadAllImages() {
    console.log('🖼️ Loading all local images...');
    
    // // Load background image
    // const loveEmojiBg = document.getElementById('love-emoji-bg');
    // if (loveEmojiBg) {
    //     loveEmojiBg.src = IMAGE_FILES.loveEmoji;
    //     loveEmojiBg.onerror = function() {
    //         console.error('❌ Failed to load:', IMAGE_FILES.loveEmoji);
    //         showImageError(IMAGE_FILES.loveEmoji);
    //     };
    //     loveEmojiBg.onload = function() {
    //         console.log('✅ Loaded:', IMAGE_FILES.loveEmoji);
    //     };
    // }
    
    // Load rejection images
    const cryingCatImg = document.getElementById('crying-cat-img');
    if (cryingCatImg) {
        cryingCatImg.src = IMAGE_FILES.cryingCat;
        cryingCatImg.onerror = function() {
            console.error('❌ Failed to load:', IMAGE_FILES.cryingCat);
        };
        cryingCatImg.onload = function() {
            console.log('✅ Loaded:', IMAGE_FILES.cryingCat);
        };
    }
    
    const shyEmojiImg = document.getElementById('shy-emoji-img');
    if (shyEmojiImg) {
        shyEmojiImg.src = IMAGE_FILES.shyEmoji;
        shyEmojiImg.onerror = function() {
            console.error('❌ Failed to load:', IMAGE_FILES.shyEmoji);
        };
        shyEmojiImg.onload = function() {
            console.log('✅ Loaded:', IMAGE_FILES.shyEmoji);
        };
    }
    
    // Load choice images
    const pizzaImg = document.getElementById('pizza-img');
    if (pizzaImg) {
        pizzaImg.src = IMAGE_FILES.pizza;
        pizzaImg.onerror = function() {
            console.error('❌ Failed to load:', IMAGE_FILES.pizza);
        };
        pizzaImg.onload = function() {
            console.log('✅ Loaded:', IMAGE_FILES.pizza);
        };
    }
    
    const chaatImg = document.getElementById('chaat-img');
    if (chaatImg) {
        chaatImg.src = IMAGE_FILES.chaat;
        chaatImg.onerror = function() {
            console.error('❌ Failed to load:', IMAGE_FILES.chaat);
        };
        chaatImg.onload = function() {
            console.log('✅ Loaded:', IMAGE_FILES.chaat);
        };
    }
    
    const restaurantImg = document.getElementById('restaurant-img');
    if (restaurantImg) {
        restaurantImg.src = IMAGE_FILES.restaurant;
        restaurantImg.onerror = function() {
            console.error('❌ Failed to load:', IMAGE_FILES.restaurant);
        };
        restaurantImg.onload = function() {
            console.log('✅ Loaded:', IMAGE_FILES.restaurant);
        };
    }
    
    const cafeImg = document.getElementById('cafe-img');
    if (cafeImg) {
        cafeImg.src = IMAGE_FILES.cafe;
        cafeImg.onerror = function() {
            console.error('❌ Failed to load:', IMAGE_FILES.cafe);
        };
        cafeImg.onload = function() {
            console.log('✅ Loaded:', IMAGE_FILES.cafe);
        };
    }
    
    console.log('✅ All images loaded!');
}

function showImageError(filename) {
    console.error('❌ Image not found:', filename);
    alert('❌ Image not found: ' + filename + '\n\nMake sure file exists in same folder as index.html');
}

function loadVideo() {
    console.log('🎬 Loading video:', VIDEO_FILE);
    
    const videoSource = document.getElementById('video-source');
    if (videoSource) {
        videoSource.src = VIDEO_FILE;
        blackoutVideo.load();
        
        blackoutVideo.onerror = function() {
            console.error('❌ Failed to load video:', VIDEO_FILE);
            showVideoError();
        };
        
        blackoutVideo.oncanplay = function() {
            console.log('✅ Video loaded successfully!');
        };
    }
}

function showVideoError() {
    const videoContent = document.querySelector('.video-content');
    if (videoContent) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'text-align: center; padding: 40px; color: #FF69B4;';
        errorDiv.innerHTML = `
            <h2 style="font-size: 36px; margin-bottom: 20px;">❌ Video Not Found!</h2>
            <p style="font-size: 18px; margin-bottom: 10px;">Could not find: <strong>${VIDEO_FILE}</strong></p>
            <p style="font-size: 16px; margin-bottom: 20px;">Make sure file exists in same folder as index.html</p>
            <ul style="text-align: left; display: inline-block; font-size: 16px; line-height: 1.8;">
                <li>✓ File is in same folder as index.html</li>
                <li>✓ Filename matches EXACTLY (case-sensitive)</li>
                <li>✓ File extension is .mp4 (not .MP4)</li>
                <li>✓ You refreshed browser (Ctrl+Shift+R)</li>
            </ul>
        `;
        videoContent.innerHTML = '';
        videoContent.appendChild(errorDiv);
    }
}

// Call this when page loads
window.addEventListener('load', function() {
    console.log('📂 Page loaded - initializing local files...');
    loadAllImages();
    loadVideo();
});

// ==========================================
// LOADING SCREEN LOGIC
// ==========================================
const loadingInterval = setInterval(() => {
    loadingProgress += 2;
    document.getElementById('percentage').textContent = loadingProgress + '%';
    if (loadingProgress >= 100) {
        clearInterval(loadingInterval);
        setTimeout(() => {
            switchScreen('loading-screen', 'desktop-screen');
            createFloatingHearts();
        }, 500);
    }
}, 60);

// ==========================================
// SCREEN TRANSITION UTILITY
// ==========================================
function switchScreen(from, to) {
    document.getElementById(from).classList.remove('active');
    setTimeout(() => {
        document.getElementById(to).classList.add('active');
    }, 100);
}

// ==========================================
// DESKTOP INTERACTIONS
// ==========================================
document.getElementById('file-icon').addEventListener('click', () => {
    document.getElementById('password-modal').classList.add('active');
});

document.getElementById('password-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

document.getElementById('unlock-btn').addEventListener('click', checkPassword);

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    
    if (input === CORRECT_PASSWORD) {
        document.getElementById('password-modal').classList.remove('active');
        document.getElementById('password-input').value = '';
        errorMsg.classList.remove('active');
        switchScreen('desktop-screen', 'main-screen');
        startAnimatedMessages();
    } else {
        errorMsg.classList.add('active');
        setTimeout(() => {
            errorMsg.classList.remove('active');
        }, 2000);
    }
}

// ==========================================
// ANIMATED MESSAGES
// ==========================================
function startAnimatedMessages() {
    const container = document.getElementById('messages-container');
    container.innerHTML = '';
    
    messages.forEach((msg, index) => {
        setTimeout(() => {
            const msgDiv = document.createElement('div');
            msgDiv.className = 'animated-message';
            msgDiv.textContent = msg;
            container.appendChild(msgDiv);
            
            setTimeout(() => {
                msgDiv.classList.add('show');
            }, 100);
            
            if (index === messages.length - 1) {
                setTimeout(() => {
                    switchScreen('main-screen', 'question-screen');
                }, 2000);
            }
        }, index * 1500);
    });
}

// ==========================================
// FLOATING HEARTS ANIMATION
// ==========================================
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.getElementById('question-screen').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 800);
}

// ==========================================
// DATE QUESTION INTERACTIONS
// ==========================================

// YES button handler
document.getElementById('yes-btn').addEventListener('click', function(event) {
    createSparkles(event.clientX, event.clientY);
    setTimeout(() => {
        switchScreen('question-screen', 'choice-screen');
    }, 1000);
});

// NO button evasion
document.getElementById('no-btn').addEventListener('mouseover', function() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    
    noButtonMoves++;
    if (noButtonMoves >= 3) {
        document.getElementById('escape-msg').classList.add('show');
    }
});

// ==========================================
// SPARKLE ANIMATION EFFECT
// ==========================================
function createSparkles(x, y) {
    const sparkles = ['✨', '💖', '⭐', '💫', '🌟'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.left = (x + (Math.random() - 0.5) * 200) + 'px';
            sparkle.style.top = (y + (Math.random() - 0.5) * 200) + 'px';
            sparkle.style.fontSize = (Math.random() * 30 + 20) + 'px';
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 50);
    }
}

// ==========================================
// FOOD CHOICE SELECTION
// ==========================================
const choiceCards = document.querySelectorAll('.choice-card');
choiceCards.forEach(card => {
    card.addEventListener('click', function() {
        const choice = this.getAttribute('data-choice');
        handleChoice(choice);
    });
});

function handleChoice(choice) {
    switchScreen('choice-screen', 'funny-screen');
    setTimeout(() => {
        switchScreen('funny-screen', 'video-screen');
        loadVideoIfAvailable();
    }, 4000);
}

// ==========================================
// LOCAL VIDEO FILE HANDLING - DIRECT FILE PATH
// ==========================================
const blackoutOverlay = document.getElementById('blackout-overlay');
const blackoutVideo = document.getElementById('blackout-video');
const closeVideoBtn = document.getElementById('close-video-btn');
const playVideoBtn = document.getElementById('play-video-btn');

// ==========================================
// VIDEO LOADING AND ERROR HANDLING
// ==========================================

// Set up video source from local file
function loadVideoIfAvailable() {
    console.log('🎥 Video screen ready');
    console.log('📝 VIDEO_FILE configured as:', VIDEO_FILE);
    
    if (playVideoBtn) {
        playVideoBtn.style.display = 'inline-block';
        playVideoBtn.textContent = 'Play Video 🎬';
    }
}

// Play button click → show blackout & play video
if (playVideoBtn) {
    playVideoBtn.addEventListener('click', function() {
        console.log('▶️ Play button clicked');
        console.log('🎬 Playing video:', VIDEO_FILE);
        
        // Show blackout overlay
        blackoutOverlay.style.display = 'flex';
        
        // Attempt to play
        blackoutVideo.play().then(() => {
            console.log('✅ Video playing successfully');
        }).catch(err => {
            console.error('❌ Video play error:', err);
            console.error('❌ Error details:', err.name, err.message);
            
            let errorMsg = 'Could not play video!\n\n';
            errorMsg += 'File: ' + VIDEO_FILE + '\n\n';
            errorMsg += 'Possible issues:\n';
            errorMsg += '• File doesn\'t exist in same folder\n';
            errorMsg += '• Filename doesn\'t match exactly\n';
            errorMsg += '• File extension is wrong (.MP4 vs .mp4)\n';
            errorMsg += '• Browser doesn\'t support this video format\n\n';
            errorMsg += 'Check browser console (F12) for details!';
            
            alert(errorMsg);
            blackoutOverlay.style.display = 'none';
        });
        
        // Hide continue button while video plays
        document.getElementById('continue-btn').style.display = 'none';
    });
}

// When video ends, show goodbye
if (blackoutVideo) {
    blackoutVideo.addEventListener('ended', function() {
        closeBlackoutAndShowGoodbye();
    });
}

// Close button
if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', function() {
        blackoutVideo.pause();
        blackoutVideo.currentTime = 0;
        blackoutOverlay.style.display = 'none';
        document.getElementById('continue-btn').style.display = 'block';
    });
}

function closeBlackoutAndShowGoodbye() {
    blackoutOverlay.style.display = 'none';
    showGoodbye();
}

// ==========================================
// GOODBYE MESSAGE
// ==========================================
document.getElementById('continue-btn').addEventListener('click', showGoodbye);

function showGoodbye() {
    const videoUploadForm = document.getElementById('video-upload-form');
    const localContainer = document.getElementById('local-video-container');
    const continueBtn = document.getElementById('continue-btn');
    const goodbye = document.getElementById('goodbye');
    
    if (videoUploadForm) videoUploadForm.style.display = 'none';
    if (localContainer) localContainer.style.display = 'none';
    if (continueBtn) continueBtn.style.display = 'none';
    goodbye.style.display = 'block';
    
    // Create final sparkles
    const sparkleInterval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkles(x, y);
    }, 500);
    
    // Optional: Stop sparkles after some time
    setTimeout(() => {
        clearInterval(sparkleInterval);
    }, 10000);
}