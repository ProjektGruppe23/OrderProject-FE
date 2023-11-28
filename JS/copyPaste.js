function copyToClipboard(btn) {
    // Find the cell (td) that contains the button
    const cell = btn.parentNode;

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = cell.textContent.replace('Copy', '').trim(); // Copy the cell content excluding the button text

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text and copy it to the clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);
}