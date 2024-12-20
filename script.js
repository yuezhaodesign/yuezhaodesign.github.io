let isDesignerMode = true;

function toggleMode() {
  const homeDiv = document.getElementById('home');
  const content = document.getElementById('content');

  if (isDesignerMode) {
    homeDiv.style.backgroundColor = '#212121'; // Developer Mode Background
    homeDiv.style.color = '#ffffff';
    content.textContent = '<h1>[ DESIGNER ]</h1><p>Hey there! I am Yue Zhao, a UX designer passionate about crafting intuitive and visually engaging interfaces. </p>';
    
  } else {
    homeDiv.style.backgroundColor = '#e3f2fd'; // Designer Mode Background
    homeDiv.style.color = '#333';
    content.textContent = 
    ' <h1>[ DEVELOPER ]</h1><p>const YueZhao = {</p><br><p>skills: ['HTML', 'CSS', 'JavaScript'],</p><br><p>passion: 'writing clean, efficient code',</p><br><p>goal: 'building scalable, user-friendly web solutions',</p><br><p>};</p><br><p>console.log('Let's code the future together!');</p>';  
}

  isDesignerMode = !isDesignerMode;
}