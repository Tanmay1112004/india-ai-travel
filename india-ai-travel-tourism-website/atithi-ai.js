// ===== GEMINI AI CONFIGURATION =====
const GEMINI_API_KEY = 'AIzaSyCTNoM5actAwOaiKA0md0qDWZgcLD2ZAvw';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent';

// ===== TOURISM DATA =====
const destinations = [{
        id: 1,
        name: "Taj Mahal, Agra",
        location: "Agra, Uttar Pradesh",
        state: "uttar-pradesh",
        category: "heritage",
        season: "winter",
        description: "An ivory-white marble mausoleum and UNESCO World Heritage Site, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
        image: "https://plus.unsplash.com/premium_photo-1697730359975-8f1885936530?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFqJTIwTWFoYWwlMkMlMjBBZ3JhfGVufDB8fDB8fHww",
        rating: 4.9,
        bestTime: "Oct-Mar",
        price: 50,
        features: ["UNESCO", "Historical", "Architecture"],
        coordinates: {
            lat: 27.1751,
            lng: 78.0421
        }
    },
    {
        id: 2,
        name: "Varanasi Ghats",
        location: "Varanasi, Uttar Pradesh",
        state: "uttar-pradesh",
        category: "spiritual",
        season: "winter",
        description: "The spiritual capital of India, famous for its ghats lining the Ganges River and ancient temples.",
        image: "https://images.unsplash.com/photo-1706186839147-0d708602587b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmFyYW5hc2klMjBHaGF0c3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.8,
        bestTime: "Oct-Mar",
        price: 0,
        features: ["Spiritual", "Cultural", "River"],
        coordinates: {
            lat: 25.3176,
            lng: 83.0058
        }
    },
    {
        id: 3,
        name: "Kerala Backwaters",
        location: "Alleppey, Kerala",
        state: "kerala",
        category: "beach",
        season: "winter",
        description: "A network of interconnected canals, rivers, lakes and inlets forming a breathtakingly beautiful labyrinth.",
        image: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2VyYWxhJTIwQmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.7,
        bestTime: "Sep-Mar",
        price: 75,
        features: ["Houseboat", "Nature", "Relaxing"],
        coordinates: {
            lat: 9.4981,
            lng: 76.3388
        }
    },
    {
        id: 4,
        name: "Goa Beaches",
        location: "North & South Goa",
        state: "goa",
        category: "beach",
        season: "winter",
        description: "Famous for its palm-fringed beaches, Portuguese heritage, vibrant nightlife and seafood.",
        image: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29hJTIwQmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.6,
        bestTime: "Nov-Feb",
        price: 40,
        features: ["Beach", "Nightlife", "Portuguese"],
        coordinates: {
            lat: 15.2993,
            lng: 74.1240
        }
    },
    {
        id: 5,
        name: "Jaipur City Palace",
        location: "Jaipur, Rajasthan",
        state: "rajasthan",
        category: "heritage",
        season: "winter",
        description: "A magnificent palace complex that showcases a blend of Rajput and Mughal architecture.",
        image: "https://images.unsplash.com/photo-1543857243-205f7fae8f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGVyaXRhZ2UlMjBXYWxrfGVufDB8fDB8fHww",
        rating: 4.7,
        bestTime: "Oct-Mar",
        price: 35,
        features: ["Palace", "Historical", "Architecture"],
        coordinates: {
            lat: 26.9255,
            lng: 75.8236
        }
    },
    {
        id: 6,
        name: "Ranthambore National Park",
        location: "Sawai Madhopur, Rajasthan",
        state: "rajasthan",
        category: "wildlife",
        season: "winter",
        description: "One of the largest national parks in India, famous for its Bengal tiger population.",
        image: "https://images.unsplash.com/photo-1763878119119-aff0820121fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
        bestTime: "Oct-Apr",
        price: 120,
        features: ["Wildlife", "Safari", "Tigers"],
        coordinates: {
            lat: 26.0172,
            lng: 76.5026
        }
    },
    {
        id: 7,
        name: "Ladakh Monasteries",
        location: "Leh, Ladakh",
        state: "himachal",
        category: "spiritual",
        season: "summer",
        description: "High-altitude desert landscape with ancient Buddhist monasteries and stunning mountain views.",
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFkYWtoJTIwTW91bnRhaW5zfGVufDB8fDB8fHww",
        rating: 4.9,
        bestTime: "May-Sep",
        price: 65,
        features: ["Mountains", "Buddhist", "Adventure"],
        coordinates: {
            lat: 34.1526,
            lng: 77.5771
        }
    },
    {
        id: 8,
        name: "Mysore Palace",
        location: "Mysore, Karnataka",
        state: "karnataka",
        category: "heritage",
        season: "winter",
        description: "An exquisite example of Indo-Saracenic style of architecture, illuminated by 97,000 lights on Sundays.",
        image: "https://plus.unsplash.com/premium_photo-1697729603596-90888a05a6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXlzb3JlJTIwUGFsYWNlKip8ZW58MHx8MHx8fDA%3D",
        rating: 4.6,
        bestTime: "Oct-Mar",
        price: 40,
        features: ["Palace", "Historical", "Illuminated"],
        coordinates: {
            lat: 12.3052,
            lng: 76.6552
        }
    },
    {
        id: 9,
        name: "Khajuraho Temples",
        location: "Khajuraho, Madhya Pradesh",
        state: "madhya-pradesh",
        category: "heritage",
        season: "winter",
        description: "A group of Hindu and Jain temples famous for their nagara-style architecture and erotic sculptures.",
        image: "https://plus.unsplash.com/premium_photo-1661963629241-52c812d5c7f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8KktoYWp1cmFobyUyMFRlbXBsZXN8ZW58MHx8MHx8fDA%3D",
        rating: 4.5,
        bestTime: "Oct-Mar",
        price: 40,
        features: ["UNESCO", "Temples", "Sculptures"],
        coordinates: {
            lat: 24.8516,
            lng: 79.9335
        }
    },
    {
        id: 10,
        name: "Sundarbans Mangrove",
        location: "West Bengal",
        state: "west-bengal",
        category: "wildlife",
        season: "winter",
        description: "The largest tidal halophytic mangrove forest in the world and home to the Royal Bengal Tiger.",
        image: "https://images.unsplash.com/photo-1589556183130-530470785fab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VuZGFyYmFucyUyME1hbmdyb3ZlKip8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        bestTime: "Sep-Mar",
        price: 85,
        features: ["Mangrove", "Wildlife", "UNESCO"],
        coordinates: {
            lat: 21.9497,
            lng: 89.1833
        }
    },
    {
        id: 11,
        name: "Golden Temple, Amritsar",
        location: "Amritsar, Punjab",
        state: "punjab",
        category: "spiritual",
        season: "winter",
        description: "The holiest Gurdwara of Sikhism, known for its stunning golden architecture and community kitchen.",
        image: "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
        bestTime: "Oct-Mar",
        price: 0,
        features: ["Sikh", "Golden", "Community"],
        coordinates: {
            lat: 31.6199,
            lng: 74.8765
        }
    },
    {
        id: 12,
        name: "Ajanta Ellora Caves",
        location: "Aurangabad, Maharashtra",
        state: "maharashtra",
        category: "heritage",
        season: "winter",
        description: "Ancient rock-cut cave monuments featuring paintings and sculptures from 2nd century BCE to 650 CE.",
        image: "https://media.istockphoto.com/id/470583942/photo/ajanta-caves-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=zPxi97lH5vdu-b1KXoVu6lvaw8AeqKIIPgR9IFFhVng=",
        rating: 4.7,
        bestTime: "Oct-Mar",
        price: 40,
        features: ["UNESCO", "Caves", "Ancient"],
        coordinates: {
            lat: 20.0267,
            lng: 75.1790
        }
    }
];

