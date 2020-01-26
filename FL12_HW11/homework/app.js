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
cl(structure);
function goStructure(someStructure, parent) {
    for (let k = 0; k < someStructure.length ; k++) {
        if (someStructure[k].folder){
            if(someStructure[k].title){
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                let i = document.createElement('i');
                i.className = 'material-icons orange600';
                i.innerText = 'folder';
                ul.append(i,someStructure[k].title);
                parent.append(ul);
                cl(parent);
                if (someStructure[k].children){
                    ul.appendChild(li);
                    goStructure(someStructure[k].children, parent.nextSibling);
                }
            }
        } else if (someStructure[k].title){
            let i = document.createElement('i');
            i.className = 'material-icons';
            i.innerText = 'insert_drive_file';
            let li = document.createElement('li');
            li.append(i, someStructure);
        }
    }
}

goStructure(structure, rootNode);

function cl(el) {
    console.log(el);
}