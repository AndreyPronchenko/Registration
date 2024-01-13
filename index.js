let nam = document.getElementById("name");
let login = document.getElementById("login");
let pass = document.getElementById("pass");
let sub = document.getElementById("submit");
let form = document.getElementById('form1');
let button = document.getElementById('submit1');

let users = {};

function User(name, login, pass) {
    this.name = name;
    this.login = login;
    this.pass = pass;
}

function createID(users) {
    return Object.keys(users).length;
}

    // Очистка полей после нажатия на кнопку регистрации

    localStorage.clear();
    for(let i = 0; i < form.length; i++){
        if(form[i].type === 'submit'){
            form[i].checked = '';
    }
    else{
        form[i].value = '';
    }
  }
  // -------------------------------

//   Авторизация

function pas() {
    console.log(login.value);
    console.log(pass.value);

    if (pass.value == '123' && login.value == 'admin') {
        alert('Авторизация пройдена!');
        pass.value = '';
        login.value = '';
    }
    else {
        alert('Пользователь не найден!');
        pass.value = '';
        login.value = '';
    }
}
button.onclick = pas;
// -------------------------------

sub.addEventListener("click", () => {
    const nameUser = nam.value;
    const loginUser = login.value;
    const passUser = pass.value;
    const user = new User(nameUser, loginUser, passUser);
    const userId = 'User ' + createID(users);
    users [userId] = user;
    console.log(users);
    alert(`${nameUser}, вы успешно прошли регистрацию`)
});