// ===== GEMINI AI FUNCTIONS =====
async function callGeminiAPI(prompt, context = '') {
    try {
        const fullPrompt = context ? `${context}\n\n${prompt}` : prompt;

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: fullPrompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Invalid response format from Gemini API');
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return `I apologize, but I'm having trouble connecting to the AI service. Please try again in a moment. Error: ${error.message}`;
    }
}

// ===== AI CHATBOT =====
class AIChatbot {
    constructor() {
        this.chatHistory = [];
        this.isProcessing = false;
    }

    async sendMessage(message) {
        if (this.isProcessing) return;

        this.isProcessing = true;

        // Add user message to chat
        this.addMessage(message, 'user');

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Create context for AI
            const context = `You are an AI travel assistant for Incredible India tourism website. You help users with:
1. Travel planning and itinerary suggestions for India
2. Destination recommendations based on interests
3. Cultural information about India
4. Travel tips, best times to visit, and budget planning
5. Answering questions about Indian food, festivals, and traditions
6. Providing practical travel advice

Be friendly, informative, and enthusiastic about Indian tourism. Keep responses concise but helpful.
Current date: ${new Date().toLocaleDateString()}`;

            // Call Gemini API
            const aiResponse = await callGeminiAPI(message, context);

            // Remove typing indicator
            this.hideTypingIndicator();

            // Add AI response to chat
            this.addMessage(aiResponse, 'bot');

            // Add to chat history
            this.chatHistory.push({
                role: 'user',
                content: message
            });
            this.chatHistory.push({
                role: 'assistant',
                content: aiResponse
            });

        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage("Sorry, I encountered an error. Please try again.", 'bot');
        }

