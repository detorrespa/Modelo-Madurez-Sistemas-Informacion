// Application Data
const maturityLevels = [
    {
        level: 1,
        name: "Reactivo",
        description: "Tecnología solo para resolver problemas urgentes. Sin estrategia clara.",
        color: "#ef4444"
    },
    {
        level: 2,
        name: "Eficiencia", 
        description: "Automatización de procesos existentes. Enfoque en reducción de costes.",
        color: "#f97316"
    },
    {
        level: 3,
        name: "Integración",
        description: "Sistemas conectados. Datos compartidos entre departamentos.",
        color: "#eab308"
    },
    {
        level: 4,
        name: "Innovación",
        description: "Tecnología habilita nuevos productos y servicios. Experimentación activa.",
        color: "#22c55e"
    },
    {
        level: 5,
        name: "Transformación",
        description: "Modelo de negocio nativo digital. Ecosistema completamente conectado.",
        color: "#3b82f6"
    }
];

const dimensions = [
    {
        id: "strategy",
        name: "Estrategia Digital",
        icon: "🎯",
        description: "¿Existe una visión clara de cómo la tecnología crea ventaja competitiva? ¿Está alineada con objetivos de negocio?",
        questions: [
            {
                id: "strategy_revenue",
                text: "¿Cuánto % de ingresos viene de productos/servicios digitales?",
                type: "scale"
            },
            {
                id: "strategy_leadership", 
                text: "¿Qué % del leadership tiene experiencia digital?",
                type: "scale"
            },
            {
                id: "strategy_plan",
                text: "¿Existe un plan estratégico digital documentado?",
                type: "scale"
            },
            {
                id: "strategy_budget",
                text: "¿Se asigna presupuesto específico para innovación digital?",
                type: "scale"
            }
        ]
    },
    {
        id: "talent",
        name: "Talento y Cultura",
        icon: "👥", 
        description: "¿El equipo tiene competencias digitales? ¿La organización abraza la experimentación y el cambio?",
        questions: [
            {
                id: "talent_certifications",
                text: "¿Qué % del equipo tiene certificaciones digitales?",
                type: "scale"
            },
            {
                id: "talent_experimentation",
                text: "¿Se promueve la experimentación y tolerancia al error?",
                type: "scale"
            },
            {
                id: "talent_roles",
                text: "¿Existen roles específicos de transformación digital?",
                type: "scale"
            },
            {
                id: "talent_adoption",
                text: "¿Se mide la adopción de nuevas tecnologías?",
                type: "scale"
            }
        ]
    },
    {
        id: "data",
        name: "Datos y Analytics",
        icon: "📊",
        description: "¿Los datos son un activo estratégico? ¿Se usan para tomar decisiones y crear nuevas oportunidades?",
        questions: [
            {
                id: "data_insights",
                text: "¿Cuánto tardan en obtener insights accionables de sus datos?",
                type: "scale"
            },
            {
                id: "data_strategy",
                text: "¿Existe una estrategia de datos documentada?",
                type: "scale"
            },
            {
                id: "data_predictive",
                text: "¿Se utilizan analytics predictivos en la toma de decisiones?",
                type: "scale"
            },
            {
                id: "data_unified",
                text: "¿Los datos están unificados y accesibles?",
                type: "scale"
            }
        ]
    },
    {
        id: "architecture",
        name: "Arquitectura Tecnológica",
        icon: "🏗️",
        description: "¿Los sistemas son ágiles y escalables? ¿Permiten innovación rápida o son un obstáculo?",
        questions: [
            {
                id: "arch_deployment",
                text: "¿Cuánto tiempo necesitan para lanzar una nueva funcionalidad?",
                type: "scale"
            },
            {
                id: "arch_cloud",
                text: "¿Los sistemas son cloud-native o legacy?",
                type: "scale"
            },
            {
                id: "arch_microservices",
                text: "¿Existe arquitectura de microservicios?",
                type: "scale"
            },
            {
                id: "arch_devops",
                text: "¿Se practican metodologías DevOps?",
                type: "scale"
            }
        ]
    },
    {
        id: "customer",
        name: "Experiencia del Cliente",
        icon: "👤",
        description: "¿La tecnología mejora significativamente la experiencia? ¿Está integrada en todos los touchpoints?",
        questions: [
            {
                id: "customer_digital",
                text: "¿Qué % de interacciones con clientes son digitales?",
                type: "scale"
            },
            {
                id: "customer_omnichannel",
                text: "¿Existe omnicanalidad real?",
                type: "scale"
            },
            {
                id: "customer_personalization",
                text: "¿Se personaliza la experiencia basada en datos?",
                type: "scale"
            },
            {
                id: "customer_selfservice",
                text: "¿Los clientes pueden auto-servirse digitalmente?",
                type: "scale"
            }
        ]
    },
    {
        id: "ecosystem",
        name: "Ecosistema de Partners",
        icon: "🤝",
        description: "¿La empresa colabora efectivamente con partners tecnológicos? ¿Participa en ecosistemas digitales?",
        questions: [
            {
                id: "ecosystem_apis",
                text: "¿Cuántas integraciones de API han implementado este año?",
                type: "scale"
            },
            {
                id: "ecosystem_platforms",
                text: "¿Participan en plataformas o marketplaces digitales?",
                type: "scale"
            },
            {
                id: "ecosystem_startups",
                text: "¿Colaboran con startups o fintechs?",
                type: "scale"
            },
            {
                id: "ecosystem_datasharing",
                text: "¿Comparten datos con partners de forma segura?",
                type: "scale"
            }
        ]
    }
];

