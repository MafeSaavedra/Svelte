<script>
  let inputText = '';
  let responseMessage = '';

  async function sendMessage() {
    // Peticion HTTP
    const response = await fetch('http://localhost:3000/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: inputText })
    });

    const data = await response.json();
    responseMessage = data.message;
    inputText = ''; // Limpiar el input después de enviar
  }
</script>



<main>
  <h1>Enviar un mensaje al Backend</h1>
  <input type="text" bind:value={inputText} placeholder="Escribe tu mensaje aquí">
  <button on:click={sendMessage}>Enviar</button>
  {#if responseMessage}
    <p>Respuesta del servidor: {responseMessage}</p>
  {/if}
</main>



<style>
  main {
    text-align: center;
    padding: 20px;
  }

  input {
    padding: 15px;
    margin-right: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 15px 25px;
    background-color:rgb(191, 95, 226);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover{
    background-color:rgb(112, 125, 227);
  }

  p {
    margin-top: 20px;
    font-weight: bold;
    font-size:1.5rem;
  }
</style>