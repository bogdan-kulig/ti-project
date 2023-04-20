const shareOpinionDialog = document.querySelector('#share-opinion');
const opinionsContainer = document.querySelector('#opinions-container');
const userMenu = document.querySelector('#user-menu');
var yourOpinions = [];

const refreshOpinions = () => {
    opinionsContainer.innerHTML = '';
    yourOpinions.forEach(opinion => {
        const date = `${opinion.opinionedAt.getHours()}:${opinion.opinionedAt.getMinutes()} ${opinion.opinionedAt.getDate()}.${opinion.opinionedAt.getMonth() + 1}.${opinion.opinionedAt.getFullYear()}`
        const opElem = `<div class="opinion">
        <div>Dodano: <span>${date}</span></div>
        <div>
            <div>Treść: </div>
            <div>
            </div>
        </div>
    </div>`
        const opValue = document.createElement('div');
        opValue.innerHTML = opElem;
        opValue.querySelector('.opinion>div:nth-child(2)>div:nth-child(2)').append(opinion.value);
        opinionsContainer.appendChild(opValue);
    });

}

$('.toggleSideMenu').on('click', () => {
    $('.main').toggleClass('main-collapse-side-menu');
});

$('#share-opinion .share-container .send').on('click', () => {
    const textarea = document.querySelector('#opinionTextarea');
    if (textarea?.value?.trim().length == 0) {
        alert('Opinia nie może być pusta')
        return;
    }
    const opinion = {
        opinionedAt: new Date(),
        value: textarea.value,
    }
    yourOpinions.push(opinion);
    shareOpinionDialog.classList.toggle('dpNone');
    textarea.value = '';
    refreshOpinions();
});

$('#share-opinion .share-container .cancel').on('click', () => {
    shareOpinionDialog.classList.toggle('dpNone');
});

$('.side-menu .share-opinion').on('click', () => {
    shareOpinionDialog.classList.toggle('dpNone');
})

$('#user-menu-toggle').on('click', () => {
    userMenu.classList.toggle('dpNone');
})

$('#clearOpinions').on('click', () => {
    yourOpinions = [];
    refreshOpinions();
})