let email = prompt('Please write your email like email@gmail.com', 'mail@gmail.com');
const EMAIL_LENGTH = 5;
const PASS_LENGTH= 6;
if (email === ''|| email === null){
    alert('Canceled');
} else if(email.length<EMAIL_LENGTH){
    alert('I do not know emails having name length less than 5 symbols.');
} else if ( email === 'user@gmail.com' || email === 'admin@gmail.com'){
    let password = prompt('Enter password', '');
    if (password ==='' || password === null){
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
               email === 'admin@gmail.com' && password === 'AdminPass'){
        let passChange = confirm('Do you want to change your password?');
        if(!passChange){
            alert('You have failed the change');
        } else{
            let oldPass = prompt('Write your old password.', '');
            if (oldPass ==='' || oldPass === null || oldPass!==password){
                alert('Canceled');
            }else {
                let newPassword = prompt('Well Done! Enter New Password!', '');
                if(newPassword ===''|| newPassword===null || oldPass!==password){
                    alert('Canceled');
                } else if(newPassword.length<PASS_LENGTH){
                    alert('It is too short password. Sorry')
                } else {
                    let newPasswordConfirm = prompt('Enter it again!');
                    if (newPasswordConfirm !== newPassword){
                        alert('You wrote the wrong password.');
                    } else{
                        alert('You have successfully changed your password!!');
                        password = newPasswordConfirm;
                    }
                }
            }
        }
    } else {
        alert('Wrong password!')
    }
} else {
    alert('I do not know you!');
}
