function HasIdAttr (button) {
    var hasIdAttr = false;
    if (button.hasAttribute) {
        hasIdAttr = button.hasAttribute ("id");
    } 
    else {
        if (button.getAttributeNode) {
            var idAttr = button.getAttributeNode ("id");
            if (idAttr) {
                hasIdAttr = idAttr.specified;
            }
        }
    }
    alert (hasIdAttr);
}