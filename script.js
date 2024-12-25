document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-button');
    const letter = document.getElementById('letter');
    const heartsContainer = document.getElementById('hearts-container');
  
    // Function to create falling snowflakes
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${2 + Math.random() * 3}s`; // Random fall duration
      heartsContainer.appendChild(snowflake);
  
      // Remove snowflake after animation
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    }
  
    // Event listener for reveal button
    revealButton.addEventListener('click', () => {
      letter.style.display = 'block';
      revealButton.style.display = 'none';
  
      // Start falling snowflakes
      setInterval(createSnowflake, 200);
    });
  });
  