        this.isProcessing = false;
    }

    addMessage(text, sender) {
        const chatMessages = document.getElementById('aiChatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-message-${sender}`;

        const now = new Date();
        const timeString = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        messageDiv.innerHTML = `
            <div class="ai-message-content">
                <div class="ai-message-avatar">
                    <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
                </div>
                <div class="ai-message-text">
                    <p>${this.formatMessage(text)}</p>
                </div>
            </div>
            <div class="ai-message-time">${timeString}</div>
        `;

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    formatMessage(text) {
        // Convert markdown to HTML
        let html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');

        // Add links for common terms
        html = html.replace(/(Taj Mahal|Goa|Kerala|Rajasthan|Himalayas)/gi,
            '<strong class="highlight">$1</strong>');

        return html;
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('aiChatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message ai-message-bot ai-typing';
        typingDiv.innerHTML = `
            <div class="ai-message-content">
                <div class="ai-message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="ai-message-text">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        typingDiv.id = 'typingIndicator';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

// Initialize chatbot
const chatbot = new AIChatbot();

// ===== AI TRIP PLANNER =====
async function generateAITripPlan() {
    const travelers = document.getElementById('aiTravelers').value;
    const duration = document.getElementById('aiDuration').value;
    const budget = document.getElementById('aiBudget').value;
    const region = document.getElementById('aiRegion').value;

    // Get selected interests
    const interests = [];
    document.querySelectorAll('.ai-interest-checkbox input:checked').forEach(checkbox => {
        interests.push(checkbox.value);
    });

    // Show loading
    const generateBtn = document.getElementById('aiGenerateItinerary');
    const loadingIcon = generateBtn.querySelector('.ai-loading');
    loadingIcon.style.display = 'inline-block';
    generateBtn.disabled = true;

    try {
        const prompt = `Create a detailed ${duration}-day trip itinerary for ${travelers} traveling to ${region || 'India'} with a ${budget} budget. 
        Interests include: ${interests.join(', ')}.
        
        Please format the response with:
        1. Trip Overview (brief summary)
        2. Day-by-Day itinerary with activities
        3. Estimated costs breakdown
        4. Travel tips specific to this itinerary
        5. Must-try foods
        6. Best transportation options
        
        Make it practical and exciting!`;

        const itinerary = await callGeminiAPI(prompt);

        // Display result
        const resultDiv = document.getElementById('aiTripResult');
        resultDiv.innerHTML = `
            <div class="ai-itinerary-result">
                <h3><i class="fas fa-map-marked-alt"></i> Your AI-Generated Itinerary</h3>
                <div class="ai-itinerary-content">
                    ${marked.parse(itinerary)}
                </div>
                <div class="ai-itinerary-actions">
                    <button class="ai-save-itinerary">
                        <i class="fas fa-save"></i> Save Itinerary
                    </button>
                    <button class="ai-share-itinerary">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                    <button class="ai-customize-itinerary">
                        <i class="fas fa-edit"></i> Customize
                    </button>
                </div>
            </div>
        `;

        // Add some styles
        if (!document.querySelector('#itinerary-styles')) {
            const style = document.createElement('style');
            style.id = 'itinerary-styles';
            style.textContent = `
                .ai-itinerary-result {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    margin-top: 30px;
                }
                
                .ai-itinerary-result h3 {
                    color: #1a2980;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    font-size: 1.8rem;
                }
                
                .ai-itinerary-result h3 i {
                    color: #4ECDC4;
                }
                
                .ai-itinerary-content {
                    line-height: 1.8;
                    color: #333;
                }
                
                .ai-itinerary-content h4 {
                    color: #1a2980;
                    margin: 25px 0 15px;
                    font-size: 1.4rem;
                }
                
                .ai-itinerary-content ul, .ai-itinerary-content ol {
                    margin-left: 20px;
                    margin-bottom: 20px;
                }
                
                .ai-itinerary-content li {
                    margin-bottom: 10px;
                }
                
                .ai-itinerary-actions {
                    display: flex;
                    gap: 15px;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 2px solid #f0f0f0;
                }
                
                .ai-save-itinerary, .ai-share-itinerary, .ai-customize-itinerary {
                    padding: 12px 25px;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border: none;
                }
                
                .ai-save-itinerary {
                    background: linear-gradient(135deg, #4ECDC4, #1a2980);
                    color: white;
                }
                
                .ai-share-itinerary {
                    background: #f8f9fa;
                    color: #666;
                    border: 2px solid #e0e0e0;
                }
                
                .ai-customize-itinerary {
                    background: transparent;
                    color: #1a2980;
                    border: 2px solid #1a2980;
                }
                
                .ai-save-itinerary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(78,205,196,0.3);
                }
                
                .ai-share-itinerary:hover {
                    background: #e9ecef;
                    transform: translateY(-3px);
                }
                
                .ai-customize-itinerary:hover {
                    background: #1a2980;
                    color: white;
                    transform: translateY(-3px);
                }
            `;
            document.head.appendChild(style);
        }

        showNotification('✅ Your AI itinerary is ready!');

    } catch (error) {
        showNotification('❌ Failed to generate itinerary. Please try again.', 'error');
    } finally {
        loadingIcon.style.display = 'none';
        generateBtn.disabled = false;
    }
}

// ===== AI RECOMMENDATIONS =====
async function getAIRecommendations() {
    try {
        const prompt = `Based on current travel trends and user preferences, suggest 3 personalized travel recommendations for India. 
        Include:
        1. A heritage destination with historical significance
        2. A nature/beach destination for relaxation
        3. An offbeat/unique experience
        
        For each, provide:
        - Destination name and location
        - Why it's recommended
        - Best time to visit
        - Estimated budget per day
        - One unique experience to try there`;

        const recommendations = await callGeminiAPI(prompt);

        // Update the recommendation text in hero
        const recommendationText = document.getElementById('aiRecommendationText');
        if (recommendationText) {
            recommendationText.textContent = recommendations.split('\n')[0];
        }

        // Show in notification
        showNotification('✨ Personalized recommendations generated!');

        // Also send to chatbot
        chatbot.addMessage(`Here are some personalized recommendations for you:\n\n${recommendations}`, 'bot');

    } catch (error) {
        showNotification('Failed to get recommendations. Please try again.', 'error');
    }
}

// ===== AI IMAGE DESCRIBER =====
async function describeImageWithAI(imageName) {
    try {
        const prompt = `Describe the ${imageName} in India in a way that would make tourists want to visit. 
        Include:
        1. Brief historical/cultural context
        2. What makes it special
        3. Best time to visit
        4. Nearby attractions
        5. Travel tip for visiting
        
        Make it engaging and informative!`;

        const description = await callGeminiAPI(prompt);

        // Show in chatbot
        chatbot.addMessage(`Here's a description of ${imageName}:\n\n${description}`, 'bot');

        // Open chatbot if closed
        openAIChatbot();

    } catch (error) {
        showNotification('Failed to generate description. Please try again.', 'error');
    }
}

// ===== AI VOICE ASSISTANT =====
class AIVoiceAssistant {
    constructor() {
        this.isListening = false;
        this.recognition = null;

        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.processVoiceCommand(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.stopListening();
                showNotification('Voice recognition failed. Please try again.', 'error');
            };

            this.recognition.onend = () => {
                this.stopListening();
            };
        }
    }

    startListening() {
        if (!this.recognition) {
            showNotification('Voice recognition is not supported in your browser.', 'error');
            return;
        }

        if (!this.isListening) {
            try {
                this.recognition.start();
                this.isListening = true;
                this.updateVoiceStatus('Listening... Speak now');
                showNotification('🎤 Listening... Speak your question');
            } catch (error) {
                showNotification('Could not start voice recognition.', 'error');
            }
        }
    }

    stopListening() {
        this.isListening = false;
        this.updateVoiceStatus('Click to speak');
    }

    updateVoiceStatus(text) {
        const statusElement = document.getElementById('aiVoiceStatus');
        if (statusElement) {
            statusElement.textContent = text;
        }
    }

    async processVoiceCommand(transcript) {
        showNotification(`Heard: "${transcript}"`);

        // Send to chatbot
        await chatbot.sendMessage(transcript);

        // Open chatbot if closed
        openAIChatbot();
    }
}

// Initialize voice assistant
const voiceAssistant = new AIVoiceAssistant();

// ===== UI CONTROLS =====
function openAIChatbot() {
    const chatbot = document.querySelector('.ai-chatbot-container');
    chatbot.style.display = 'flex';
}

function closeAIChatbot() {
    const chatbot = document.querySelector('.ai-chatbot-container');
    chatbot.style.display = 'none';
}

function openAITripPlanner() {
    const planner = document.querySelector('.ai-trip-planner-modal');
    planner.style.display = 'flex';
}

function closeAITripPlanner() {
    const planner = document.querySelector('.ai-trip-planner-modal');
    planner.style.display = 'none';
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeroSlider();
    loadDestinations();
    setupEventListeners();
    setupNavigation();
    setupSearch();
    initMobileMenu();
    setupScrollEffects();

    // Initialize AI features
    setupAIFeatures();

    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to Incredible India! 🎉 Our AI assistant is ready to help you plan your trip.');
    }, 1500);
});

