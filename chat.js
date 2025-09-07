const characterData = {
    'flowey_bueno': {
        name: 'Flowey',
        image: 'https://i.imgur.com/1a61dc9f.png',
        color: '#65e714',
        responses: {
            // 👋 Saludos básicos
            'hola': '¡Hola humano! ¡Qué gusto conocerte! ¿En qué puedo ayudarte hoy?',
            'buenos dias': '¡Buenos días! Espero que tengas un día lleno de determinación.',
            'buenas tardes': '¡Buenas tardes! ¿Cómo va tu día?',
            'buenas noches': '¡Buenas noches! Espero que descanses bien.',
            'adios': '¡Adiós! ¡Vuelve pronto para seguir charlando!',
            'hasta luego': '¡Hasta luego! No te metas en problemas, ¿vale?',
            
            // 🤝 Amistad
            'amigo': '¡Claro que sí! Seré tu amigo. La amistad es muy importante, ¿sabes?',
            'te quiero': '¡Yo también te quiero! Eres muy especial para mí.',
            'te amo': '¡Eso es muy dulce! Los lazos que formamos son lo más importante.',
            'mejor amigo': '¡Ser tu mejor amigo sería genial! Juntos podemos divertirnos mucho.',
            'quieres ser mi amigo': '¡Por supuesto! La amistad es algo maravilloso.',
            'quieres jugar conmigo': '¡Me encantaría jugar contigo! ¿A qué quieres jugar?',
            'me acompañas': '¡Claro que te acompaño! No hay nada mejor que explorar juntos.',
            'quieres hablar conmigo': '¡Siempre estoy aquí para hablar contigo!',
            
            // 🎮 Personajes
            'sans': 'Sans es un esqueleto perezoso pero muy poderoso. Tiene un sentido del humor único y es el hermano de Papyrus.',
            'papyrus': 'Papyrus es un esqueleto entusiasta que sueña con unirse a la Guardia Real. ¡Tiene un gusto peculiar por el espagueti!',
            'frisk': 'Frisk es el humano que cayó al Subsuelo. Dependiendo de sus acciones, la historia puede terminar de muchas maneras diferentes.',
            'chara': 'Chara fue el primer humano que cayó al Subsuelo. Su nombre significa "amor" en el lenguaje de los monstruos.',
            'flowey': '¡Ese soy yo! Flowey, la flor parlante. Antes era diferente, pero ahora estoy aquí para ayudarte.',
            'toriel': 'Toriel es la mujer cabra que cuida de las Ruinas. Es muy maternal y protectora con los humanos.',
            'asgore': 'Asgore es el rey del Subsuelo. Es un personaje trágico que busca romper la barrera para liberar a los monstruos.',
            'undyne': 'Undyne es la líder de la Guardia Real. ¡Es fuerte, valiente y nunca se rinde!',
            'alphys': 'Alphys es la científica Real. Es tímida pero muy inteligente, y le encantan los anime y los manga.',
            'mettaton': 'Mettaton es una estrella robótica que busca entretenimiento. ¡Su show es espectacular!',
            'asriel': 'Asriel Dreemurr es el hijo de Toriel y Asgore. Su historia es bastante trágica...',
            
            // ⚔️ Rutas
            'ruta pacifista': `<div class="info-box">
                <strong>🌸 Ruta Pacifista:</strong>
                <ul class="info-list">
                    <li>No mates a ningún monstruo.</li>
                    <li>Usa ACT y PERDONAR en cada combate.</li>
                    <li>Hazte amigo de Papyrus, Undyne y Alphys.</li>
                    <li>Date una ducha con Undyne después de perseguirla.</li>
                    <li>Entrega la carta de Undyne a Papyrus.</li>
                    <li>Completa el Verdadero Laboratorio.</li>
                    <li>Enfrenta a Asgore y luego ayuda a todos.</li>
                </ul>
                <strong>✅ Final feliz:</strong> Todos los monstruos salen a la superficie y viven en paz.
            </div>`,

            'ruta neutral': `<div class="info-box">
                <strong>🌗 Ruta Neutral:</strong>
                <ul class="info-list">
                    <li>Combina muertes y perdones.</li>
                    <li>El final varía según tus decisiones.</li>
                    <li>Puedes enfrentar diferentes jefes finales.</li>
                    <li>Flowey puede tomar el control dependiendo de tus acciones.</li>
                </ul>
                <strong>❓ Resultado:</strong> Un final intermedio, generalmente incompleto.
            </div>`,

            'ruta genocida': `<div class="info-box">
                <strong>☠️ Ruta Genocida:</strong>
                <ul class="info-list">
                    <li>Mata a todos los monstruos en cada zona.</li>
                    <li>Sigue matando hasta que aparezca "Pero nadie vino".</li>
                    <li>En Snowdin, lucha contra Sans en el juicio.</li>
                    <li>En Waterfall, lucha contra Undyne the Undying.</li>
                    <li>En Hotland, enfréntate a un Mettaton más poderoso.</li>
                    <li>Finalmente, lucha contra Sans en una batalla extremadamente difícil.</li>
                </ul>
                <strong>❌ Final:</strong> Destruyes todo, el mundo se corrompe y Chara aparece.
            </div>`,

            // 🛠 Mecánicas
            'determinacion': `<div class="info-box">
                <strong>💡 Determinación:</strong>
                <ul class="info-list">
                    <li>Es la fuerza que te permite seguir adelante.</li>
                    <li>Te permite revivir después de morir.</li>
                    <li>Puedes guardar y reiniciar el juego gracias a ella.</li>
                    <li>Los humanos tienen naturalmente más determinación que los monstruos.</li>
                    <li>Flowey también tiene determinación, lo que le permite guardar y resetear.</li>
                </ul>
            </div>`,

            'perdonar': `<div class="info-box">
                <strong>🤝 PERDONAR:</strong>
                <ul class="info-list">
                    <li>Se usa en lugar de atacar durante los combates.</li>
                    <li>Permite salvar a los monstruos y evitar la violencia.</li>
                    <li>Es clave para completar la Ruta Pacifista.</li>
                    <li>Algunos personajes requieren acciones específicas antes de poder ser perdonados.</li>
                </ul>
            </div>`,

            'save': `<div class="info-box">
                <strong>💾 SAVE (Guardar):</strong>
                <ul class="info-list">
                    <li>Te permite guardar tu progreso en el juego.</li>
                    <li>En la historia, representa puntos de determinación.</li>
                    <li>Sans es consciente de que guardas y cargas partidas.</li>
                    <li>Flowey también recuerda tus resetes.</li>
                </ul>
            </div>`,

            'reset': `<div class="info-box">
                <strong>🔄 RESET (Reiniciar):</strong>
                <ul class="info-list">
                    <li>Te permite comenzar el juego desde el principio.</li>
                    <li>Algunos personajes tienen memoria de resetes anteriores.</li>
                    <li>Flowey recuerda todo lo que has hecho en lineas temporales anteriores.</li>
                    <li>Al final de la ruta Pacifista verdadera, se te pedirá que no resetees.</li>
                </ul>
            </div>`,

            'exp': `<div class="info-box">
                <strong>⭐ EXP (Puntos de Experiencia):</strong>
                <ul class="info-list">
                    <li>Se obtienen al matar monstruos.</li>
                    <li>Aumentan tu nivel de violencia (LOVE).</li>
                    <li>Con más EXP, infliges más daño.</li>
                    <li>En la ruta Pacifista, mantienes tu EXP en 0.</li>
                </ul>
            </div>`,

            'love': `<div class="info-box">
                <strong>❤️ LOVE (Nivel de Violencia):</strong>
                <ul class="info-list">
                    <li>Representa tu capacidad para desconectarte emocionalmente.</li>
                    <li>Aumenta con cada monstruo que matas.</li>
                    <li>Cada nivel de LOVE te hace más fuerte.</li>
                    <li>LOVE = Level Of ViolencE (Nivel de Violencia).</li>
                </ul>
            </div>`,

            // ❓ Preguntas comunes
            'quien es el jefe final': `Depende de la ruta:
                <ul class="info-list">
                    <li><strong>Ruta Neutral:</strong> Photoshop Flowey</li>
                    <li><strong>Ruta Pacifista:</strong> Asriel Dreemurr</li>
                    <li><strong>Ruta Genocida:</strong> Sans</li>
                </ul>`,

            'como derrotar a sans': `<div class="info-box">
                <strong>🎯 Cómo derrotar a Sans:</strong>
                <ul class="info-list">
                    <li>Necesitas mucha práctica y paciencia.</li>
                    <li>Aprende sus patrones de ataque.</li>
                    <li>Mantente determinado incluso después de morir muchas veces.</li>
                    <li>Usa la armadura más ligera y la arma más fuerte (normalmente la cuchilla real).</li>
                    <li>Consigue muchos objetos de curación (como la tarta del zapatero).</li>
                    <li>En la última fase, mantente moviéndote constantemente.</li>
                </ul>
                <em>¡Buena suerte! Es una de las batallas más difíciles en los videojuegos.</em>
            </div>`,

            'como derrotar a undyne': `<div class="info-box">
                <strong>🎯 Cómo derrotar a Undyne la Indestructible (Genocida):</strong>
                <ul class="info-list">
                    <li>Esquiva sus lanzas verdes manteniéndote dentro del círculo.</li>
                    <li>En la fase de corazones rojos, muévete rápidamente.</li>
                    <li>Usa objetos de curación cuando estés muy herido.</li>
                    <li>Ten paciencia, la batalla es larga.</li>
                    <li>La espada desgastada y el delantal pueden ayudar.</li>
                </ul>
            </div>`,

            'que pasa si mato a toriel': `Si matas a Toriel:
                <ul class="info-list">
                    <li>Flowey se impresionará por tu crueldad.</li>
                    <li>Cambia el diálogo de algunos personajes.</li>
                    <li>Si estás haciendo la ruta Pacifista, la arruinarás.</li>
                    <li>En la ruta Genocida, es necesario matarla.</li>
                </ul>`,

            'que pasa si no mato a nadie': `Si no matas a nadie:
                <ul class="info-list">
                    <li>Estás en camino a la ruta Pacifista.</li>
                    <li>Podrás hacer amigos con todos los personajes principales.</li>
                    <li>Desbloquearás el final verdadero.</li>
                    <li>Obtendrás el mejor final posible.</li>
                </ul>`,

            // 🎭 Emociones y roleo
            'te odio': `¡Oh! Eso duele... pero está bien. Todos tenemos sentimientos encontrados a veces.`,
            'eres malo': `¡Yo no soy malo! Solo... he tomado malas decisiones en el pasado. Ahora quiero ser mejor.`,
            'eres bueno': `¡Gracias! Estoy intentando ser mejor persona... bueno, mejor flor.`,
            'estoy triste': `Lamento que estés triste. ¿Quieres que te cuente un chiste para animarte?`,
            'estoy feliz': `¡Me alegra mucho oír eso! La felicidad es contagiosa.`,
            'estoy enojado': `Entiendo. A veces es difícil controlar la ira. ¿Quieres hablar de lo que pasó?`,
            
            // 🎵 Música y diversión
            'cantame una cancion': `¡Claro! 🎵 "Hace mucho tiempo, en el Monte Ebott, un humano cayó al subsuelo..." 🎵 Es todo lo que recuerdo por ahora.`,
            'cuentame un chiste': `¿Por qué Sans nunca corre? ¡Porque ya está "hueso" de cansado! ¡Nyeh heh heh!`,
            'cuentame una historia': `Érase una vez un príncipe que perdió todo lo que amaba. Se convirtió en una flor sin emociones, hasta que un humano especial le mostró que aún podía sentir amor.`,
            'nyeh heh heh': `¡Nyeh heh heh! Eso suena exactamente como Papyrus. ¡Es genial!`,
            
            // 🌌 Secretos y misterios
            'gaster': `W.D. Gaster era el científico real antes de Alphys. Tuvo un accidente y fue borrado de la existencia. Solo se le menciona en fragmentos ocultos del juego.`,
            'megalovania': `¡Megalovania! Esa es la canción que suena durante la batalla contra Sans. ¿Sabías que Toby Fox la compuso mucho antes de Undertale?`,
            
            // ❓ Preguntas filosóficas
            'tienes alma': `Como flor, no tengo alma. Pero antes, cuando era... otra cosa, sí tenía. Extraño tener alma.`,
            'eres real': `¡Claro que soy real! Tan real como cualquier personaje de videojuego puede serlo.`,
            'puedes morir': `He muerto muchas veces, pero siempre vuelvo gracias a la determinación. Es una maldición y una bendición.`,
            
            // Default
            'default': 'Hmm… no estoy seguro de entender. ¿Podrías explicarlo de otra manera? ¿O quizás preguntar sobre algo más?'
        }
    }
};

