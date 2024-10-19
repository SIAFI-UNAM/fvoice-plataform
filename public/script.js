document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-correction');
    const initialTranscription = document.getElementById('initial-transcription');
    const correctedTranscription = document.getElementById('corrected-transcription');
    const problemReport = document.getElementById('problem-report');

    submitButton.addEventListener('click', function() {
        const correction = correctedTranscription.value.trim();
        const problem = problemReport.value;

        if (correction === '' && problem === '') {
            alert('Por favor, ingrese una corrección o seleccione un problema antes de enviar.');
            return;
        }

        // Here you would typically send the data to a server
        console.log('Transcripción original:', initialTranscription.value);
        console.log('Corrección:', correction);
        console.log('Problema reportado:', problem);

        alert('Corrección enviada con éxito!');

        // Reset form
        correctedTranscription.value = '';
        problemReport.value = '';
    });
});