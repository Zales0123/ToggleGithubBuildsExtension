function addToggleSuccessBuildButton() {
    let hideAllChecksButton = document.querySelector('.mergeability-details .branch-action-item:nth-child(2) div:nth-child(2) button');

    let toggleSuccessBuildsButton = document.createElement('button');
    toggleSuccessBuildsButton.setAttribute('aria-expanded', false);
    toggleSuccessBuildsButton.setAttribute('class', 'btn-link float-right');
    toggleSuccessBuildsButton.innerText = 'Toggle success builds';
    toggleSuccessBuildsButton.style = "margin-left: 1rem;";
    toggleSuccessBuildsButton.addEventListener('click', () => {
        document.querySelectorAll('.octicon-check.color-text-success').forEach(function(element) {
            let actionItem = element.parentElement.parentElement;
            let offsetParent = element.parentElement.offsetParent;
            if (offsetParent == null) {
                actionItem.setAttribute('style', "display: flex !important;");
            } else {
                actionItem.setAttribute('style', "display: none !important;");
            }
        })
    })

    hideAllChecksButton.parentNode.insertBefore(toggleSuccessBuildsButton, hideAllChecksButton);
}

let callback = function(mutationsList) {
    for (let mutation of mutationsList) {
        for (let addedNode of mutation.addedNodes) {
            if (addedNode.id == 'partial-pull-merging') {
                addToggleSuccessBuildButton();
            }
        }
    }
};
var observer = new MutationObserver(callback);
observer.observe(document, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
});
