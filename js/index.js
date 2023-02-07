window.addEventListener('DOMContentLoaded', () => {
    const addCompanyDefolt = `
        <button class="main__add-company__btn">
            <span></span>
            <span></span>
        </button>
        <form action="#" class="main__add-company__form">
            <input name="name" required placeholder="введіть назву команди/компанії" type="text">
            <input name="name" required placeholder="введіть вашого головного" type="name">
            <input name="name" required placeholder="введіть його контакти" type="text">
            <input name="name" required placeholder="введіть кількість учасників" type="number">
            <button class="main__add-company__btn main__add-company__form__submit">
                <span></span>
                <span></span>
            </button>
        </form>
    `;
    const hamburger = document.querySelector('.header__hamburger'),
          logo = document.querySelector('.header__logo'),
          nav = document.querySelector('.header__nav'),
          addCompany = document.querySelector('.main__add-company');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        logo.classList.toggle('header__logo_active');
        nav.classList.toggle('header__nav_active');
    });

    const addCompanyFnc = (card) => {
        const addForm = card.querySelector('.main__add-company__btn'),
              form = card.querySelector('.main__add-company__form'),
              submit = form.querySelector('.main__add-company__form__submit');

        addForm.addEventListener('click', () => {
            addForm.classList.toggle('main__add-company__btn_active');
            form.classList.toggle('main__add-company__form_active');
            card.classList.toggle('main__add-company_active');
        });
  
        submit.addEventListener('click', e => {
            e.preventDefault();

            let nameCompany = form.children[0].value.trim();
            let nameHead = form.children[1].value.trim();
            let contacts = form.children[2].value.trim();
            let num = form.children[3].value.trim();

            if (nameCompany == false || nameHead == false || contacts == false || num == false) {
                alert('не правильно');
            } else {
                card.innerHTML = `
                    <button class="main__add-company__btn main__add-company__btn_active main__add-company__btn_done">
                        <span></span>
                        <span></span>
                    </button>
                    <h3 class="main__add-company-name">
                        ${nameCompany}
                    </h3>
                    <p class="main__add-company__data">
                        Головний: ${nameHead}
                    </p>
                    <p class="main__add-company__data">
                        Контакти: ${contacts}
                    </p>
                    <p class="main__add-company__data">
                        Кількість учасників: ${num}
                    </p>
                    <button class="main__add-company__btn main__add-company__form__submit" id="btn_add-newsct">
                        <span></span>
                        <span></span>
                    </button> 
                `;

                card.classList.remove('main__add-company_active');

                const addNewSct = document.querySelector('#btn_add-newsct');
                
                document.querySelector('.main__add-company__btn_done').addEventListener('click', () => {
                    addCompany.innerHTML = `${addCompanyDefolt}`;

                    addCompanyFnc(addCompany);
                });

                addNewSct.addEventListener('click', e => {
                    addNewSct.classList.toggle('main__add-company__btn_active');

                    const newForm = document.createElement('div');

                    newForm.classList.toggle('main__add-company');
                    // newForm.classList.toggle('main__add-company-new');

                    document.querySelector('main').append(newForm);

                    newForm.innerHTML = `${addCompanyDefolt}`;

                    addCompanyFnc(newForm);
                });
            
            }
        });
    };
    addCompanyFnc(addCompany);
});
