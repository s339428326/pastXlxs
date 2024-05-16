function createTable(x, y) {
  if(document?.querySelector('.table')) {
    document.querySelector('.table').remove();
  }
  const table = document.createElement('table');
  table.classList.add('table');


  for(let i = 0;  i < x; i++){
    const tr = document.createElement('tr');
    tr.classList.add(`tr-${i}`);
    for(let j = 0; j < y; j++){
      const td = document.createElement('td');
      const input = document.createElement('input')
      input.classList.add(`cell-${i}${j}`)
      td.classList.add(`td-${j}`)
      
      input.addEventListener('paste', (e) => {
        const text = e.clipboardData.getData('text')
        console.log(text)
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