function setupAIFeatures() {
    // Chatbot toggle
    document.querySelector('.ai-chatbot-toggle').addEventListener('click', openAIChatbot);
    document.querySelector('.ai-chatbot-close').addEventListener('click', closeAIChatbot);

    // Trip planner buttons
    document.getElementById('openAiPlanner').addEventListener('click', openAITripPlanner);
    document.getElementById('openAiPlanner2').addEventListener('click', openAITripPlanner);
    document.querySelector('.ai-trip-planner-close').addEventListener('click', closeAITripPlanner);

    // Generate itinerary button
    document.getElementById('aiGenerateItinerary').addEventListener('click', generateAITripPlan);

    // Chat input
    document.getElementById('aiChatSend').addEventListener('click', async () => {
        const input = document.getElementById('aiChatInput');
        if (input.value.trim()) {
            await chatbot.sendMessage(input.value.trim());
            input.value = '';
        }
    });

    document.getElementById('aiChatInput').addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            const input = document.getElementById('aiChatInput');
            if (input.value.trim()) {
                await chatbot.sendMessage(input.value.trim());
                input.value = '';
            }
        }
    });

    // Quick questions
    document.querySelectorAll('.ai-quick-question').forEach(button => {
        button.addEventListener('click', async () => {
            const question = button.getAttribute('data-question');
            await chatbot.sendMessage(question);
            openAIChatbot();
        });
    });

    // Voice input
    document.getElementById('aiVoiceInput').addEventListener('click', () => {
        voiceAssistant.startListening();
    });

    document.getElementById('aiVoiceAssistant').addEventListener('click', () => {
        voiceAssistant.startListening();
    });

    // AI Recommendations
    document.getElementById('getAiRecommendation').addEventListener('click', getAIRecommendations);

    // Image description
    document.querySelectorAll('.ai-describe').forEach(button => {
        button.addEventListener('click', () => {
            const imageName = button.getAttribute('data-image');
            describeImageWithAI(imageName);
        });
    });

    // AI feature buttons
    document.getElementById('useAiPlanner').addEventListener('click', openAITripPlanner);
    document.getElementById('openAiChat').addEventListener('click', openAIChatbot);
    document.getElementById('getAiRecommendations').addEventListener('click', getAIRecommendations);

    // Footer AI links
    document.getElementById('openAiChatFooter').addEventListener('click', openAIChatbot);
    document.getElementById('openAiPlannerFooter').addEventListener('click', openAITripPlanner);

    // AI sort and personalize buttons
    document.getElementById('aiSortDestinations').addEventListener('click', async () => {
        showNotification('🔍 AI is sorting destinations based on your preferences...');
        // In a real app, this would call AI to sort destinations
        setTimeout(() => {
            showNotification('✅ Destinations sorted by AI recommendation!');
        }, 1500);
    });

    document.getElementById('aiPersonalizeDestinations').addEventListener('click', async () => {
        showNotification('✨ Personalizing destinations for you...');
        // In a real app, this would call AI to personalize destinations
        setTimeout(() => {
            showNotification('✅ Personalized recommendations ready! Check the chatbot.');
            chatbot.addMessage("Based on your browsing history, I recommend these destinations:\n1. Kerala Backwaters - Perfect for relaxation\n2. Ranthambore - Great for wildlife lovers\n3. Ladakh - For adventure seekers", 'bot');
            openAIChatbot();
        }, 2000);
    });
}