// Obtener elementos del DOM
const chatContainer = document.getElementById('chat-container');
const chatInput = document.getElementById('chat-input');
const userAvatar = 'https://i.imgur.com/rLz9sUe.png';

// Función para mostrar mensajes del personaje
function showCharacterMessage(messageText) {
    const character = characterData['flowey_bueno'];
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message character';
    messageDiv.innerHTML = `
        <img class="avatar" src="${character.image}" alt="${character.name}">
        <div class="message-text">
            <p><strong style="color:${character.color};">${character.name}:</strong> ${messageText}</p>
        </div>
    `;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Función para mostrar mensajes del usuario
function showUserMessage(messageText) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message self';
    messageDiv.innerHTML = `
        <img class="avatar" src="${userAvatar}" alt="Tú">
        <div class="message-text">
            <p><strong style="color:#ffff00;">Tú:</strong> ${messageText}</p>
        </div>
    `;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Función principal para manejar los mensajes
function handleSendMessage() {
    const message = chatInput.value.trim().toLowerCase();
    if (message === '') return;

    showUserMessage(chatInput.value);
    chatInput.value = '';

    let responseText = characterData['flowey_bueno'].responses['default'];

    // Buscar coincidencia en las respuestas
    for (const key in characterData['flowey_bueno'].responses) {
        if (message.includes(key)) {
            responseText = characterData['flowey_bueno'].responses[key];
            break;
        }
    }
    
    // Pequeña demora para simular que está pensando
    setTimeout(() => {
        showCharacterMessage(responseText);
    }, 500);
}

// Event listener para la tecla Enter
chatInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSendMessage();
    }
});

// Enfocar el input al cargar
window.onload = function() {
    chatInput.focus();
};
