// Collatz Conjecture Visualizer
let collatzChart = null;

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('collatzInput');
    const generateBtn = document.getElementById('generateBtn');
    const sequenceInfo = document.getElementById('sequenceInfo');
    const sequenceSteps = document.getElementById('sequenceSteps');

    // Generate on button click
    if (generateBtn) {
        generateBtn.addEventListener('click', generateCollatzSequence);
    }

    // Generate on Enter key
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateCollatzSequence();
            }
        });

        // Generate initial sequence on page load
        generateCollatzSequence();
    }
});

function generateCollatzSequence() {
    const input = document.getElementById('collatzInput');
    const sequenceInfo = document.getElementById('sequenceInfo');
    const sequenceSteps = document.getElementById('sequenceSteps');

    let n = parseInt(input.value);

    // Validate input
    if (isNaN(n) || n < 1) {
        sequenceInfo.innerHTML = '<p class="error">Please enter a positive integer.</p>';
        sequenceSteps.innerHTML = '';
        return;
    }

    if (n > 10000) {
        sequenceInfo.innerHTML = '<p class="error">Please enter a number less than or equal to 10,000.</p>';
        return;
    }

    // Generate the Collatz sequence
    const sequence = [n];
    const startingNumber = n;
    let steps = 0;
    let maxValue = n;

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        sequence.push(n);
        steps++;
        if (n > maxValue) {
            maxValue = n;
        }

        // Safety check to prevent infinite loops
        if (steps > 10000) {
            sequenceInfo.innerHTML = '<p class="error">Sequence exceeded maximum steps.</p>';
            return;
        }
    }

    // Display sequence information
    sequenceInfo.innerHTML = `
        <div class="info-grid-inline">
            <div class="info-item">
                <strong>Starting Number:</strong> ${startingNumber}
            </div>
            <div class="info-item">
                <strong>Steps to 1:</strong> ${steps}
            </div>
            <div class="info-item">
                <strong>Maximum Value:</strong> ${maxValue}
            </div>
        </div>
    `;

    // Display sequence steps (limit to first 50 for readability)
    const displayLimit = 50;
    let stepsHTML = '<div class="steps-list">';
    for (let i = 0; i < Math.min(sequence.length, displayLimit); i++) {
        stepsHTML += `<span class="step-number">${sequence[i]}</span>`;
        if (i < Math.min(sequence.length, displayLimit) - 1) {
            stepsHTML += ' → ';
        }
    }
    if (sequence.length > displayLimit) {
        stepsHTML += ` ... (${sequence.length - displayLimit} more steps)`;
    }
    stepsHTML += '</div>';
    sequenceSteps.innerHTML = stepsHTML;

    // Create the chart
    createCollatzChart(sequence, startingNumber);
}

function createCollatzChart(sequence, startingNumber) {
    const ctx = document.getElementById('collatzChart');

    if (!ctx) return;

    // Destroy existing chart if it exists
    if (collatzChart) {
        collatzChart.destroy();
    }

    // Prepare data
    const labels = sequence.map((_, index) => index);

    collatzChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `Collatz Sequence (starting from ${startingNumber})`,
                data: sequence,
                borderColor: '#5bc0be',
                backgroundColor: 'rgba(91, 192, 190, 0.1)',
                borderWidth: 2,
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBackgroundColor: '#5bc0be',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('color') || '#1c2541',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(28, 37, 65, 0.9)',
                    titleColor: '#6fffe9',
                    bodyColor: '#fff',
                    borderColor: '#5bc0be',
                    borderWidth: 1,
                    callbacks: {
                        title: function(context) {
                            return `Step ${context[0].label}`;
                        },
                        label: function(context) {
                            return `Value: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Step Number',
                        color: getComputedStyle(document.body).getPropertyValue('color') || '#1c2541',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: getComputedStyle(document.body).getPropertyValue('color') || '#1c2541'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value',
                        color: getComputedStyle(document.body).getPropertyValue('color') || '#1c2541',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: getComputedStyle(document.body).getPropertyValue('color') || '#1c2541'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });

    // Update chart colors when dark mode is toggled
    updateChartColors();
}

function updateChartColors() {
    if (!collatzChart) return;

    const textColor = getComputedStyle(document.body).color;

    collatzChart.options.plugins.legend.labels.color = textColor;
    collatzChart.options.scales.x.title.color = textColor;
    collatzChart.options.scales.x.ticks.color = textColor;
    collatzChart.options.scales.y.title.color = textColor;
    collatzChart.options.scales.y.ticks.color = textColor;

    collatzChart.update();
}

// Update chart colors when dark mode is toggled
if (document.getElementById('darkModeToggle')) {
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        setTimeout(updateChartColors, 100);
    });
}
