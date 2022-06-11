const $nome = document.getElementById('nome');
// const $form = document.getElementById('form');
// const $error = document.querySelectorAll('.error');
// var $check = document.querySelectorAll('input[type=checkbox]');
// var $checkPais = document.querySelectorAll('input[type=radio]');
// const $separator = " ";
// const $arrayNome = [];
const $button = document.getElementById('button');
const $classHobbies = document.querySelectorAll('.hobbies');
const $classPaises = document.querySelectorAll('.paises');
const $erro = document.querySelector('.teste')


$nome.addEventListener("keypress", (e) => {

    const keyCode = e.key;

    if (keyCode > 0 && keyCode < 9) {
        e.preventDefault();
        $nome.setAttribute("placeholder", "Apenas letras!"); 
        $nome.classList.add('error');
    }
    
});

$button.addEventListener('click', (e) => {

    checkName();
    checkHobbies();
    checagemPais();

    function checkName() {

        if ($nome.value === ' ' || $nome.value == null) {
            e.preventDefault();
            $nome.setAttribute("placeholder", "O campo nome é obrigatório!"); //Formatar o placeholder no CSS "depois"
            $nome.classList.add('error');
            $nome.value = '';
        }

        else if ($nome.value.length > 150) {
            e.preventDefault();
            $nome.setAttribute("placeholder", "Nome deve conter menos de 150 caracteres!"); //Formatar o placeholder no CSS "depois"
            $nome.classList.add('error');
            $nome.value = '';
        }

        else if($nome.value.match(' ') == null){
            e.preventDefault();
            $nome.setAttribute("placeholder", "Coloque seu nome completo!"); //Formatar o placeholder no CSS "depois"
            $nome.classList.add('error');
            $nome.value = '';
        }

        const receba = $nome.value.split(' ');
        if (receba[0].length <= 1 && receba[1].length <= 1){
            e.preventDefault();
            $nome.setAttribute("placeholder", "Coloque seu nome completo!"); //Formatar o placeholder no CSS "depois"
            $nome.classList.add('error');
            $nome.value = '';
        }

        else{
            $nome.classList.remove('error');
        }
    }

    function checkHobbies() {
        var checado = 0;

        for (let i = 0; i < $classHobbies.length; i++) {

            if ($classHobbies[i].checked) {
                checado++;
            }
            else if ( checado > 4){
                e.preventDefault();
                $erro.style.visibility("visible")
            }

        }

        if ($classHobbies[4].checked && $classHobbies[5].checked) {
            e.preventDefault();
            window.alert("Combinação de Hobbies não permitida!");
        } 
        else if ($classHobbies[9].checked && $classHobbies[12].checked) {
            e.preventDefault();
            window.alert("Combinação de Hobbies não permitida!");
        }
        else if ($classHobbies[0].checked && $classHobbies[11].checked) {
            e.preventDefault();
            window.alert("Combinação de Hobbies não permitida!");
        }

    }

    function checagemPais() {

        var paisCheck = 0;

        console.log("Teste")

        for (let i = 0; i < $classPaises.length; i++) {

            if ($classPaises[i].checked) {
                return paisCheck + 1;
            }

            checkBr();

        }

        function checkBr() {

            if ($classPaises[2].checked) {
                e.preventDefault();
                window.alert("Desculpe, ainda não estamos recrutando bruxos no Brasil, mas chegaremos em breve!");
                paisCheck = 0;
            }

        }

        if (paisCheck == 0) {
            e.preventDefault();
        }

    }

})

// $nome.addEventListener('click', () => {
//     let i = 0
//     while (i < $check.length) {
//         $arrayHobbies.push($check[i]);
//         i++;
//     }
// });

// $nome.addEventListener('click', () => {
//     let i = 0
//     while (i < $checkPais.length) {
//         $arrayPaises.push($checkPais[i]);
//         i++;
//     }
//     console.log($arrayPaises)
// });
