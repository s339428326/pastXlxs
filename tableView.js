export function createTable(x, y) {
  if(document?.querySelector('.table')) {
    document.querySelector('.table').remove();
  }
  //create table
  const table = document.createElement('table');
  table.classList.add('table');
  //create tr td
  for(let i = 0;  i < x; i++){
    const tr = document.createElement('tr');
    for(let j = 0; j < y; j++){
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.id =  `cell-${i}${j}`;
      input.classList.add('cell')
      input.dataset.coordinate = `${i}${j}`;

      
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const coordinate = {x: i, y: j};
        const text = e.clipboardData.getData('text')
        const getClipboardData = text.split('\n').map((item) => item.split('\t'));
        //get Max
        const rowLen = getClipboardData[0].length;
        const colLen =  getClipboardData.length 
        console.log(getClipboardData)
        for(let i = coordinate.x; i < colLen + coordinate.x; i++){
          for(let j = coordinate.y; j < rowLen + coordinate.y; j++){
           if(!document.querySelector(`#cell-${i}${j}`)) continue;
           document.querySelector(`#cell-${i}${j}`).value = getClipboardData?.[i - coordinate.x]?.[j - coordinate.y] ? getClipboardData?.[i - coordinate.x]?.[j - coordinate.y] : "";
          }
        }  
      })
      td.append(input)
      tr.append(td)
    }
    table.append(tr);
  }
  document.querySelector('#app').append(table);
}

export const controlTabel = (element) => {
  element.addEventListener("input", (e) => {
    if(isNaN(e.target.value)) return
     setTimeout(() => {
        createTable( 
        element.id === 'x' ? e.target.value : document.querySelector(`#${element.id}`).value,
        element.id === 'y' ? e.target.value : document.querySelector(`#${element.id}`).value
      );
      console.log(document.querySelector(`#x`).value, document.querySelector(`#y`).value)
      }, 500);  
  });

};
