const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];
const rootNode = document.getElementById('root');
// Todo: your code goes here
const ulElement = document.createElement('ul');
rootNode.appendChild(ulElement);
function goStructure(structure, parentTagElement) {
    structure.forEach(element => {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let i = document.createElement('i');
        let span = document.createElement('span');
            if (element.folder){
                i.className = 'material-icons orange600';
                i.innerText = 'folder';
                div.className = 'folder';
                div.addEventListener('click', clickFolder);
            } else {
                i.className = 'material-icons';
                i.innerText = 'insert_drive_file';
                div.className = 'file';
            }
        span.innerText = element.title;
        div.appendChild(i);
        div.appendChild(span);
        li.appendChild(div);
        parentTagElement.appendChild(li);
        if (!element.children && element.folder){
            let freeUL = document.createElement('ul');
            let freeLI = document.createElement('li');
            freeLI.innerText = 'Folder is empty';
            freeLI.className = 'freeLi';
            freeUL.className = 'feeUl';
            freeUL.appendChild(freeLI);
            li.appendChild(freeUL);
        }
        if (element.children){
            let childTagUl = document.createElement('ul');
            childTagUl.className = 'child';
            li.appendChild(childTagUl);
            goStructure(element.children, childTagUl);
        }
    });
}
goStructure(structure, ulElement);
function clickFolder(){
    let zero = 0;
    let folder = this.children[zero].innerHTML;
    if (folder === 'folder_open') {
        this.children[zero].innerHTML = 'folder';
    } else {
        this.children[zero].innerHTML = 'folder_open';
    }
    let block = this.nextElementSibling.style.display;
    if (block === 'block') {
        this.nextElementSibling.style.display = 'none';
    } else {
        this.nextElementSibling.style.display = 'block';
    }
}