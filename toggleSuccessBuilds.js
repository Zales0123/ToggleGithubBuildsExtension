function addToggleSuccessBuildButton() {
    let hideAllChecksButton = document.querySelector('.mergeability-details .branch-action-item:nth-child(2) div:nth-child(2) button');

    let toggleSuccessBuildsButton = document.createElement('div');
    toggleSuccessBuildsButton.innerHTML = '<button class="btn-link float-right" style="margin-left: 1rem;">Hide success builds</button>'
    toggleSuccessBuildsButton = toggleSuccessBuildsButton.firstChild;

    toggleSuccessBuildsButton.addEventListener('click', toggleSuccessBuildsButtonClickCallback)

    hideAllChecksButton.parentNode.insertBefore(toggleSuccessBuildsButton, hideAllChecksButton);
    hideAllChecksButton.addEventListener('click', function(event) {
        if (event.target.innerText === 'Hide all checks') {
            toggleSuccessBuildsButton.hidden = true;
        } else {
            toggleSuccessBuildsButton.hidden = false;
        }
    });
}

function toggleSuccessBuildsButtonClickCallback(evt) {
    document.querySelectorAll('.octicon-check.color-text-success').forEach(function(element) {
        let actionItem = element.parentElement.parentElement;
        let offsetParent = element.parentElement.offsetParent;
        if (offsetParent == null) {
            actionItem.setAttribute('style', "display: flex !important;");
            evt.target.innerText = 'Hide success builds';
        } else {
            actionItem.setAttribute('style', "display: none !important;");
            evt.target.innerText = 'Show success builds';
        }
    })
}