// ===== HERO SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');

    let currentSlide = 0;
    let slideInterval;

    // Update slider
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to specific slide
    function goToSlide(n) {
        currentSlide = n;
        updateSlider();
        resetInterval();
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
        resetInterval();
    }

    // Start auto slide
    function startInterval() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    // Reset interval
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Initialize
    updateSlider();
    startInterval();

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSection.addEventListener('mouseleave', startInterval);
}

// ===== LOAD DESTINATIONS =====
function loadDestinations(filter = {}) {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';

    let filteredDestinations = destinations;

    // Apply filters
    if (filter.state) {
        filteredDestinations = filteredDestinations.filter(d => d.state === filter.state);
    }

    if (filter.category) {
        filteredDestinations = filteredDestinations.filter(d => d.category === filter.category);
    }

    if (filter.season) {
        filteredDestinations = filteredDestinations.filter(d => d.season === filter.season);
    }

    if (filter.search) {
        const searchTerm = filter.search.toLowerCase();
        filteredDestinations = filteredDestinations.filter(d =>
            d.name.toLowerCase().includes(searchTerm) ||
            d.location.toLowerCase().includes(searchTerm) ||
            d.description.toLowerCase().includes(searchTerm)
        );
    }

    // Display destinations
    filteredDestinations.forEach(destination => {
        const card = createDestinationCard(destination);
        grid.appendChild(card);
    });

    // Update counter
    const counter = document.querySelector('.destination-counter span');
    if (counter) {
        counter.textContent = `${filteredDestinations.length} destinations shown`;
    }

    // Show message if no results
    if (filteredDestinations.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 80px 20px;">
                <i class="fas fa-search" style="font-size: 4rem; color: #dee2e6; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 15px; font-size: 1.5rem;">No destinations found</h3>
                <p style="color: #999; margin-bottom: 30px;">Try adjusting your search filters</p>
                <button onclick="loadDestinations()" style="background: linear-gradient(135deg, #FF6B6B, #4ECDC4); color: white; border: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; cursor: pointer;">
                    Show All Destinations
                </button>
                <button onclick="openAIChatbot()" style="background: linear-gradient(135deg, #1a2980, #26d0ce); color: white; border: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; cursor: pointer; margin-left: 10px;">
                    <i class="fas fa-robot"></i> Ask AI Assistant
                </button>
            </div>
        `;
    }
}

function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.innerHTML = `
        <div class="destination-image">
            <img src="${destination.image}" alt="${destination.name}" loading="lazy">
            <div class="destination-rating">
                <i class="fas fa-star"></i>
                <span>${destination.rating}</span>
            </div>
        </div>
        <div class="destination-content">
            <h3>${destination.name}</h3>
            <div class="destination-location">
                <i class="fas fa-map-marker-alt"></i>
                ${destination.location}
            </div>
            <p class="destination-description">${destination.description}</p>
            <div class="destination-features">
                <span class="feature"><i class="fas fa-clock"></i> ${destination.bestTime}</span>
                <span class="feature"><i class="fas fa-tag"></i> ${destination.category}</span>
            </div>
            <div class="destination-actions">
                <div class="price">
                    $${destination.price}<span>/person</span>
                </div>
                <button class="view-details-btn" onclick="showDestinationModal(${destination.id})">
                    View Details
                </button>
            </div>
        </div>
    `;
    return card;
}

// ===== DESTINATION MODAL =====
function showDestinationModal(id) {
    const destination = destinations.find(d => d.id === id);
    if (!destination) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" onclick="closeModal()">×</button>
            <div class="modal-body">
                <div class="destination-hero">
                    <img src="${destination.image}" alt="${destination.name}">
                </div>
                <div class="destination-info">
                    <h2>${destination.name}</h2>
                    <div class="destination-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${destination.location}</span>
                        <span><i class="fas fa-star"></i> ${destination.rating}</span>
                        <span><i class="fas fa-clock"></i> Best Time: ${destination.bestTime}</span>
                    </div>
                    <div class="destination-description">
                        <h3>About</h3>
                        <p>${destination.description}</p>
                    </div>
                    <div class="destination-features">
                        <h3>Highlights</h3>
                        <div class="features-list">
                            ${destination.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                    </div>
                    <div class="destination-actions">
                        <div class="price-section">
                            <h3>Starting from</h3>
                            <div class="price">$${destination.price} <span>/person</span></div>
                        </div>
                        <div class="action-buttons">
                            <button class="book-btn" onclick="bookDestination(${destination.id})">
                                <i class="fas fa-calendar-check"></i> Book Now
                            </button>
                            <button class="ai-info-btn" onclick="getAIDestinationInfo(${destination.id})">
                                <i class="fas fa-robot"></i> AI Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';

    // Add modal styles
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.8);
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                padding: 20px;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .modal-content {
                background: white;
                border-radius: 25px;
                max-width: 800px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                animation: slideUp 0.4s ease;
            }
            
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .close-modal {
                position: absolute;
                top: 20px;
                right: 25px;
                background: rgba(0,0,0,0.1);
                border: none;
                font-size: 2.5rem;
                color: #666;
                cursor: pointer;
                z-index: 2;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            
            .close-modal:hover {
                background: rgba(0,0,0,0.2);
                color: #333;
                transform: rotate(90deg);
            }
            
            .modal-body {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0;
            }
            
            .destination-hero {
                height: 350px;
                border-radius: 25px 25px 0 0;
                overflow: hidden;
            }
            
            .destination-hero img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .destination-info {
                padding: 40px;
            }
            
            .destination-info h2 {
                color: #2c3e50;
                margin-bottom: 20px;
                font-size: 2.2rem;
                font-weight: 800;
            }
            
            .destination-meta {
                display: flex;
                gap: 30px;
                margin-bottom: 30px;
                color: #666;
                flex-wrap: wrap;
            }
            
            .destination-meta span {
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 500;
            }
            
            .destination-meta i {
                color: #FF6B6B;
                font-size: 1.1rem;
            }
            
            .destination-description h3 {
                color: #2c3e50;
                margin-bottom: 15px;
                font-size: 1.5rem;
            }
            
            .destination-description p {
                color: #666;
                line-height: 1.8;
                font-size: 1.05rem;
            }
            
            .destination-features {
                margin: 30px 0;
            }
            
            .destination-features h3 {
                color: #2c3e50;
                margin-bottom: 20px;
                font-size: 1.5rem;
            }
            
            .features-list {
                display: flex;
                gap: 15px;
                flex-wrap: wrap;
            }
            
            .feature-tag {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                color: #2c3e50;
                padding: 10px 20px;
                border-radius: 20px;
                font-size: 0.95rem;
                font-weight: 600;
                border: 2px solid transparent;
                transition: all 0.3s ease;
            }
            
            .feature-tag:hover {
                border-color: #4ECDC4;
                transform: translateY(-2px);
            }
            
            .destination-actions {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 40px;
                padding-top: 30px;
                border-top: 2px solid #f0f0f0;
            }
            
            .price-section h3 {
                color: #666;
                font-size: 1rem;
                margin-bottom: 8px;
                font-weight: 500;
            }
            
            .price-section .price {
                font-size: 2.2rem;
                font-weight: 800;
                color: #1a2980;
            }
            
            .price-section .price span {
                font-size: 1rem;
                color: #666;
                font-weight: normal;
            }
            
            .action-buttons {
                display: flex;
                gap: 20px;
            }
            
            .book-btn, .ai-info-btn {
                padding: 15px 30px;
                border-radius: 25px;
    font-weight: 700;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 1.05rem;
                border: none;
            }
            
            .book-btn {
                background: linear-gradient(135deg, #1a2980, #26d0ce);
                color: white;
                box-shadow: 0 10px 25px rgba(26,41,128,0.3);
            }
            
            .ai-info-btn {
                background: transparent;
                border: 2px solid #4ECDC4;
                color: #4ECDC4;
            }
            
            .book-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 15px 35px rgba(26,41,128,0.4);
            }
            
            .ai-info-btn:hover {
                background: #4ECDC4;
                color: white;
                transform: translateY(-3px);
            }
        `;
        document.head.appendChild(style);
    }

    // Close modal on overlay click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

async function getAIDestinationInfo(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (!destination) return;

    showNotification('🤖 Getting AI insights...');

    try {
        const prompt = `Provide detailed travel information about ${destination.name} in ${destination.location}, India.
        Include:
        1. Best ways to get there
        2. Nearby attractions worth visiting
        3. Local food recommendations
        4. Cultural etiquette tips
        5. Hidden gems or lesser-known facts
        6. Photography tips for this location
        
        Make it practical and helpful for travelers.`;

        const aiInfo = await callGeminiAPI(prompt);

        // Show in chatbot
        chatbot.addMessage(`Here's detailed AI information about ${destination.name}:\n\n${aiInfo}`, 'bot');

        // Open chatbot
        openAIChatbot();

        // Close modal
        closeModal();

    } catch (error) {
        showNotification('Failed to get AI information. Please try again.', 'error');
    }
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// ===== BOOKING FUNCTIONS =====
function bookDestination(id) {
    const destination = destinations.find(d => d.id === id);
    if (destination) {
        showNotification(`📅 Starting booking for ${destination.name}`);
        setTimeout(() => {
            alert(`Booking System\n\nDestination: ${destination.name}\nPrice: $${destination.price} per person\n\nThis would open a real booking form in a production app.`);
        }, 500);
        closeModal();
    }
}

// ===== SEARCH FUNCTIONALITY =====
function setupSearch() {
    const searchInput = document.getElementById('destinationSearch');
    const searchBtn = document.getElementById('searchBtn');
    const stateFilter = document.getElementById('stateFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const aiRecommendFilter = document.getElementById('aiRecommendFilter');

    function performSearch() {
        const filters = {
            search: searchInput.value,
            state: stateFilter.value,
            category: categoryFilter.value
        };

        loadDestinations(filters);

        if (filters.search || filters.state || filters.category) {
            showNotification(`🔍 Showing filtered results`);
        }
    }

    // Event listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    stateFilter.addEventListener('change', performSearch);
    categoryFilter.addEventListener('change', performSearch);

    // AI recommendation filter
    aiRecommendFilter.addEventListener('change', async function() {
        if (this.value) {
            showNotification('🤖 AI is finding recommendations...');

            // Simulate AI processing
            setTimeout(() => {
                const filterValue = this.value;
                let filtered = [...destinations];

                if (filterValue === 'family') {
                    filtered = destinations.filter(d =>
                        d.category !== 'adventure' &&
                        d.price < 100
                    );
                } else if (filterValue === 'budget') {
                    filtered = destinations.filter(d => d.price < 50);
                } else if (filterValue === 'luxury') {
                    filtered = destinations.filter(d => d.price > 80);
                } else if (filterValue === 'offbeat') {
                    filtered = destinations.filter(d =>
                        d.name.includes('Khajuraho') ||
                        d.name.includes('Sundarbans') ||
                        d.name.includes('Ladakh')
                    );
                }

                loadDestinations({});
                // In real app, this would update the grid with AI recommendations

                showNotification(`✅ AI found ${filtered.length} recommendations for ${filterValue} travel!`);

                // Reset filter
                this.value = '';

            }, 1500);
        }
    });
}

// ===== NAVIGATION =====
function setupNavigation() {
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                document.querySelectorAll('.nav-menu a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                window.scrollTo({
                    top: targetSection.offsetTop - 120,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Book Now button
    document.querySelector('.book-now-btn').addEventListener('click', function() {
        showNotification('📅 Opening booking system...');
        setTimeout(() => {
            alert('Booking System\n\nThis would open a comprehensive booking interface with package selection, date picking, and payment options.');
        }, 300);
    });

    // Explore buttons in hero
    document.querySelectorAll('.explore-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const slide = this.closest('.hero-slide');
            const heading = slide.querySelector('h2').textContent;

            if (heading.includes('Taj Mahal')) {
                showDestinationModal(1);
            } else if (heading.includes('Golden Temple')) {
                showDestinationModal(11);
            } else if (heading.includes('Hawa Mahal')) {
                showDestinationModal(5);
            }
        });
    });

    // View All Destinations button
    document.getElementById('viewAllBtn').addEventListener('click', function() {
        loadDestinations();
        showNotification('🌍 Showing all destinations!');
        document.querySelector('#destinations').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Book experience buttons
    document.querySelectorAll('.book-experience').forEach(btn => {
        btn.addEventListener('click', function() {
            const experience = this.closest('.experience-card');
            const title = experience.querySelector('h3').textContent;
            showNotification(`🎯 Starting booking for ${title}`);
        });
    });

    // Festival info buttons
    document.querySelectorAll('.festival-info').forEach(btn => {
        btn.addEventListener('click', function() {
            const festival = this.closest('.festival-card');
            const festivalName = festival.querySelector('h4').textContent;
            showNotification(`🎉 Showing details for ${festivalName}`);

            setTimeout(() => {
                alert(`Festival Details\n\n${festivalName}\n\nThis would show detailed information about the festival, schedules, locations, and booking options.`);
            }, 300);
        });
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            });
        });
    }
}

