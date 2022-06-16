let nav = document.getElementById('nav-bar');
let menu = document.getElementById('menu-bar');
let menuItemOne = document.getElementById('menu-item1');
let menuItemTwo = document.getElementById('menu-item2');
let menuItemThree = document.getElementById('menu-item3');

menu.addEventListener('click',function(){
    nav.classList.toggle('activeNav');
    menuItemOne.classList.toggle('menuOne');
    menuItemTwo.classList.toggle('menuTwo');
    menuItemThree.classList.toggle('menuThree');
});

let currentPage = 1;
let totalPage;

function getUsers(page){
    let requist = new XMLHttpRequest();
    requist.addEventListener('load' , render);
    requist.addEventListener('error' , errorRender);

    requist.open('GET', 'https://reqres.in/api/users?page=' + page);

    requist.send();
}

function render(){
    let response = this.responseText;
    let responseData = JSON.parse(response);
    let fragment = document.createDocumentFragment();

    responseData.data.forEach(Element => {
        let li = document.createElement('li');
        let pEmail = document.createElement('p');
        pEmail.textContent = Element.email;
        pEmail.classList.add('p-Email');
        let userImg = document.createElement('img');
        userImg.classList.add('user-img');
        userImg.src = Element.avatar;
        li.appendChild(userImg);
        li.appendChild(pEmail);

        fragment.appendChild(li);

    });
    totalPage = responseData.total_pages;
    document.getElementById('user_ul').innerHTML = ' ';
    document.getElementById('user_ul').appendChild(fragment);

}

function errorRender(error){
    if(error == 404){
        let ptext = document.createElement('p');
        ptext.textContent = 'Server Error';
        ptext.classList.add('p-text');
        document.getElementById('user_div').appendChild(ptext);
    }
    let perror = document.createElement('p');
    perror.textContent = 'Page Is Not Found';
    perror.classList.add('p-text');
    document.getElementById('user_div').appendChild(perror);
}

document.getElementById('next').addEventListener('click' , function() {
    if(currentPage == totalPage){
        return;
    }
    currentPage ++;
    getUsers(currentPage);
})

document.getElementById('prev').addEventListener('click' , function() {
    if(currentPage == 1){
        return;
    }
    currentPage --;
    getUsers(currentPage);
})

getUsers(currentPage);