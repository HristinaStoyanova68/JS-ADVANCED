function lockedProfile() {
    //constants
    const SHOW_MORE = 'Show more';
    const HIDE_IT = 'Hide it';
    //capture elements

    const btnElements = Array.from(document.querySelectorAll('div button'));
    //console.log(btnElements);

    //attach event listeners
    for (const btn of btnElements) {
        btn.addEventListener('click', show);
    }

    //onClick functionality

    function show(event) {
        const divChildren = Array.from(event.target.parentElement.children);
        // console.log({divChildren: divChildren});
        // console.log({target: event.target});
        // console.log({parentElement: event.target.parentElement});
        // console.log({children: event.target.parentElement.children});

        const isLocked = divChildren[2].checked;
        // console.log({isLocked: isLocked});

        //if isLocked - do nothing
        if (isLocked) {
            return;
        }

        //else enable functionality
        const hiddenFieldElements = event.target.previousElementSibling;
        //console.log({hiddeenFieldElements});

        if (event.target.textContent === SHOW_MORE) {
            hiddenFieldElements.style.display = 'inline';
            event.target.textContent = HIDE_IT;
            return;
        }

        hiddenFieldElements.style.display = '';
        event.target.textContent = SHOW_MORE;
    }
}