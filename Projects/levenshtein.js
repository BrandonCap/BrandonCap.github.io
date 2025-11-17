// Levenshtein Edit Distance Calculator

document.addEventListener('DOMContentLoaded', function() {
    const string1Input = document.getElementById('string1');
    const string2Input = document.getElementById('string2');
    const calculateBtn = document.getElementById('calculateBtn');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateLevenshteinDistance);
    }

    // Calculate on Enter key
    if (string1Input) {
        string1Input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateLevenshteinDistance();
            }
        });
    }

    if (string2Input) {
        string2Input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateLevenshteinDistance();
            }
        });
    }

    // Calculate initial result on page load
    calculateLevenshteinDistance();
});

function calculateLevenshteinDistance() {
    const string1Input = document.getElementById('string1');
    const string2Input = document.getElementById('string2');
    const resultDisplay = document.getElementById('resultDisplay');
    const matrixDisplay = document.getElementById('matrixDisplay');
    const operationsDisplay = document.getElementById('operationsDisplay');

    const str1 = string1Input.value;
    const str2 = string2Input.value;

    // Validate input
    if (str1.length === 0 && str2.length === 0) {
        resultDisplay.innerHTML = '<p class="info-message">Please enter at least one string.</p>';
        matrixDisplay.innerHTML = '';
        operationsDisplay.innerHTML = '';
        return;
    }

    // Check string length for performance
    if (str1.length > 50 || str2.length > 50) {
        resultDisplay.innerHTML = '<p class="warning">For better visualization, please use strings with 50 or fewer characters.</p>';
        matrixDisplay.innerHTML = '';
        operationsDisplay.innerHTML = '';
        return;
    }

    // Calculate Levenshtein distance with full matrix
    const result = levenshteinWithMatrix(str1, str2);
    const distance = result.distance;
    const matrix = result.matrix;

    // Display result
    resultDisplay.innerHTML = `
        <div class="result-card">
            <h3>Edit Distance: <span class="highlight">${distance}</span></h3>
            <p>It takes <strong>${distance}</strong> edit operation${distance !== 1 ? 's' : ''} to transform
            "<strong>${str1}</strong>" into "<strong>${str2}</strong>".</p>
        </div>
    `;

    // Display matrix
    displayMatrix(matrix, str1, str2, matrixDisplay);

    // Trace back the operations
    const operations = tracebackOperations(matrix, str1, str2);
    displayOperations(operations, str1, str2, operationsDisplay);
}

function levenshteinWithMatrix(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Create matrix
    const matrix = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Initialize first row and column
    for (let i = 0; i <= m; i++) {
        matrix[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        matrix[0][j] = j;
    }

    // Fill the matrix
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,     // deletion
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j - 1] + 1  // substitution
                );
            }
        }
    }

    return {
        distance: matrix[m][n],
        matrix: matrix
    };
}

function displayMatrix(matrix, str1, str2, container) {
    let html = '<table class="levenshtein-matrix"><thead><tr><th></th><th>ε</th>';

    // Header row with str2 characters
    for (let char of str2) {
        html += `<th>${char}</th>`;
    }
    html += '</tr></thead><tbody>';

    // Matrix rows
    for (let i = 0; i < matrix.length; i++) {
        html += '<tr>';

        // Row header
        if (i === 0) {
            html += '<th>ε</th>';
        } else {
            html += `<th>${str1[i - 1]}</th>`;
        }

        // Matrix cells
        for (let j = 0; j < matrix[i].length; j++) {
            const isResult = (i === matrix.length - 1 && j === matrix[i].length - 1);
            const cellClass = isResult ? 'result-cell' : '';
            html += `<td class="${cellClass}">${matrix[i][j]}</td>`;
        }

        html += '</tr>';
    }

    html += '</tbody></table>';
    html += '<p class="matrix-note"><em>ε represents an empty string. The bottom-right cell shows the final edit distance.</em></p>';

    container.innerHTML = html;
}

function tracebackOperations(matrix, str1, str2) {
    const operations = [];
    let i = str1.length;
    let j = str2.length;

    while (i > 0 || j > 0) {
        if (i === 0) {
            operations.unshift({
                type: 'insert',
                char: str2[j - 1],
                position: j
            });
            j--;
        } else if (j === 0) {
            operations.unshift({
                type: 'delete',
                char: str1[i - 1],
                position: i
            });
            i--;
        } else if (str1[i - 1] === str2[j - 1]) {
            operations.unshift({
                type: 'match',
                char: str1[i - 1]
            });
            i--;
            j--;
        } else {
            const deleteCost = matrix[i - 1][j];
            const insertCost = matrix[i][j - 1];
            const substituteCost = matrix[i - 1][j - 1];
            const minCost = Math.min(deleteCost, insertCost, substituteCost);

            if (minCost === substituteCost) {
                operations.unshift({
                    type: 'substitute',
                    from: str1[i - 1],
                    to: str2[j - 1],
                    position: i
                });
                i--;
                j--;
            } else if (minCost === deleteCost) {
                operations.unshift({
                    type: 'delete',
                    char: str1[i - 1],
                    position: i
                });
                i--;
            } else {
                operations.unshift({
                    type: 'insert',
                    char: str2[j - 1],
                    position: j
                });
                j--;
            }
        }
    }

    return operations;
}

function displayOperations(operations, str1, str2, container) {
    let html = '<div class="operations-list">';
    let currentString = str1;
    let stepNumber = 0;

    html += `<div class="operation-step"><strong>Start:</strong> "${currentString}"</div>`;

    for (let op of operations) {
        if (op.type !== 'match') {
            stepNumber++;
            let description = '';

            switch (op.type) {
                case 'insert':
                    description = `Insert '<span class="highlight">${op.char}</span>'`;
                    break;
                case 'delete':
                    description = `Delete '<span class="highlight">${op.char}</span>'`;
                    break;
                case 'substitute':
                    description = `Substitute '<span class="highlight">${op.from}</span>' with '<span class="highlight">${op.to}</span>'`;
                    break;
            }

            html += `<div class="operation-step">
                <strong>Step ${stepNumber}:</strong> ${description}
            </div>`;
        }
    }

    html += `<div class="operation-step final-step"><strong>Result:</strong> "${str2}"</div>`;
    html += '</div>';

    if (stepNumber === 0) {
        html = '<p class="info-message">The strings are identical! No operations needed.</p>';
    }

    container.innerHTML = html;
}
