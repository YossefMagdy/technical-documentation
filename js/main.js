function copy(x){
  
    x.children[0].classList.toggle('fa-check')

    let id=x.parentNode.getAttribute("id")
    let range=document.createRange();
    range.selectNode(document.getElementById(id))
      window.getSelection().removeAllRanges();
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

