let toggleSuccessBuilds = function(mutationsList) {
    for (let mutation of mutationsList) {
        for (let addedNode of mutation.addedNodes) {
            if (addedNode.id == 'partial-pull-merging') {
                addToggleSuccessBuildButton();
            }
        }
    }
};

let observer = new MutationObserver(toggleSuccessBuilds);
observer.observe(document, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
});