const actionPlans = {
    "1": {
        level: "Reactivo",
        priorities: ["Establecer estrategia digital", "Evaluar sistemas actuales", "Capacitar equipo básico"],
        actions: [
            "Definir visión y objetivos digitales",
            "Realizar inventario de sistemas actuales", 
            "Implementar herramientas básicas de colaboración",
            "Establecer métricas básicas de desempeño"
        ],
        timeline: "3-6 meses",
        budget: "Bajo (10k-50k€)"
    },
    "2": {
        level: "Eficiencia", 
        priorities: ["Automatizar procesos", "Integrar sistemas", "Mejorar analítica básica"],
        actions: [
            "Implementar RPA para procesos repetitivos",
            "Conectar sistemas desintegrados",
            "Establecer dashboards operativos",
            "Capacitar equipos en herramientas digitales"
        ],
        timeline: "6-12 meses",
        budget: "Medio (50k-200k€)"
    },
    "3": {
        level: "Integración",
        priorities: ["Plataforma de datos", "APIs", "Experiencia omnicanal"],
        actions: [
            "Crear data warehouse centralizado",
            "Desarrollar APIs para integración",
            "Implementar CRM/ERP integrado",
            "Mejorar experiencia cliente digital"
        ],
        timeline: "9-18 meses", 
        budget: "Medio-Alto (200k-500k€)"
    },
    "4": {
        level: "Innovación",
        priorities: ["AI/ML", "Nuevos modelos negocio", "Cultura innovación"],
        actions: [
            "Implementar soluciones AI/ML",
            "Desarrollar productos digitales",
            "Crear lab de innovación",
            "Establecer partnerships tecnológicos"
        ],
        timeline: "12-24 meses",
        budget: "Alto (500k-1M€)"
    },
    "5": {
        level: "Transformación",
        priorities: ["Ecosistema digital", "Optimización continua", "Liderazgo sector"],
        actions: [
            "Crear plataforma ecosistema",
            "Optimización con IA avanzada",
            "Monetizar datos como producto",
            "Liderar transformación sectorial"
        ],
        timeline: "18-36 meses",
        budget: "Muy Alto (+1M€)"
    }
};

// Application State
let currentDimensionIndex = 0;
let evaluationData = {};
let results = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    showPage('home');
});

function initializeEventListeners() {
    // Navigation
    const homeBtn = document.getElementById('homeBtn');
    const startBtn = document.getElementById('startEvaluationBtn');
    const restartBtn = document.getElementById('restartBtn');

    if (homeBtn) {
        homeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('home');
        });
    }
    
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            startEvaluation();
        });
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('home');
        });
    }

    // Evaluation navigation
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            previousDimension();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextDimension();
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            calculateResults();
        });
    }

    // Results
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generatePDF();
        });
    }
}

function showPage(pageName) {
    // Get page elements
    const homePage = document.getElementById('homePage');
    const evaluationPage = document.getElementById('evaluationPage');
    const resultsPage = document.getElementById('resultsPage');
    
    // Hide all pages
    if (homePage) homePage.classList.remove('active');
    if (evaluationPage) evaluationPage.classList.remove('active');
    if (resultsPage) resultsPage.classList.remove('active');
    
    // Show target page
    if (pageName === 'home' && homePage) {
        homePage.classList.add('active');
    } else if (pageName === 'evaluation' && evaluationPage) {
        evaluationPage.classList.add('active');
    } else if (pageName === 'results' && resultsPage) {
        resultsPage.classList.add('active');
    }
}

