// JavaScript para mostrar la imagen y la descripción del proceso de fabricación
const steps = document.querySelectorAll('.step');
const processImage = document.getElementById('process-image');
const processDescription = document.getElementById('process-description');
const processDisplay = document.querySelector('.process-display');

// Datos de cada paso
const stepData = {
    1: {
        image: 'hueso-recoleccion.jpg',
        description: 'El proceso comienza con la recolección de huesos de aguacate. Estos se almacenan y preparan para la siguiente etapa del proceso.'
    },
    2: {
        image: 'extraccion-almidon.jpg',
        description: 'Los huesos se rallan y hierven en agua hasta que adquieren un color naranja. Luego se tritura para extraer el almidón necesario.'
    },
    3: {
        image: 'mezcla-grenetina-glicerina.jpg',
        description: 'El almidón extraído se mezcla con grenetina y glicerina para formar la base del biopolímero, que será moldeado en la siguiente fase.'
    },
    4: {
        image: 'moldeado-espiral.jpg',
        description: 'El biopolímero resultante se introduce en moldes y utilizando tecnología de soplado se da forma a la botella con un diseño en espiral.'
    }
};

// Evento al hacer clic en un paso
steps.forEach(step => {
    step.addEventListener('click', () => {
        const stepNumber = step.getAttribute('data-step');
        const { image, description } = stepData[stepNumber];
        
        // Mostrar imagen y descripción del paso seleccionado
        processImage.src = image;
        processDescription.textContent = description;
        processDisplay.style.display = 'flex'; // Mostrar la sección de visualización
    });
});
