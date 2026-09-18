async function applyValues(csvPath) {
  const response = await fetch(csvPath);
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  const textData = await response.text();
  const lines = textData.trim().split(/\n/);

  const codeIndex = 0;
  const valueIndex = 1;

  const valueMap = new Map();
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    const code = row[codeIndex];
    const value = row[valueIndex];

    valueMap.set(code, value)
  }

  const municipalities = document.getElementById("map").getSVGDocument().getElementById("municipalities").children;
  Array.from(municipalities).forEach(elm => {
    const valueToSet = valueMap.get(elm.id);
    
    elm.setAttribute('fill', 
      valueToSet == 5 ? "#e87afd" : 
      valueToSet == 4 ? "#f56d64" : 
      valueToSet == 3 ? "#faff79" : 
      valueToSet == 2 ? "#bbf59d" : 
      valueToSet == 1 ? "#b7ddfd" : "#fff"
    );
  });
}

document.getElementById("map").addEventListener('load', () => {
  applyValues('res/keikenti-map/data.csv');
});
