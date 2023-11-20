document.getElementById('submit-btn').addEventListener('click', function(){
        // Email Fuild
    const emailFuild = document.getElementById('email-fuild');
    const emailValue = emailFuild.value;

        // Password Fuild
    const passwordFuild = document.getElementById('password-fuild');
    const passwordValue = passwordFuild.value;
    
    // Condetions
    if(emailValue === 'minhaj@gmail.com' && passwordValue === '322532'){
        window.location.href = './bank-page.html';
    }
    else{
        alert('Plase Enter Your Valid Email And Password');
        emailFuild.value = '';
        passwordFuild.value = '';
    }
})