function startEvaluation() {
    currentDimensionIndex = 0;
    evaluationData = {};
    showPage('evaluation');
    loadDimension(currentDimensionIndex);
}

function loadDimension(index) {
    const dimension = dimensions[index];
    
    // Update dimension info
    const titleEl = document.getElementById('dimensionTitle');
    const descEl = document.getElementById('dimensionDescription');
    const iconEl = document.querySelector('.dimension-icon');

    if (titleEl) titleEl.textContent = dimension.name;
    if (descEl) descEl.textContent = dimension.description;
    if (iconEl) iconEl.textContent = dimension.icon;

    // Update progress
    const progressPercent = ((index + 1) / dimensions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    if (progressFill) progressFill.style.width = progressPercent + '%';
    if (progressText) progressText.textContent = `Dimensión ${index + 1} de ${dimensions.length}`;

    // Load questions
    loadQuestions(dimension);

    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (prevBtn) prevBtn.disabled = index === 0;
    
    if (index === dimensions.length - 1) {
        if (nextBtn) nextBtn.style.display = 'none';
        if (submitBtn) submitBtn.style.display = 'inline-flex';
    } else {
        if (nextBtn) nextBtn.style.display = 'inline-flex';
        if (submitBtn) submitBtn.style.display = 'none';
    }
}

function loadQuestions(dimension) {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    container.innerHTML = '';

    dimension.questions.forEach((question) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        questionDiv.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="question-scale">
                ${Array.from({length: 5}, (_, i) => {
                    const value = i + 1;
                    return `
                        <div class="scale-option">
                            <input type="radio" id="${question.id}_${value}" name="${question.id}" value="${value}">
                            <label for="${question.id}_${value}">${value}</label>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="scale-labels">
                <span>1 - Muy bajo</span>
                <span>2 - Bajo</span>
                <span>3 - Medio</span>
                <span>4 - Alto</span>
                <span>5 - Muy alto</span>
            </div>
        `;
        
        container.appendChild(questionDiv);
    });

    // Restore previous answers if they exist
    if (evaluationData[dimension.id]) {
        dimension.questions.forEach(question => {
            const value = evaluationData[dimension.id][question.id];
            if (value) {
                const radio = document.querySelector(`input[name="${question.id}"][value="${value}"]`);
                if (radio) radio.checked = true;
            }
        });
    }
}

function saveDimensionData() {
    const dimension = dimensions[currentDimensionIndex];
    
    if (!evaluationData[dimension.id]) {
        evaluationData[dimension.id] = {};
    }

    dimension.questions.forEach(question => {
        const selectedRadio = document.querySelector(`input[name="${question.id}"]:checked`);
        if (selectedRadio) {
            evaluationData[dimension.id][question.id] = parseInt(selectedRadio.value);
        }
    });
}

function validateCurrentDimension() {
    const dimension = dimensions[currentDimensionIndex];
    return dimension.questions.every(question => {
        return document.querySelector(`input[name="${question.id}"]:checked`) !== null;
    });
}

function previousDimension() {
    if (currentDimensionIndex > 0) {
        saveDimensionData();
        currentDimensionIndex--;
        loadDimension(currentDimensionIndex);
    }
}

function nextDimension() {
    if (!validateCurrentDimension()) {
        alert('Por favor, responda todas las preguntas antes de continuar.');
        return;
    }

    saveDimensionData();
    
    if (currentDimensionIndex < dimensions.length - 1) {
        currentDimensionIndex++;
        loadDimension(currentDimensionIndex);
    }
}

function calculateResults() {
    if (!validateCurrentDimension()) {
        alert('Por favor, responda todas las preguntas antes de continuar.');
        return;
    }

    saveDimensionData();

    // Calculate dimension scores
    results.dimensions = {};
    let totalScore = 0;

    dimensions.forEach(dimension => {
        const dimensionData = evaluationData[dimension.id];
        const scores = Object.values(dimensionData);
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        
        results.dimensions[dimension.id] = {
            name: dimension.name,
            icon: dimension.icon,
            score: Math.round(average * 10) / 10,
            level: Math.round(average)
        };
        
        totalScore += average;
    });

    // Calculate overall score
    results.overall = {
        score: Math.round((totalScore / dimensions.length) * 10) / 10,
        level: Math.round(totalScore / dimensions.length)
    };

    showResults();
}

function showResults() {
    showPage('results');

    // Update overall score
    const overallLevel = maturityLevels.find(level => level.level === results.overall.level);
    const overallLevelEl = document.getElementById('overallLevel');
    const overallNameEl = document.getElementById('overallLevelName');
    const overallDescEl = document.getElementById('overallLevelDescription');

    if (overallLevelEl) overallLevelEl.textContent = results.overall.score;
    if (overallNameEl) overallNameEl.textContent = overallLevel.name;
    if (overallDescEl) overallDescEl.textContent = overallLevel.description;

    // Update dimension scores
    const scoresContainer = document.getElementById('dimensionScores');
    if (scoresContainer) {
        scoresContainer.innerHTML = '';

        Object.entries(results.dimensions).forEach(([dimensionId, data]) => {
            const scoreItem = document.createElement('div');
            scoreItem.className = 'dimension-score-item';
            scoreItem.innerHTML = `
                <span class="icon">${data.icon}</span>
                <span class="name">${data.name}</span>
                <span class="score">${data.score}</span>
            `;
            scoresContainer.appendChild(scoreItem);
        });
    }

    // Generate radar chart
    generateRadarChart();

    // Generate analysis
    generateAnalysis();

    // Generate action plan
    generateActionPlan();
}

function generateRadarChart() {
    const canvas = document.getElementById('radarChart');
    if (!canvas || !window.Chart) return;

    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart if it exists
    if (window.radarChartInstance) {
        window.radarChartInstance.destroy();
    }

    const chartData = {
        labels: dimensions.map(d => d.name),
        datasets: [{
            label: 'Puntuación Actual',
            data: dimensions.map(d => results.dimensions[d.id].score),
            fill: true,
            backgroundColor: 'rgba(31, 184, 205, 0.2)',
            borderColor: '#1FB8CD',
            pointBackgroundColor: '#1FB8CD',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#1FB8CD'
        }]
    };

    const config = {
        type: 'radar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    };

    window.radarChartInstance = new Chart(ctx, config);
}

function generateAnalysis() {
    const analysisContainer = document.getElementById('analysisContent');
    if (!analysisContainer) return;
    
    // Find strengths (scores >= 4)
    const strengths = Object.entries(results.dimensions)
        .filter(([_, data]) => data.score >= 4)
        .map(([_, data]) => data.name);

    // Find improvement areas (scores < 3)
    const improvements = Object.entries(results.dimensions)
        .filter(([_, data]) => data.score < 3)
        .map(([_, data]) => data.name);

    let analysisHTML = '<h4>Fortalezas Identificadas</h4>';
    
    if (strengths.length > 0) {
        strengths.forEach(strength => {
            analysisHTML += `<div class="strength-item">✅ <strong>${strength}</strong> - Excelente nivel de madurez en esta dimensión</div>`;
        });
    } else {
        analysisHTML += `<div class="strength-item">💡 Su organización tiene potencial de crecimiento en todas las dimensiones evaluadas</div>`;
    }

    analysisHTML += '<h4>Áreas de Mejora Prioritarias</h4>';
    
    if (improvements.length > 0) {
        improvements.forEach(improvement => {
            analysisHTML += `<div class="improvement-item">⚠️ <strong>${improvement}</strong> - Requiere atención inmediata para avanzar</div>`;
        });
    } else {
        analysisHTML += `<div class="improvement-item">🎉 ¡Felicitaciones! Su organización muestra un nivel sólido en todas las dimensiones</div>`;
    }

    analysisContainer.innerHTML = analysisHTML;
}

function generateActionPlan() {
    const actionPlanContainer = document.getElementById('actionPlanContent');
    if (!actionPlanContainer) return;

    const currentLevel = results.overall.level;
    const nextLevel = Math.min(currentLevel + 1, 5);
    
    const currentPlan = actionPlans[currentLevel.toString()];
    const nextPlan = actionPlans[nextLevel.toString()];

    let actionHTML = `
        <div class="action-priority">
            <h4>Nivel Actual: ${currentPlan.level}</h4>
            <p><strong>Cronograma:</strong> ${currentPlan.timeline}</p>
            <p><strong>Presupuesto Estimado:</strong> ${currentPlan.budget}</p>
        </div>
    `;

    if (nextLevel <= 5) {
        actionHTML += `
            <div class="action-priority">
                <h4>Objetivo: Alcanzar Nivel ${nextLevel} - ${nextPlan.level}</h4>
                <h5>Prioridades Clave:</h5>
                <ul class="action-list">
                    ${nextPlan.priorities.map(priority => `<li>${priority}</li>`).join('')}
                </ul>
                <h5>Acciones Recomendadas:</h5>
                <ul class="action-list">
                    ${nextPlan.actions.map(action => `<li>${action}</li>`).join('')}
                </ul>
                <p><strong>Cronograma:</strong> ${nextPlan.timeline}</p>
                <p><strong>Presupuesto Estimado:</strong> ${nextPlan.budget}</p>
            </div>
        `;
    }

    actionPlanContainer.innerHTML = actionHTML;
}

function generatePDF() {
    if (!window.jspdf) {
        alert('PDF library not loaded. Please try again.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // PDF Configuration
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPos = margin;

    // Title
    doc.setFontSize(24);
    doc.setTextColor(30, 58, 138);
    doc.text('Informe de Madurez Digital', pageWidth / 2, yPos, { align: 'center' });
    yPos += 20;

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Sistemas de Información', pageWidth / 2, yPos, { align: 'center' });
    yPos += 30;

    // Overall Score
    doc.setFontSize(18);
    doc.setTextColor(30, 58, 138);
    doc.text('Resumen Ejecutivo', margin, yPos);
    yPos += 15;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const overallLevel = maturityLevels.find(level => level.level === results.overall.level);
    doc.text(`Nivel de Madurez Promedio: ${results.overall.score} - ${overallLevel.name}`, margin, yPos);
    yPos += 10;

    const description = doc.splitTextToSize(overallLevel.description, pageWidth - 2 * margin);
    doc.text(description, margin, yPos);
    yPos += description.length * 5 + 10;

    // Dimension Scores
    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('Puntuaciones por Dimensión', margin, yPos);
    yPos += 15;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    Object.entries(results.dimensions).forEach(([dimensionId, data]) => {
        doc.text(`${data.icon} ${data.name}: ${data.score}/5`, margin, yPos);
        yPos += 8;
    });
    yPos += 10;

    // Analysis
    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('Análisis y Recomendaciones', margin, yPos);
    yPos += 15;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Strengths
    const strengths = Object.entries(results.dimensions)
        .filter(([_, data]) => data.score >= 4)
        .map(([_, data]) => data.name);

    if (strengths.length > 0) {
        doc.text('Fortalezas:', margin, yPos);
        yPos += 8;
        strengths.forEach(strength => {
            doc.text(`• ${strength}`, margin + 10, yPos);
            yPos += 6;
        });
        yPos += 5;
    }

    // Improvements
    const improvements = Object.entries(results.dimensions)
        .filter(([_, data]) => data.score < 3)
        .map(([_, data]) => data.name);

    if (improvements.length > 0) {
        doc.text('Áreas de Mejora:', margin, yPos);
        yPos += 8;
        improvements.forEach(improvement => {
            doc.text(`• ${improvement}`, margin + 10, yPos);
            yPos += 6;
        });
        yPos += 5;
    }

    // Action Plan
    if (yPos > 200) {
        doc.addPage();
        yPos = margin;
    }

    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('Plan de Acción', margin, yPos);
    yPos += 15;

    const currentLevel = results.overall.level;
    const nextLevel = Math.min(currentLevel + 1, 5);
    const nextPlan = actionPlans[nextLevel.toString()];

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    if (nextLevel <= 5) {
        doc.text(`Objetivo: Alcanzar Nivel ${nextLevel} - ${nextPlan.level}`, margin, yPos);
        yPos += 10;

        doc.text('Prioridades Clave:', margin, yPos);
        yPos += 8;
        nextPlan.priorities.forEach(priority => {
            doc.text(`• ${priority}`, margin + 10, yPos);
            yPos += 6;
        });
        yPos += 5;

        doc.text('Acciones Recomendadas:', margin, yPos);
        yPos += 8;
        nextPlan.actions.forEach(action => {
            const actionText = doc.splitTextToSize(`• ${action}`, pageWidth - 2 * margin - 10);
            doc.text(actionText, margin + 10, yPos);
            yPos += actionText.length * 6;
        });
        yPos += 10;

        doc.text(`Cronograma: ${nextPlan.timeline}`, margin, yPos);
        yPos += 8;
        doc.text(`Presupuesto Estimado: ${nextPlan.budget}`, margin, yPos);
    }

    // Footer
    const currentDate = new Date().toLocaleDateString('es-ES');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generado el ${currentDate}`, margin, doc.internal.pageSize.height - 10);

    // Save PDF
    doc.save('informe-madurez-digital.pdf');
}