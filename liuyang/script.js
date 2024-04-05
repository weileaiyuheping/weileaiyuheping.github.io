/* document.getElementById('like-btn').addEventListener('click', function() {
    let count = parseInt(document.getElementById('like-count').innerText);
    document.getElementById('like-count').innerText = count + 1;
  
    createSnowflakeEffect();
  });
  
  function createSnowflakeEffect() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    document.body.appendChild(snowflake);
  
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = '-10px';
  
    setTimeout(() => snowflake.remove(), 3000);
  }
   */

  document.getElementById('like-btn').addEventListener('click', function() {
    let count = parseInt(document.getElementById('like-count').innerText);
    document.getElementById('like-count').innerText = count + 1;
  
    createCherryBlossomEffect();
  });
  
  function createCherryBlossomEffect() {
    const numCherryBlossoms = 100; // 定义创建的樱花数量
    for (let i = 0; i < numCherryBlossoms; i++) {
      const cherryBlossom = document.createElement('div');
      cherryBlossom.classList.add('cherry-blossom');
      document.body.appendChild(cherryBlossom);
  
      // 随机设置樱花的位置
      cherryBlossom.style.left = Math.random() * (window.innerWidth - cherryBlossom.offsetWidth) + 'px';
      cherryBlossom.style.top = Math.random() * (window.innerHeight - cherryBlossom.offsetHeight) + 'px';
  
      setTimeout(() => cherryBlossom.remove(), 3000);
    }
  }
  
  