// ===== SCROLL EFFECTS =====
function setupScrollEffects() {
    const backToTopBtn = document.querySelector('.back-to-top');

    // Back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }

        // Active nav link based on scroll position
        updateActiveNavLink();
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Parallax effects
    setupParallax();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function setupParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Newsletter subscription
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        const submitBtn = subscribeForm.querySelector('button[type="submit"]');

        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (emailInput.value && emailInput.value.includes('@')) {
                showNotification('📧 Thank you for subscribing to AI updates!');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }

    // Guide cards hover effects
    document.querySelectorAll('.guide-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // Guide card clicks
        card.addEventListener('click', function() {
            const guideTitle = this.querySelector('h5').textContent;
            showNotification(`Opening ${guideTitle}...`);

            if (guideTitle.includes('AI')) {
                openAIChatbot();
                chatbot.addMessage(`How can I help you with ${guideTitle.toLowerCase()}?`, 'bot');
            }
        });
    });

    // Step cards click
    document.querySelectorAll('.step-card').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.querySelector('.step-number').textContent;
            const stepTitle = this.querySelector('h4').textContent;

            if (stepTitle.includes('AI')) {
                openAITripPlanner();
            } else {
                showNotification(`⚡ Step ${stepNumber} clicked - opening ${stepTitle}`);
            }
        });
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="close-notification">&times;</button>
    `;

    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                padding: 20px 25px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                z-index: 2002;
                animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
                border-left: 5px solid #4ECDC4;
                min-width: 300px;
                max-width: 400px;
            }
            
            .notification.error {
                border-left-color: #FF6B6B;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 15px;
                font-weight: 500;
                color: #333;
            }
            
            .notification-content i {
                font-size: 1.5rem;
                color: #4ECDC4;
            }
            
            .notification.error .notification-content i {
                color: #FF6B6B;
            }
            
            .close-notification {
                background: transparent;
                border: none;
                font-size: 1.5rem;
                color: #999;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .close-notification:hover {
                background: #f0f0f0;
                color: #333;
            }
        `;
        document.head.appendChild(style);
    }

    // Add to page
    document.body.appendChild(notification);

    // Close notification
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// ===== ADDITIONAL UTILITY FUNCTIONS =====
function filterDestinations() {
    const state = document.getElementById('stateFilter').value;
    const category = document.getElementById('categoryFilter').value;
    const search = document.getElementById('destinationSearch').value;

    loadDestinations({
        state: state || undefined,
        category: category || undefined,
        search: search || undefined
    });
}

