    // Animación de fondo de estrellas
        const canvas = document.getElementById('stars');
        const ctx = canvas.getContext('2d');
        let stars = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function createStars() {
            stars = [];
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    speed: Math.random() * 0.5 + 0.1
                });
            }
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#fff';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;
            });
            requestAnimationFrame(drawStars);
        }

        createStars();
        drawStars();

        // Datos de los cuerpos celestes
        const infoCuerpos = {
            sol: {
                nombre: "El Sol",
                icono: '<i class="fas fa-sun"></i>',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
                descripcion: "El Sol es la estrella más cercana a la Tierra y la fuente principal de energía del sistema solar."
            },
            luna: {
                nombre: "La Luna",
                icono: '<i class="fas fa-moon"></i>',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
                descripcion: "La Luna es el único satélite natural de la Tierra y es responsable de las mareas."
            },
            mercurio: {
                nombre: "Mercurio",
                icono: '',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/800px-Mercury_in_color_-_Prockter07_centered.jpg",
                descripcion: "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar."
            },
            venus: {
                nombre: "Venus",
                icono: '',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
                descripcion: "Venus es el planeta más caliente del sistema solar, con una densa atmósfera de dióxido de carbono."
            },
            tierra: {
                nombre: "La Tierra",
                icono: '<i class="fas fa-globe"></i>',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
                descripcion: "La Tierra es el único planeta conocido que alberga vida, con una atmósfera rica en oxígeno."
            },
            marte: {
                nombre: "Marte",
                icono: '',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
                descripcion: "Marte es conocido como el planeta rojo por su color característico debido al óxido de hierro."
            },
            jupiter: {
                nombre: "Júpiter",
                icono: '',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
                descripcion: "Júpiter es el planeta más grande del sistema solar, con una gran mancha roja de tormenta gigante."
            },
            saturno: {
                nombre: "Saturno",
                icono: '',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
                descripcion: "Saturno es famoso por su sistema de anillos compuestos de hielo y roca."
            },
            urano: {
                nombre: "Urano",
                icono: '',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
                descripcion: "Urano es un gigante gaseoso con un eje de rotación muy inclinado, casi tumbado."
            },
            neptuno: {
                nombre: "Neptuno",
                icono: '',
                imagen: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
                descripcion: "Neptuno es un planeta helado y ventoso, el más lejano del Sol en el sistema solar."
            }
        };

        function mostrarCuerpo() {
            const seleccion = document.getElementById('cuerpo').value;
            const card = document.getElementById('card');
            const titulo = document.getElementById('titulo');
            const imagen = document.getElementById('imagen');
            const description = document.getElementById('description');
            const exploreBtn = card.querySelector('.explore-btn');

            // Resetear clases
            card.classList.remove('loaded');
            imagen.classList.remove('loaded');

            if (infoCuerpos[seleccion]) {
                const cuerpo = infoCuerpos[seleccion];
                titulo.innerHTML = `${cuerpo.icono} ${cuerpo.nombre}`;
                imagen.src = cuerpo.imagen;
                imagen.alt = cuerpo.nombre;
                description.textContent = cuerpo.descripcion;
                if (exploreBtn) exploreBtn.remove(); // Eliminar botón al seleccionar un cuerpo

                // Activar animaciones
                setTimeout(() => {
                    card.classList.add('loaded');
                    imagen.classList.add('loaded');
                }, 100);
            } else {
                // Mostrar información de la galaxia por defecto
                titulo.innerHTML = '<i class="fas fa-circle-notch galaxy-icon"></i> La Vía Láctea';
                imagen.src = 'https://humanidades.com/wp-content/uploads/2018/08/via-lactea-e1535495054860.jpg';
                imagen.alt = 'Vía Láctea';
                description.textContent = 'La Vía Láctea es nuestra galaxia, un hogar cósmico con más de 100 mil millones de estrellas. Su belleza en forma de espiral y su inmensidad nos invitan a explorar los misterios del universo.';
                if (!exploreBtn) {
                    const btn = document.createElement('a');
                    btn.href = '#cuerpo';
                    btn.className = 'explore-btn';
                    btn.textContent = '¡Comienza tu viaje!';
                    card.appendChild(btn);
                }

                // Activar animaciones
                setTimeout(() => {
                    card.classList.add('loaded');
                    imagen.classList.add('loaded');
                }, 100);
            }
        }

        // Cargar la galaxia por defecto al iniciar
        document.addEventListener('DOMContentLoaded', () => {
            mostrarCuerpo();
        });