// chatbot.js
export function initChatbot() {
    // 1. Inyectar el HTML del Widget en el DOM
    const chatHtml = `
        <div class="chat-tooltip" id="chat-tooltip">
            <span id="tooltip-text"></span>
            <span class="close-tooltip" id="close-tooltip">&times;</span>
        </div>

        <button id="chat-fab" class="chat-widget-btn">
            <img src="images/casacaribe.svg" alt="Chat Assistant" class="starfish-icon">
        </button>
        
        <div id="chat-window" class="chat-modal-container">
            <div class="chat-header">
                <span>TuCasa Caribe Advisor </span>
                <button id="close-chat">&times;</button>
            </div>
            
            <div id="chat-body" class="chat-body">
                <div class="bot-msg">Welcome to TuCasa Caribe Realty. How can I help you today?</div>

                <div class="quick-actions-menu" id="quick-actions">
                    <button class="chat-chip" data-action="search"><i class="fas fa-search"></i> Help me find a property</button>
                    <button class="chat-chip" data-action="roi"><i class="fas fa-chart-line"></i> Investment & ROI</button>
                    <button class="chat-chip" data-action="guide"><i class="fas fa-book"></i> Foreign Buyer's Guide</button>
                    <button class="chat-chip" data-action="contact"><i class="fas fa-user-tie"></i> Speak with an Agent</button>
                </div>
            </div>
            
            <div class="chat-footer">
                <input type="text" id="chat-input" placeholder="Ask about properties or legal processes...">
                <button id="send-chat">➤</button>
            </div>
            
            <!-- Descargo de Responsabilidad (Disclaimer Legal) -->
            <div class="chat-disclaimer">
                AI Assistant - Estimates & info are not legal advice. <br>
                Consulta nuestro <a href="privacy.html" target="_blank" style="color: inherit; text-decoration: underline;">Aviso de Privacidad</a>.
            </div>
        </div>
    `;

    if (!document.getElementById('chat-window')) {
        document.body.insertAdjacentHTML('beforeend', chatHtml);
    }

    // 2. Selectores del DOM
    const fab = document.getElementById('chat-fab');
    const chatWindow = document.getElementById('chat-window');
    const closeBtn = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-chat');
    const chips = document.querySelectorAll('.chat-chip');
    const quickActions = document.getElementById('quick-actions');
    const tooltip = document.getElementById('chat-tooltip');
    const closeTooltipBtn = document.getElementById('close-tooltip');
    const tooltipTextContainer = document.getElementById('tooltip-text');

    // Lista de ganchos aleatorios
    const tooltipMessages = [
        "Hi! Want to see the estimated ROI for this property? 📈",
        "Questions about buying in Mexico? I can guide you. 🇲🇽",
        "Want a 360° Virtual Tour of our listings? Ask me how! 🏘️",
        "Hi! Looking for a specific property or budget? Let me help. 🔍"
    ];

    // Lógica del Tooltip: Mostrar un mensaje aleatorio después de 4 segundos
    setTimeout(() => {
        if (!chatWindow.classList.contains('active') && !sessionStorage.getItem('tooltip_closed')) {
            // Elegir mensaje al azar
            const randomIndex = Math.floor(Math.random() * tooltipMessages.length);
            tooltipTextContainer.textContent = tooltipMessages[randomIndex];
            
            // Mostrar la burbuja
            tooltip.classList.add('show');
        }
    }, 4000);

    // Cerrar tooltip con la X sin abrir el chat
    closeTooltipBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        tooltip.classList.remove('show');
        sessionStorage.setItem('tooltip_closed', 'true'); 
    });

    // Ocultar el tooltip al abrir el chat
    fab.addEventListener('click', () => {
        tooltip.classList.remove('show');
        sessionStorage.setItem('tooltip_closed', 'true');
        
        chatWindow.classList.add('active');
        fab.style.display = 'none'; 
    });
    // 3. Abrir y Cerrar Ventana
    fab.addEventListener('click', () => {
        chatWindow.classList.add('active');
        fab.style.display = 'none'; // Ocultar el botón al abrir
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
        fab.style.display = 'flex'; // Volver a mostrar el botón
    });

    // NUEVO: Cerrar el chat al hacer clic fuera de la ventana
    document.addEventListener('click', (event) => {
        if (chatWindow.classList.contains('active') && !chatWindow.contains(event.target) && !fab.contains(event.target)) {
            chatWindow.classList.remove('active');
            fab.style.display = 'flex';
        }
    });

    // 4. Función visual para imprimir mensajes en pantalla
    const addMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = sender === 'user' ? 'user-msg' : 'bot-msg';
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll hacia abajo
    };

    // 5. Interacción del usuario (Conexión Real con Gemini y Memoria)
    const workerUrl = "https://tucasa-ai-bot.jonaimv.workers.dev";
    
    // Cargar historial previo de la sesión o iniciar uno nuevo
    let conversationHistory = JSON.parse(sessionStorage.getItem('tucasa_chat_history')) || [];

    // Inyectar en la memoria, de forma silenciosa, en qué página está parado el usuario ahora
    // Se agregan dos partes (user y model) para mantener la regla estricta de Gemini de alternar roles
    conversationHistory.push({ 
        role: "user", 
        parts: [{ text: `[System Context: The user is currently viewing the page titled "${document.title}" at the URL: ${window.location.href}. If they ask "how much is this?" or "tell me about this property", assume they are talking about the property on this page.]` }] 
    });
    conversationHistory.push({
        role: "model",
        parts: [{ text: "Understood. I will use this page context to answer specific questions about this property." }]
    });

    // Reconstruir visualmente el chat si el usuario viene de otra página
    const loadVisualHistory = () => {
        // Filtrar los mensajes de sistema y confirmaciones internas para no mostrarlos en pantalla
        const visibleMessages = conversationHistory.filter(msg => 
            !msg.parts[0].text.startsWith('[System') && 
            !msg.parts[0].text.startsWith('Understood.')
        );
        
        // Si hay historial real, limpiamos la pantalla de inicio y pintamos los mensajes
        if (visibleMessages.length > 0) {
            chatBody.innerHTML = ''; 
            if (quickActions) quickActions.style.display = 'none'; 
            
            visibleMessages.forEach(msg => {
                addMessage(msg.parts[0].text, msg.role === 'user' ? 'user' : 'bot');
            });
        }
    };
    
    // Ejecutar la reconstrucción visual al cargar
    loadVisualHistory();

    const handleSend = async (userText) => {
        const text = userText || chatInput.value.trim();
        if (!text) return;
        
        // 1. Mostrar mensaje del usuario
        addMessage(text, 'user');
        if (!userText) chatInput.value = ''; // Limpiar input solo si se escribió a mano
        if (quickActions) quickActions.style.display = 'none'; // Ocultar menú rápido
        
        // 2. Guardar en la memoria histórica y en el navegador (sessionStorage)
        conversationHistory.push({ role: "user", parts: [{ text: text }] });
        sessionStorage.setItem('tucasa_chat_history', JSON.stringify(conversationHistory));
        
        // 3. Mostrar indicador de carga
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'bot-msg loading-msg';
        loadingDiv.textContent = "Analizando...";
        chatBody.appendChild(loadingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        // 4. Enviar al Worker (Cloudflare)
        try {
            const response = await fetch(workerUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: conversationHistory })
            });

            const data = await response.json();
            
            // Quitar el mensaje de "Analizando..."
            chatBody.removeChild(loadingDiv);

            // 5. Mostrar la respuesta de la IA y guardarla en memoria
            if (data.reply) {
                addMessage(data.reply, 'bot');
                conversationHistory.push({ role: "model", parts: [{ text: data.reply }] });
                sessionStorage.setItem('tucasa_chat_history', JSON.stringify(conversationHistory));
            }

        } catch (error) {
            chatBody.removeChild(loadingDiv);
            addMessage("Ocurrió un error de conexión. Por favor, contacta a un agente por WhatsApp.", 'bot');
            console.error("Chatbot Error:", error);
        }
    };

    // Eventos para enviar con botón o tecla Enter
    sendBtn.addEventListener('click', () => handleSend());
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // 6. Lógica de los Botones de Acción Rápida (Chips)
    chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            const textContent = e.currentTarget.textContent.trim();
            handleSend(textContent); 
        });
    });
}