// ===== MAP FUNCTIONALITY (Placeholder) =====
function showMap() {
    showNotification('🗺️ Opening map view...');
    setTimeout(() => {
        alert('Interactive Map\n\nThis would show an interactive map with all destinations marked.');
    }, 300);
}

// ===== INITIAL LOAD =====
window.onload = function() {
    // Check for saved destinations
    const savedDestinations = JSON.parse(localStorage.getItem('savedDestinations') || '[]');
    if (savedDestinations.length > 0) {
        console.log(`You have ${savedDestinations.length} saved destinations`);
    }

    // Add view map button functionality
    const viewMapBtn = document.querySelector('.view-map');
    if (viewMapBtn) {
        viewMapBtn.addEventListener('click', showMap);
    }

    // Add typing indicator styles
    const typingStyle = document.createElement('style');
    typingStyle.textContent = `
        .typing-indicator {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        
        .typing-indicator span {
            width: 8px;
            height: 8px;
            background: #4ECDC4;
            border-radius: 50%;
            animation: typing 1s infinite ease-in-out;
        }
        
        .typing-indicator span:nth-child(1) { animation-delay: 0s; }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes typing {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        
        .highlight {
            color: #1a2980;
            font-weight: 700;
        }
    `;
    document.head.appendChild(typingStyle);
};